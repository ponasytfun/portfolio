import { useEffect, useMemo, useState } from 'react'

const LANYARD_USER_ID_PATTERN = /^\d{15,22}$/
const LANYARD_API_BASE = 'https://api.lanyard.rest/v1/users'

export default function useLanyard(userId, pollIntervalMs = 30000) {
  const normalizedUserId = useMemo(() => String(userId ?? '').trim(), [userId])
  const isConfigured = LANYARD_USER_ID_PATTERN.test(normalizedUserId)

  const [presence, setPresence] = useState({
    data: null,
    error: null,
    status: isConfigured ? 'loading' : 'missing',
  })

  useEffect(() => {
    if (!isConfigured) {
      setPresence({
        data: null,
        error: null,
        status: 'missing',
      })
      return undefined
    }

    let cancelled = false
    let intervalId

    const fetchPresence = async () => {
      setPresence((current) => ({
        ...current,
        error: null,
        status: current.data ? 'ready' : 'loading',
      }))

      try {
        const response = await fetch(`${LANYARD_API_BASE}/${normalizedUserId}`, {
          cache: 'no-store',
          headers: {
            Accept: 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`Lanyard returned ${response.status}`)
        }

        const json = await response.json()

        if (!json.success) {
          throw new Error('Lanyard did not return a successful response')
        }

        if (!cancelled) {
          setPresence({
            data: json.data,
            error: null,
            status: 'ready',
          })
        }
      } catch (error) {
        if (!cancelled) {
          setPresence((current) => ({
            data: current.data,
            error: error instanceof Error ? error.message : 'Unable to load Lanyard data',
            status: current.data ? 'ready' : 'error',
          }))
        }
      }
    }

    fetchPresence()
    intervalId = window.setInterval(fetchPresence, pollIntervalMs)

    return () => {
      cancelled = true
      window.clearInterval(intervalId)
    }
  }, [isConfigured, normalizedUserId, pollIntervalMs])

  return {
    ...presence,
    isConfigured,
    userId: normalizedUserId,
  }
}
