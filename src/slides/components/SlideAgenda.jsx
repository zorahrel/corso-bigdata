export function SlideAgenda({ heading = 'Agenda', items }) {
  return (
    <section className="slide-agenda">
      <h2>{heading}</h2>
      <ul className="agenda-list">
        {items.map((item, i) => (
          <li key={i}><span className="emoji">{item.emoji}</span> {item.text}</li>
        ))}
      </ul>
    </section>
  )
}
