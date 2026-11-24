// Lightweight, code-drawn product mockups so the site works without image files.
// Swap for a real screenshot by replacing <Mockup /> with an <img /> in Projects.jsx.

const people = ['#e8b38a', '#c98d6b', '#f0c9a6', '#a8705a'];

function Phone() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-4 overflow-hidden bg-[radial-gradient(circle_at_20%_80%,#34401f,#121210_60%)]">
      <div className="w-[44%] max-w-[170px] translate-y-[30px] [rotate:-12deg]">
        <div className="aspect-[9/18] animate-bob rounded-3xl border-4 border-[#2c2c2c] bg-[#0d0d0d] px-2.5 py-3.5 text-center text-[9px] text-white shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
          <div className="mx-auto -mt-1.5 mb-1.5 h-2 w-2/5 rounded-full bg-black" />
          <div className="flex justify-between text-[7px] opacity-70">
            <span>10:38</span>
            <span>●●● ▮</span>
          </div>
          <p className="mb-1 mt-2 font-semibold">Split Bill</p>
          <p className="text-[7px] opacity-50">Split Bill This Month</p>
          <p className="mb-2 mt-1 text-[22px] font-semibold">
            $1,042<span className="text-[11px] opacity-60">.00</span>
          </p>
          <div className="mb-2 flex justify-center">
            {people.map((c, i) => (
              <span
                key={i}
                className="-ml-1.5 h-5 w-5 animate-hop rounded-full border-2 border-[#0d0d0d] first:ml-0"
                style={{ background: c, animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          {[
            ['Per person', '$260.50'],
            ['Dinner · Fri', '$184.00'],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-t border-white/10 px-1 py-1.5">
              <span className="opacity-60">{k}</span>
              <b>{v}</b>
            </div>
          ))}
          <div className="mt-2 rounded-full bg-lime p-1.5 font-bold text-[#111]">Send requests</div>
        </div>
      </div>
      <div className="w-[42%] max-w-[180px] -translate-y-2.5 rounded-[10px] bg-white p-3 text-left text-[8px] text-[#111]">
        <p className="mb-2 font-semibold">Builder SMI Sultan Agung</p>
        <div className="mb-1.5 h-1.5 rounded bg-neutral-200" />
        <div className="mb-1.5 h-1.5 w-3/5 rounded bg-neutral-200" />
        <div className="my-2 flex gap-1">
          {people.map((c) => (
            <span key={c} className="h-[18px] w-[18px] rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="flex justify-between border-t border-neutral-200 pt-1.5">
          <span>Total</span>
          <b>$2,400</b>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const tasks = ['Set up dev env', 'Clone the repo', 'First PR merged', 'Meet your buddy', 'Ship to prod'];
  return (
    <div className="flex h-full w-full overflow-hidden bg-[#f7f6f2] text-[#111]">
      <div className="flex w-[18%] flex-col gap-2.5 bg-coal px-2.5 py-3.5">
        <span className="mb-2 h-[22px] w-[22px] rounded-md bg-sun" />
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`h-2 rounded ${i === 1 ? 'bg-sun' : 'bg-white/20'}`} />
        ))}
      </div>
      <div className="flex-1 p-3 text-left sm:p-[22px]">
        <p className="mb-2.5 text-[clamp(12px,1.6vw,15px)] font-bold">Week 1 · Onboarding</p>
        <div className="mb-3.5 h-2 overflow-hidden rounded bg-[#e6e2d6]">
          <span className="block h-full animate-grow bg-leaf" />
        </div>
        <ul className="grid gap-2">
          {tasks.map((t, i) => (
            <li
              key={t}
              className={`flex animate-slide-in items-center gap-2 rounded-lg bg-white px-2.5 py-[7px] text-[clamp(10px,1.2vw,12px)] shadow-[0_1px_0_rgba(0,0,0,0.06)] ${
                i < 3 ? 'text-neutral-400 line-through' : ''
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <i className={`h-3 w-3 flex-none rounded border-2 ${i < 3 ? 'border-leaf bg-leaf' : 'border-neutral-400'}`} /> {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MapMock() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" className="block h-full w-full" aria-hidden>
        <rect width="300" height="200" fill="#e9e4d4" />
        <path d="M0 60 H300 M0 140 H300 M80 0 V200 M200 0 V200" stroke="#fff" strokeWidth="10" />
        <path d="M0 100 Q150 40 300 120" stroke="#f1c84b" strokeWidth="6" fill="none" />
        <rect x="100" y="80" width="80" height="40" fill="#b8d8b0" />
        <path
          className="animate-dash"
          d="M40 170 L80 140 L200 140 L200 60 L260 30"
          stroke="#3b3fe0"
          strokeWidth="4"
          fill="none"
          strokeDasharray="8 6"
        />
      </svg>
      {[
        [26, 70, 'bg-rose'],
        [66, 30, 'bg-cobalt'],
        [86, 15, 'bg-leaf'],
      ].map(([x, y, c], i) => (
        <span key={i} className="absolute animate-drop" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.3}s` }}>
          <span className={`block h-4 w-4 rounded-[50%_50%_50%_0] border-2 border-white [rotate:-45deg] ${c}`} />
        </span>
      ))}
      <div className="absolute bottom-3 left-3 grid rounded-lg bg-white px-3 py-2 text-left text-[11px] text-[#111] shadow-[0_6px_16px_-6px_rgba(0,0,0,0.4)]">
        <b>Pothole · Elm St</b>
        <span className="text-[10px] opacity-60">Crew 4 · 12 min away</span>
      </div>
    </div>
  );
}

export default function Mockup({ kind }) {
  if (kind === 'dashboard') return <Dashboard />;
  if (kind === 'map') return <MapMock />;
  return <Phone />;
}
