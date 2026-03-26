export function SlideCustom({ layout, heading, footer, style, ...data }) {
  return (
    <section className="slide-concept" style={{ textAlign: 'center', ...style }}>
      <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>{heading}</h2>
      {layout === 'feature-grid' && <FeatureGrid features={data.features} />}
      {layout === 'compare-table' && <CompareTable columns={data.columns} rows={data.rows} />}
      {layout === 'player-grid' && <PlayerGrid players={data.players} />}
      {layout === 'flow-diagram' && <FlowDiagram steps={data.steps} />}
      {layout === 'workflow-diagram' && <WorkflowDiagram steps={data.steps} />}
      {layout === 'risk-grid' && <RiskGrid risks={data.risks} />}
      {layout === 'usecase-grid' && <UseCaseGrid usecases={data.usecases} />}
      {layout === 'eco-map' && <EcoMap nodes={data.nodes} center={data.center} />}
      {layout === 'semaforo' && <SemaforoGrid cards={data.cards} />}
      {layout === 'layer-stack' && <LayerStack layers={data.layers} />}
      {footer && <p className="concept-text" style={{ marginTop: '20px', textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: footer }} />}
    </section>
  )
}

function FeatureGrid({ features = [] }) {
  return (
    <div className="feature-grid">
      {features.map((f, i) => (
        <div className="feature-card" key={i}>
          <div className="feature-icon">{f.icon}</div>
          <div className="feature-title">{f.title}</div>
          <div className="feature-desc" dangerouslySetInnerHTML={f.description && typeof f.description === 'string' && f.description.includes('<') ? { __html: f.description } : undefined}>{f.description && !(typeof f.description === 'string' && f.description.includes('<')) ? f.description : null}</div>
        </div>
      ))}
    </div>
  )
}

function CompareTable({ columns = [], rows = [] }) {
  return (
    <table className="compare-table">
      <thead><tr>{columns.map((c, i) => <th key={i}>{c}</th>)}</tr></thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>{row.map((cell, j) => <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />)}</tr>
        ))}
      </tbody>
    </table>
  )
}

function PlayerGrid({ players = [] }) {
  return (
    <div className="player-grid">
      {players.map((p, i) => (
        <div className="player-card" key={i}>
          <div className="player-emoji">{p.emoji}</div>
          <div className="player-name">{p.name}</div>
          <div className="player-strength">{p.strength}</div>
        </div>
      ))}
    </div>
  )
}

function FlowDiagram({ steps = [] }) {
  return (
    <div className="flow-diagram">
      {steps.map((s, i) => (
        <span key={i}>
          <span className="flow-node">{s.icon && <span>{s.icon}<br /></span>}{s.label}</span>
          {i < steps.length - 1 && <span className="flow-arrow">→</span>}
        </span>
      ))}
    </div>
  )
}

function WorkflowDiagram({ steps = [] }) {
  return (
    <div className="workflow-diagram">
      {steps.map((s, i) => (
        <span key={i}>
          <span className={`wf-step ${s.type || ''}`}>{s.emoji && <span>{s.emoji} </span>}{s.label}</span>
          {i < steps.length - 1 && <span className="wf-arrow">→</span>}
        </span>
      ))}
    </div>
  )
}

function RiskGrid({ risks = [] }) {
  return (
    <div className="risk-grid">
      {risks.map((r, i) => (
        <div className="risk-card" key={i}>
          <div className="risk-icon">{r.emoji}</div>
          <h4>{r.title}</h4>
          <p>{r.description}</p>
          {r.mitigation && <div className="mitigation">{r.mitigation}</div>}
        </div>
      ))}
    </div>
  )
}

function UseCaseGrid({ usecases = [] }) {
  return (
    <div className="usecase-grid">
      {usecases.map((u, i) => (
        <div className="uc-item" key={i}>
          <span className="uc-icon">{u.emoji}</span>
          <span>{u.title}</span>
        </div>
      ))}
    </div>
  )
}

function EcoMap({ nodes = [], center }) {
  return (
    <div className="eco-map">
      {center && <div className="eco-center">{center}</div>}
      {nodes.map((n, i) => (
        <div className="eco-node" key={i}>
          <span>{n.icon}</span>
          <span>{n.label}</span>
        </div>
      ))}
    </div>
  )
}

function SemaforoGrid({ cards = [] }) {
  return (
    <div className="semaforo-grid">
      {cards.map((c, i) => (
        <div className="semaforo-card" key={i} style={c.color ? { borderTopColor: c.color } : undefined}>
          <div className="icon">{c.icon}</div>
          <h4>{c.title}</h4>
          <ul>{c.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
        </div>
      ))}
    </div>
  )
}

function LayerStack({ layers = [] }) {
  return (
    <div className="layer-stack">
      {layers.map((l, i) => (
        <div className="layer" key={i}>
          <span className="layer-num">{i + 1}</span>
          <div>
            <strong>{l.title}</strong>
            {l.description && <p>{l.description}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
