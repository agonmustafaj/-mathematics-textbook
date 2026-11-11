/**
 * Leonhard Euler face sticker for the course hero circle.
 */
export function EulerHeroSticker() {
  return (
    <div className="euler-orb">
      <div className="euler-orb__glow" aria-hidden="true" />
      <img
        className="euler-orb__sticker"
        src="/euler-sticker.png"
        alt="Leonhard Euler"
        width={768}
        height={768}
        decoding="async"
      />
    </div>
  )
}
