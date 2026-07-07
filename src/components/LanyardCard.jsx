import useLanyard from '../hooks/useLanyard'

const presenceLabels = {
  dnd: 'Do Not Disturb',
  idle: 'Idle',
  offline: 'Offline',
  online: 'Online',
}

const neutralLabels = {
  error: 'Presence temporarily unavailable',
  loading: 'Syncing presence',
  missing: 'Discord ID needed',
  unavailable: 'Presence unavailable',
}

const getActivityDetails = (presence) => {
  if (!presence) {
    return null
  }

  if (presence.listening_to_spotify && presence.spotify) {
    return {
      label: 'Spotify',
      value: `${presence.spotify.song} by ${presence.spotify.artist}`,
    }
  }

  const customStatus = presence.activities?.find((item) => item.type === 4 && item.state)
  if (customStatus?.state) {
    return {
      label: 'Custom status',
      value: customStatus.state,
    }
  }

  const activity = presence.activities?.find((item) => item.type !== 4)

  if (activity?.details && activity?.name) {
    return {
      label: 'Activity',
      value: `${activity.name}: ${activity.details}`,
    }
  }

  if (activity?.name) {
    return {
      label: 'Activity',
      value: activity.name,
    }
  }

  return null
}

const formatLastUpdated = (timestamp) => {
  if (!timestamp) {
    return null
  }

  const seconds = Math.max(1, Math.round((Date.now() - timestamp) / 1000))

  if (seconds < 60) {
    return `${seconds}s ago`
  }

  const minutes = Math.round(seconds / 60)
  return `${minutes}m ago`
}

const getPresenceView = ({ data, errorType, isConfigured, isStale, lastUpdatedAt, status }) => {
  const actualStatus = data?.discord_status

  if (actualStatus && presenceLabels[actualStatus]) {
    return {
      detailLabel: isStale ? 'Last known status' : 'Status',
      detailValue: presenceLabels[actualStatus],
      statusClass: actualStatus,
      statusText: isStale ? `Last known: ${presenceLabels[actualStatus]}` : presenceLabels[actualStatus],
      staleText: isStale ? formatLastUpdated(lastUpdatedAt) : null,
    }
  }

  if (!isConfigured) {
    return {
      detailLabel: 'Status',
      detailValue: 'Not connected',
      statusClass: 'unavailable',
      statusText: neutralLabels.missing,
      staleText: null,
    }
  }

  if (status === 'loading') {
    return {
      detailLabel: 'Status',
      detailValue: 'Syncing',
      statusClass: 'syncing',
      statusText: neutralLabels.loading,
      staleText: null,
    }
  }

  const unavailableText =
    errorType === 'service-unavailable' ? 'Lanyard is not monitoring this user' : neutralLabels.error

  return {
    detailLabel: 'Status',
    detailValue: status === 'unavailable' ? 'Service unavailable' : 'Temporarily unavailable',
    statusClass: 'unavailable',
    statusText: unavailableText,
    staleText: null,
  }
}

export default function LanyardCard({ config, fallbackUsername, profileImage }) {
  const { data, error, errorType, isConfigured, isStale, lastUpdatedAt, status } = useLanyard(
    config?.userId,
    config?.pollIntervalMs,
  )

  if (!config?.enabled) {
    return null
  }

  const user = data?.discord_user
  const displayName = user?.global_name || user?.username || fallbackUsername
  const activityDetails = getActivityDetails(data)
  const presenceView = getPresenceView({
    data,
    errorType,
    isConfigured,
    isStale,
    lastUpdatedAt,
    status,
  })

  const kvItems = (config?.kvKeys ?? [])
    .map((key) => ({ key, value: data?.kv?.[key] }))
    .filter((item) => item.value)

  return (
    <article
      className={`lanyard-card lanyard-card-${presenceView.statusClass}`}
      aria-live="polite"
      data-reveal="card"
    >
      <div className="lanyard-card-shell">
        <div className="lanyard-card-header">
          <div className="lanyard-avatar-wrap">
            <img
              alt={profileImage?.alt ?? 'Glitch profile avatar'}
              className="lanyard-avatar"
              height="72"
              loading="eager"
              src={profileImage?.src}
              width="72"
            />
            <span className={`lanyard-status-dot lanyard-status-${presenceView.statusClass}`}>
              <span className="sr-only">{presenceView.statusText}</span>
            </span>
          </div>

          <div className="lanyard-identity">
            <p className="lanyard-label">Live Discord</p>
            <h3>{displayName}</h3>
            <p className="lanyard-presence">{presenceView.statusText}</p>
          </div>
        </div>

        <dl className="lanyard-details">
          <div>
            <dt>{presenceView.detailLabel}</dt>
            <dd>{presenceView.detailValue}</dd>
          </div>
          {presenceView.staleText ? (
            <div>
              <dt>Updated</dt>
              <dd>{presenceView.staleText}</dd>
            </div>
          ) : null}
          {activityDetails ? (
            <div className="lanyard-detail-wide">
              <dt>{activityDetails.label}</dt>
              <dd>{activityDetails.value}</dd>
            </div>
          ) : null}
          {kvItems.map((item) => (
            <div key={item.key}>
              <dt>{item.key}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>

        {error && !data ? <p className="lanyard-error">{error}</p> : null}
      </div>
    </article>
  )
}
