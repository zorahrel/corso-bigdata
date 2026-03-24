export function SlideQuote({ text, source, style }) {
  return (
    <section className="slide-quote" style={style}>
      <blockquote><p>{text}</p></blockquote>
      {source && <div className="quote-source">— {source}</div>}
    </section>
  )
}
