export function SlideClosing({ heading, subtitle, author, style }) {
  return (
    <section className="slide-closing" style={style}>
      <h1>{heading}</h1>
      {subtitle && <p className="closing-subtitle">{subtitle}</p>}
      {author && (
        <div className="closing-author">
          <strong>{author.name}</strong>
          {author.role && <span>{author.role}</span>}
          {author.email && <span>{author.email}</span>}
        </div>
      )}
    </section>
  )
}
