export const presenceLabels = {
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

export const getActivityDetails = (presence) => {
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

export const formatLastUpdated = (timestamp) => {
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

export const getPresenceView = ({
  data,
  errorType,
  isConfigured,
  isStale,
  lastUpdatedAt,
  status,
}) => {
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
