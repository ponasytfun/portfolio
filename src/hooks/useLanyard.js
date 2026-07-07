import { useEffect, useMemo, useState } from 'react'

const LANYARD_USER_ID_PATTERN = /^\d{15,22}$/
const LANYARD_API_BASE = 'https://api.lanyard.rest/v1/users'
const PRESENCE_TIMEOUT_MS = 8000
const PRESENCE_CACHE_PREFIX = 'glitch-lanyard-presence'

const getCacheKey = (userId) => `${PRESENCE_CACHE_PREFIX}:${userId}`

const readCachedPresence = (userId) => {
  if (typeof window === 'undefined' || !userId) {
    return null
  }

  try {
    const cached = window.sessionStorage.getItem(getCacheKey(userId))
    return cached ? JSON.parse(cached) : null
  } catch {
    return null
  }
}

const writeCachedPresence = (userId, data) => {
  if (typeof window === 'undefined' || !userId || !data) {
    return
  }

  try {
    window.sessionStorage.setItem(
      getCacheKey(userId),
      JSON.stringify({
        data,
        lastUpdatedAt: Date.now(),
      }),
    )
  } catch {
    // Presence caching is progressive enhancement; ignore storage failures.
  }
}

const createInitialPresence = (userId, isConfigured) => {
  if (!isConfigured) {
    return {
      data: null,
      error: null,
      errorType: null,
      lastUpdatedAt: null,
      status: 'missing',
    }
  }

  const cached = readCachedPresence(userId)

  if (cached?.data) {
    return {
      data: cached.data,
      error: null,
      errorType: null,
      lastUpdatedAt: cached.lastUpdatedAt ?? null,
      status: 'stale',
    }
  }

  return {
    data: null,
    error: null,
    errorType: null,
    lastUpdatedAt: null,
    status: 'loading',
  }
}

const readLanyardError = async (response) => {
  try {
    const json = await response.json()
    return json?.error?.message || json?.message || `Lanyard returned ${response.status}`
  } catch {
    return `Lanyard returned ${response.status}`
  }
}

export default function useLanyard(userId, pollIntervalMs = 30000) {
  const normalizedUserId = useMemo(() => String(userId ?? '').trim(), [userId])
  const isConfigured = LANYARD_USER_ID_PATTERN.test(normalizedUserId)

  const [presence, setPresence] = useState(() =>
    createInitialPresence(normalizedUserId, isConfigured),
  )

  useEffect(() => {
    setPresence(createInitialPresence(normalizedUserId, isConfigured))
  }, [isConfigured, normalizedUserId])

  useEffect(() => {
    if (!isConfigured) {
      return undefined
    }

    let cancelled = false
    let intervalId
    let activeController
    let timeoutId
    let isFetching = false

    const fetchPresence = async () => {
      if (isFetching) {
        return
      }

      isFetching = true
      let didTimeout = false
      activeController = new AbortController()
      timeoutId = window.setTimeout(() => {
        didTimeout = true
        activeController.abort()
      }, PRESENCE_TIMEOUT_MS)

      setPresence((current) => ({
        ...current,
        error: null,
        errorType: null,
        status: current.data ? 'refreshing' : 'loading',
      }))

      try {
        const response = await fetch(`${LANYARD_API_BASE}/${normalizedUserId}`, {
          cache: 'no-store',
          headers: {
            Accept: 'application/json',
          },
          signal: activeController.signal,
        })

        if (!response.ok) {
          const message = await readLanyardError(response)
          const error = new Error(message)
          error.name = response.status === 404 ? 'LanyardUnavailableError' : 'LanyardHttpError'
          throw error
        }

        const json = await response.json()

        if (!json.success || !json.data) {
          throw new Error('Lanyard did not return a successful presence payload')
        }

        writeCachedPresence(normalizedUserId, json.data)

        if (!cancelled) {
          setPresence({
            data: json.data,
            error: null,
            errorType: null,
            lastUpdatedAt: Date.now(),
            status: 'ready',
          })
        }
      } catch (error) {
        if (!cancelled && (error.name !== 'AbortError' || didTimeout)) {
          setPresence((current) => {
            const hasLastKnownPresence = Boolean(current.data)
            const serviceUnavailable = error.name === 'LanyardUnavailableError'

            return {
              data: current.data,
              error: didTimeout
                ? 'Lanyard request timed out'
                : error instanceof Error
                  ? error.message
                  : 'Unable to load Lanyard data',
              errorType: serviceUnavailable ? 'service-unavailable' : 'temporary-failure',
              lastUpdatedAt: current.lastUpdatedAt,
              status: hasLastKnownPresence ? 'stale' : serviceUnavailable ? 'unavailable' : 'error',
            }
          })
        }
      } finally {
        window.clearTimeout(timeoutId)
        activeController = undefined
        isFetching = false
      }
    }

    fetchPresence()
    intervalId = window.setInterval(fetchPresence, pollIntervalMs)

    return () => {
      cancelled = true
      activeController?.abort()
      window.clearTimeout(timeoutId)
      window.clearInterval(intervalId)
    }
  }, [isConfigured, normalizedUserId, pollIntervalMs])

  return {
    ...presence,
    isConfigured,
    isStale: presence.status === 'stale',
    userId: normalizedUserId,
  }
}
