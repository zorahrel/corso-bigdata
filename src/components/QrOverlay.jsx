import { useState, useEffect } from 'react'
import qrcode from 'qrcode-generator'

function generateQrSvg(text, size) {
  const qr = qrcode(0, 'M')
  qr.addData(text)
  qr.make()
  const modules = qr.getModuleCount()
  const cellSize = size / modules
  let path = ''
  for (let row = 0; row < modules; row++) {
    for (let col = 0; col < modules; col++) {
      if (qr.isDark(row, col)) {
        path += `M${col * cellSize},${row * cellSize}h${cellSize}v${cellSize}h-${cellSize}z`
      }
    }
  }
  return { path, size }
}

function QrSvg({ qr }) {
  return (
    <svg width={qr.size} height={qr.size} viewBox={`0 0 ${qr.size} ${qr.size}`}>
      <rect width={qr.size} height={qr.size} fill="white" />
      <path d={qr.path} fill="#111" />
    </svg>
  )
}

export function QrButton({ size = 28, className = '' }) {
  const [showQr, setShowQr] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  // Update URL on popstate (hash changes etc)
  useEffect(() => {
    const update = () => setCurrentUrl(window.location.href)
    window.addEventListener('popstate', update)
    window.addEventListener('hashchange', update)
    return () => {
      window.removeEventListener('popstate', update)
      window.removeEventListener('hashchange', update)
    }
  }, [])

  if (!currentUrl) return null

  const smallQr = generateQrSvg(currentUrl, size)
  const bigQr = showQr ? generateQrSvg(currentUrl, 360) : null

  return (
    <>
      <button
        className={`qr-btn ${className}`}
        onClick={() => setShowQr(true)}
        title="Apri QR code a schermo intero"
      >
        <QrSvg qr={smallQr} />
      </button>

      {showQr && bigQr && (
        <div className="qr-overlay" onClick={() => setShowQr(false)}>
          <div className="qr-overlay-bar">
            <span className="qr-overlay-url">{currentUrl}</span>
            <button className="qr-overlay-close" onClick={() => setShowQr(false)}>
              &#x2715;
            </button>
          </div>
          <div className="qr-overlay-body">
            <QrSvg qr={bigQr} />
            <p className="qr-overlay-hint">Scansiona per aprire le slide</p>
          </div>
        </div>
      )}
    </>
  )
}
