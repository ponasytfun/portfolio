import useLanyard from '../hooks/useLanyard'

const statusLabels = {
  dnd: 'Do not disturb',
  idle: 'Idle',
  offline: 'Offline',
  online: 'Online',
}

const getAvatarUrl = (user) => {
  if (!user?.id || !user?.avatar) {
    return null
  }

  const extension = user.avatar.startsWith('a_') ? 'gif' : 'png'
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}?size=128`
}

const getActivitySummary = (presence) => {
  if (!presence) {
    return 'Waiting for Discord presence'
  }

  if (presence.listening_to_spotify && presence.spotify) {
    return `Listening to ${presence.spotify.song} by ${presence.spotify.artist}`
  }

  const activity = presence.activities?.find((item) => item.type !== 4)

  if (activity?.details && activity?.name) {
    return `${activity.name}: ${activity.details}`
  }

  if (activity?.name) {
    return activity.name
  }

  return statusLabels[presence.discord_status] ?? 'Discord status available'
}

export default function LanyardCard({ config, fallbackUsername }) {
  const { data, error, isConfigured, status } = useLanyard(
    config?.userId,
    config?.pollIntervalMs,
  )

  if (!config?.enabled) {
    return null
  }

  const user = data?.discord_user
  const avatarUrl = getAvatarUrl(user)
  const displayName = user?.global_name || user?.username || fallbackUsername
  const discordStatus = data?.discord_status ?? 'offline'
  const kvItems = (config?.kvKeys ?? [])
    .map((key) => ({ key, value: data?.kv?.[key] }))
    .filter((item) => item.value)

  return (
    <article className={`lanyard-card lanyard-card-${discordStatus}`} aria-live="polite">
      <div className="lanyard-card-header">
        <div className="lanyard-avatar" aria-hidden="true">
          {avatarUrl ? <img alt="" src={avatarUrl} /> : <span>D</span>}
          <span className={`lanyard-status-dot lanyard-status-${discordStatus}`} />
        </div>
        <div>
          <p className="lanyard-label">Live Discord</p>
          <h3>{displayName}</h3>
        </div>
      </div>

      <p className="lanyard-presence">
        {!isConfigured
          ? 'Discord ID needed'
          : error
            ? 'Live status unavailable'
            : status === 'loading'
              ? 'Loading Discord status'
              : getActivitySummary(data)}
      </p>

      <dl className="lanyard-details">
        <div>
          <dt>Status</dt>
          <dd>{isConfigured ? statusLabels[discordStatus] ?? discordStatus : 'Not connected'}</dd>
        </div>
        {kvItems.map((item) => (
          <div key={item.key}>
            <dt>{item.key}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}
