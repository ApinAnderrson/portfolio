// Circular avatar. Pass `src` for a real photo, otherwise draws a simple illustrated face.
export default function Avatar({ src, size = 48 }) {
  return (
    <div
      className="h-10 w-10 overflow-hidden rounded-full border-[3px] border-tangerine bg-white shadow-[0_0_0_3px_#f2f0e9,0_8px_20px_-8px_rgba(0,0,0,0.4)] md:h-[var(--s)] md:w-[var(--s)]"
      style={{ '--s': `${size}px` }}
    >
      {src ? (
        <img src={src} alt="" className="h-full w-full object-cover" />
      ) : (
        <svg viewBox="0 0 48 48" className="block h-full w-full" aria-hidden>
          <rect width="48" height="48" fill="#8fb3c9" />
          <circle cx="24" cy="52" r="20" fill="#2d3a4a" />
          <circle cx="24" cy="24" r="9" fill="#e3b08a" />
          <path d="M14 21 Q24 9 34 21 L34 18 Q24 6 14 18Z" fill="#e3a21a" />
          <rect x="12" y="19" width="24" height="3" rx="1.5" fill="#c98a12" />
        </svg>
      )}
    </div>
  );
}
