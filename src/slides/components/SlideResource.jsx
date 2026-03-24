export function SlideResource({ heading = 'Risorse', links, downloadUrl, downloadLabel }) {
  return (
    <section className="slide-resource">
      <h2>{heading}</h2>
      <ul className="resource-list">
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <span className="link-icon">{link.icon || '🔗'}</span> {link.label}
            </a>
          </li>
        ))}
      </ul>
      {downloadUrl && (
        <a href={downloadUrl} className="btn-download">{downloadLabel || '⬇ Scarica materiali'}</a>
      )}
    </section>
  )
}
