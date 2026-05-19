import type { BackgroundOption } from '../data/backgrounds'
import type { Theme } from '../data/themes'

type OBTPreviewProps = {
  theme: Theme
  background: BackgroundOption
}

export function OBTPreview({ theme, background }: OBTPreviewProps) {
  return (
    <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-slate-300/80 bg-slate-200 shadow-inner">
      <PreviewBackground background={background} />
      <div className="relative z-10 flex h-full min-h-[640px] flex-col">
        <header
          className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-white sm:px-6"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-black text-white"
              style={{ backgroundColor: theme.primary }}
            >
              GOL
            </div>
            <span className="text-sm font-semibold tracking-wide opacity-90">
              Online Booking
            </span>
          </div>
          <nav className="hidden items-center gap-4 text-xs font-medium sm:flex">
            <span className="opacity-80 hover:opacity-100">My reservations</span>
            <span className="rounded-md bg-white/10 px-2 py-1">Karel Novák</span>
            <span className="rounded-md border border-white/25 px-2 py-1">CZK ▾</span>
          </nav>
        </header>

        <div
          className="border-b px-4 sm:px-6"
          style={{ backgroundColor: theme.secondary, borderColor: 'rgba(255,255,255,0.12)' }}
        >
          <ul className="flex gap-1 overflow-x-auto py-2 text-xs font-medium text-white/75">
            {['Hotels', 'Car rental', 'Packages', 'About us'].map((tab, i) => (
              <li key={tab}>
                <span
                  className={`block whitespace-nowrap rounded-md px-3 py-1.5 ${
                    i === 0 ? 'bg-white/15 text-white' : 'hover:bg-white/10'
                  }`}
                >
                  {tab}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div
            className="mx-auto max-w-4xl rounded-2xl p-4 shadow-xl sm:p-6"
            style={{ backgroundColor: theme.surface }}
          >
            <h2
              className="text-xl font-bold sm:text-2xl"
              style={{ color: theme.secondary }}
            >
              Fly with us
            </h2>

            <TripTypeTabs primary={theme.primary} secondary={theme.secondary} />

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Field label="From" value="Prague (PRG)" />
              <Field label="To" value="Airport / city" muted />
              <Field label="Departure" value="12 Jun 2026" />
              <Field label="Return" value="19 Jun 2026" />
            </div>

            <div className="mt-3">
              <Field label="Passengers" value="1 passenger · ECONOMY" wide />
            </div>

            <div
              className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border px-3 py-3 text-xs"
              style={{
                borderColor: `${theme.secondary}22`,
                color: theme.secondary,
                backgroundColor: 'rgba(255,255,255,0.6)',
              }}
            >
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                Only direct flights
              </label>
              <select className="rounded border border-slate-200 bg-white px-2 py-1">
                <option>All airlines</option>
              </select>
              <span className="opacity-70">Tolerance: 0 days</span>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-xl px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg transition hover:brightness-110 sm:w-auto sm:min-w-[220px]"
              style={{ backgroundColor: theme.primary }}
            >
              SEARCH FLIGHTS
            </button>
          </div>

          <section className="mx-auto mt-6 max-w-4xl">
            <h3
              className="mb-3 text-lg font-bold text-white drop-shadow-md"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
            >
              Special offers
            </h3>
            <article className="flex overflow-hidden rounded-2xl bg-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1565967511849-3a9e986a3a48?auto=format&fit=crop&w=400&q=80"
                alt="Singapore"
                className="hidden w-36 object-cover sm:block"
              />
              <div className="flex flex-1 flex-col justify-between p-4 sm:flex-row sm:items-center sm:gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Featured destination
                  </p>
                  <h4 className="text-lg font-bold" style={{ color: theme.secondary }}>
                    Singapore — Changi
                  </h4>
                  <p className="mt-1 text-2xl font-extrabold" style={{ color: theme.primary }}>
                    5 459 CZK
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-3 shrink-0 rounded-lg border-2 px-4 py-2 text-xs font-bold sm:mt-0"
                  style={{
                    borderColor: theme.primary,
                    color: theme.primary,
                  }}
                >
                  CHOOSE DATE
                </button>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  )
}

function PreviewBackground({ background }: { background: BackgroundOption }) {
  if (background.type === 'clean') {
    return <div className="absolute inset-0 bg-slate-100" />
  }

  if (background.type === 'animated') {
    return (
      <div className="animated-bg absolute inset-0">
        <PlaneDecor className="plane-icon absolute left-[8%] top-[18%] h-12 w-12 text-white/25" />
        <PlaneDecor className="plane-icon plane-icon-delay-1 absolute right-[12%] top-[35%] h-10 w-10 text-white/20" />
        <PlaneDecor className="plane-icon plane-icon-delay-2 absolute bottom-[25%] left-[40%] h-8 w-8 text-white/15" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    )
  }

  return (
    <>
      <img
        src={background.imageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
    </>
  )
}

function TripTypeTabs({
  primary,
  secondary,
}: {
  primary: string
  secondary: string
}) {
  const tabs = ['One way', 'Return', 'Multi-city']
  return (
    <div className="mt-4 flex gap-1 rounded-lg bg-white/50 p-1">
      {tabs.map((tab) => {
        const active = tab === 'Return'
        return (
          <button
            key={tab}
            type="button"
            className="flex-1 rounded-md px-3 py-2 text-xs font-semibold transition sm:text-sm"
            style={
              active
                ? { backgroundColor: primary, color: '#fff' }
                : { color: secondary }
            }
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}

function Field({
  label,
  value,
  muted,
  wide,
}: {
  label: string
  value: string
  muted?: boolean
  wide?: boolean
}) {
  return (
    <label className={wide ? 'block' : ''}>
      <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </span>
      <div
        className={`mt-1 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm ${
          muted ? 'text-slate-400' : 'font-medium text-slate-800'
        }`}
      >
        {value}
      </div>
    </label>
  )
}

function PlaneDecor({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  )
}
