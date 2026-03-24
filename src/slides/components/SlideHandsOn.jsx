export function SlideHandsOn({ heading, timer, instructions }) {
  return (
    <section className="slide-hands-on">
      <span className="handson-badge">Esercizio</span>
      <h2>{heading}</h2>
      {timer && <div className="timer">{timer}</div>}
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
