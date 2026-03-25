export function SlideDemo({ heading, description, badgeText = 'DEMO LIVE', demoMaterial }) {
  return (
    <section className="slide-demo" style={{ overflowY: 'auto', maxHeight: '100%' }}>
      <span className="demo-badge"><span className="dot"></span> {badgeText}</span>
      <h2>{heading}</h2>
      {description && <p className="demo-description" dangerouslySetInnerHTML={{ __html: description }} />}
      {demoMaterial && (
        <div style={{ marginTop: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '12px 16px', textAlign: 'left', fontSize: '0.55em', lineHeight: '1.5' }}>
          {demoMaterial.label && <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)', marginBottom: '12px' }}>{demoMaterial.label}</div>}
          {demoMaterial.text && <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '13px', whiteSpace: 'pre-wrap', color: 'var(--text)', lineHeight: '1.7' }}>{demoMaterial.text}</div>}
          {demoMaterial.note && <div style={{ marginTop: '16px', color: 'var(--muted)', fontStyle: 'italic' }}>{demoMaterial.note}</div>}
          {demoMaterial.options && (
            <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
              {demoMaterial.options.map((o, i) => <li key={i} style={{ marginBottom: '6px' }}>{o}</li>)}
            </ul>
          )}
          {demoMaterial.prompt && (
            <div style={{ marginTop: '16px', background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', marginBottom: '8px' }}>Prompt</div>
              <div style={{ fontSize: '13px' }}>{demoMaterial.prompt}</div>
            </div>
          )}
          {demoMaterial.biasHints && (
            <div style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)', marginBottom: '8px' }}>Bias da trovare (docente)</div>
              <ol style={{ paddingLeft: '20px' }}>
                {demoMaterial.biasHints.map((h, i) => <li key={i} style={{ marginBottom: '8px', fontSize: '13px', color: 'var(--muted)' }}>{h}</li>)}
              </ol>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
