import { AnimatedCounter } from '../AnimatedCounter'

export function SlideStats({ heading, stats, footer, isActive }) {
  return (
    <section className="slide-stats">
      <h2>{heading}</h2>
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-number" style={stat.color ? { color: stat.color } : undefined}>
              <AnimatedCounter target={stat.value} suffix={stat.suffix || ''} isActive={isActive} />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
      {footer && <p className="stats-footer" dangerouslySetInnerHTML={{ __html: footer }} />}
    </section>
  )
}
