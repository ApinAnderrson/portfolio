// Polaroid-style image. Pass `src` for a real photo; otherwise an illustrated scene is drawn.
function Scene({ scene }) {
  if (scene === 'desk') {
    return (
      <svg viewBox="0 0 150 180" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="150" height="180" fill="#2a2d33" />
        <rect x="12" y="14" width="26" height="34" fill="#e8e3d6" />
        <rect x="16" y="18" width="18" height="18" fill="#e04a3a" />
        <rect x="46" y="10" width="24" height="34" fill="#f1c84b" />
        <rect x="78" y="14" width="24" height="34" fill="#e8e3d6" />
        <rect x="82" y="20" width="16" height="16" fill="#3a3fe0" />
        <rect x="110" y="8" width="28" height="38" fill="#c44" />
        <path d="M0 70 L150 70" stroke="#e8d7a8" strokeWidth="4" strokeDasharray="10 6" />
        <rect x="28" y="84" width="70" height="44" rx="3" fill="#111" />
        <rect x="32" y="88" width="62" height="36" fill="#3a6fd0" opacity=".7" />
        <rect x="0" y="134" width="150" height="10" fill="#5a4636" />
        <rect x="112" y="96" width="10" height="38" fill="#444" />
        <circle cx="117" cy="92" r="9" fill="#f6d26b" opacity=".85" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 150 180" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfd6dc" />
          <stop offset="1" stopColor="#9aa7b1" />
        </linearGradient>
      </defs>
      <rect width="150" height="180" fill="url(#sky)" />
      <path d="M0 120 L40 70 L70 105 L105 60 L150 110 L150 180 L0 180Z" fill="#6e7c86" />
      <path d="M0 140 L50 110 L90 135 L150 120 L150 180 L0 180Z" fill="#4c5860" />
      <path d="M60 180 Q62 120 85 110 Q112 112 118 180Z" fill="#23384a" />
      <circle cx="88" cy="92" r="15" fill="#d9a07a" />
      <path d="M72 88 Q88 64 106 86 L106 82 Q88 60 72 84Z" fill="#e3a21a" />
      <rect x="70" y="85" width="40" height="5" rx="2" fill="#c98a12" />
    </svg>
  );
}

export default function Photo({ src, scene, caption, tapeColors = ['bg-cobalt', 'bg-sun'] }) {
  return (
    <figure className="relative m-0 bg-white px-2 pt-2 shadow-photo">
      <span className={`tape tape-l ${tapeColors[0]}`} />
      <span className={`tape tape-r ${tapeColors[1]}`} />
      <div className="aspect-[5/6] overflow-hidden bg-neutral-300 [&>*]:pointer-events-none [&>*]:block [&>*]:h-full [&>*]:w-full [&>*]:object-cover">{src ? <img src={src} alt={caption} /> : <Scene scene={scene} />}</div>
      <figcaption className="py-1.5 pb-2 text-center font-hand text-xs text-ink-soft">{caption}</figcaption>
    </figure>
  );
}
