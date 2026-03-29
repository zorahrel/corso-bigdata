import { useState } from 'react'

export function SlideMeme({ heading, image, caption }) {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="slide-meme">
      {heading && <h2>{heading}</h2>}
      {image && !imgError && (
        <img
          src={image.src}
          alt={image.alt || ''}
          onError={() => setImgError(true)}
        />
      )}
      {image && imgError && (
        <p className="meme-alt-text">{image.alt || 'Immagine non disponibile'}</p>
      )}
      {caption && <p className="meme-caption">{caption}</p>}
    </section>
  )
}
