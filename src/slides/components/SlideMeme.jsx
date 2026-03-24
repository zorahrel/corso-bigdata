export function SlideMeme({ heading, image, caption }) {
  return (
    <section className="slide-meme">
      {heading && <h2>{heading}</h2>}
      {image && <img src={image.src} alt={image.alt || ''} />}
      {caption && <p className="meme-caption">{caption}</p>}
    </section>
  )
}
