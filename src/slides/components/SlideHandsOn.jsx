export function SlideHandsOn({ heading, timer, level, tools, deliverable, instructions }) {
  return (
    <section className="slide-hands-on">
      <span className="handson-badge">Esercizio</span>
      <h2>{heading}</h2>
      {timer && <div className="timer">{timer}</div>}
      {(level || tools) && (
        <div className="handson-meta">
          {level && <span className="handson-level">{level}</span>}
          {tools && <span className="handson-tools"><strong>Tool:</strong> {tools.join(' · ')}</span>}
        </div>
      )}
      {deliverable && (
        <div className="handson-deliverable"><strong>Deliverable:</strong> {deliverable}</div>
      )}
      <div className="instructions">
        <ol>
          {instructions.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ol>
      </div>
    </section>
  )
}
