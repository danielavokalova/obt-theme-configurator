import type { BackgroundOption } from '../data/backgrounds'
import type { Theme } from '../data/themes'

type ConfigPanelProps = {
  themes: Theme[]
  backgrounds: BackgroundOption[]
  selectedThemeId: string
  selectedBackgroundId: string
  onThemeChange: (id: string) => void
  onBackgroundChange: (id: string) => void
  onExport: () => void
}

export function ConfigPanel({
  themes,
  backgrounds,
  selectedThemeId,
  selectedBackgroundId,
  onThemeChange,
  onBackgroundChange,
  onExport,
}: ConfigPanelProps) {
  return (
    <aside className="flex h-full w-full shrink-0 flex-col border-r border-slate-200 bg-white lg:w-80">
      <div className="border-b border-slate-200 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          OBT Theme Configurator
        </p>
        <h1 className="mt-1 text-lg font-bold text-slate-900">
          Vzhled rezervačního nástroje
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Vyberte barvy a pozadí — náhled se aktualizuje okamžitě.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5">
        <section>
          <h2 className="text-sm font-semibold text-slate-800">Barevné varianty</h2>
          <ul className="mt-3 space-y-2">
            {themes.map((theme) => {
              const active = theme.id === selectedThemeId
              return (
                <li key={theme.id}>
                  <button
                    type="button"
                    onClick={() => onThemeChange(theme.id)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition ${
                      active
                        ? 'border-slate-900 bg-slate-50 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className="flex shrink-0 -space-x-1">
                      <span
                        className="inline-block h-7 w-7 rounded-full border-2 border-white shadow"
                        style={{ backgroundColor: theme.primary }}
                        title="Primary"
                      />
                      <span
                        className="inline-block h-7 w-7 rounded-full border-2 border-white shadow"
                        style={{ backgroundColor: theme.secondary }}
                        title="Secondary"
                      />
                      <span
                        className="inline-block h-7 w-7 rounded-full border-2 border-white shadow"
                        style={{ backgroundColor: theme.surface }}
                        title="Surface"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-slate-900">
                        {theme.name}
                      </span>
                      <span className="block truncate text-xs text-slate-500">
                        {theme.primary} · {theme.secondary}
                      </span>
                    </span>
                    {active && (
                      <span className="shrink-0 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
                        Aktivní
                      </span>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-semibold text-slate-800">Pozadí</h2>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {backgrounds.map((bg) => {
              const active = bg.id === selectedBackgroundId
              return (
                <button
                  key={bg.id}
                  type="button"
                  onClick={() => onBackgroundChange(bg.id)}
                  className={`group relative overflow-hidden rounded-xl border-2 text-left transition ${
                    active ? 'border-slate-900 ring-2 ring-slate-900/20' : 'border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <BackgroundThumb background={bg} />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2">
                    <span className="text-xs font-medium text-white">{bg.name}</span>
                  </span>
                  {active && (
                    <span className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-900 shadow">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </section>
      </div>

      <div className="border-t border-slate-200 p-5">
        <button
          type="button"
          onClick={onExport}
          className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow transition hover:bg-slate-800"
        >
          Exportovat nastavení
        </button>
      </div>
    </aside>
  )
}

function BackgroundThumb({ background }: { background: BackgroundOption }) {
  const base = 'aspect-[4/3] w-full'

  if (background.type === 'clean') {
    return <div className={`${base} bg-slate-100`} />
  }

  if (background.type === 'animated') {
    return (
      <div className={`${base} animated-bg relative overflow-hidden`}>
        <PlaneDecor className="plane-icon absolute left-2 top-3 h-5 w-5 text-white/40" />
        <PlaneDecor className="plane-icon plane-icon-delay-1 absolute right-3 top-6 h-4 w-4 text-white/30" />
      </div>
    )
  }

  return (
    <img
      src={background.imageUrl}
      alt=""
      className={`${base} object-cover`}
      loading="lazy"
    />
  )
}

function PlaneDecor({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  )
}
