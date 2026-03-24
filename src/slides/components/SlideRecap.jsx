export function SlideRecap({ heading = 'Recap', items }) {
  return (
    <section className="slide-recap">
      <h2>{heading}</h2>
      <ul className="recap-list">
        {items.map((item, i) => (
          <li key={i}><span className="check">✅</span> {item}</li>
        ))}
      </ul>
    </section>
  )
}
