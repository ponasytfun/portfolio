import useLanyard from '../hooks/useLanyard'
import { getActivityDetails, getPresenceView } from '../utils/discordPresence'

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
