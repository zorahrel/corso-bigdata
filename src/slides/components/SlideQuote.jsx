export function SlideQuote({ text, source, style }) {
  const textColor = style?.color
  return (
    <section className="slide-quote" style={style}>
      <blockquote><p style={textColor ? { color: textColor } : undefined}>{text}</p></blockquote>
      {source && <div className="quote-source" style={textColor ? { color: textColor, opacity: 0.8 } : undefined}>— {source}</div>}
    </section>
  )
}
