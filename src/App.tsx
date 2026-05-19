import { useMemo, useState } from 'react'
import { BACKGROUNDS } from './data/backgrounds'
import { THEMES } from './data/themes'
import { ConfigPanel } from './components/ConfigPanel'
import { ExportModal } from './components/ExportModal'
import { OBTPreview } from './components/OBTPreview'

const DEFAULT_THEME_ID = 'gol-orange'
const DEFAULT_BG_ID = 'clouds'

export default function App() {
  const [selectedThemeId, setSelectedThemeId] = useState(DEFAULT_THEME_ID)
  const [selectedBackgroundId, setSelectedBackgroundId] = useState(DEFAULT_BG_ID)
  const [exportJson, setExportJson] = useState<string | null>(null)

  const theme = useMemo(
    () => THEMES.find((t) => t.id === selectedThemeId) ?? THEMES[0],
    [selectedThemeId],
  )

  const background = useMemo(
    () => BACKGROUNDS.find((b) => b.id === selectedBackgroundId) ?? BACKGROUNDS[0],
    [selectedBackgroundId],
  )

  const handleExport = () => {
    const payload = {
      theme: theme.name,
      themeId: theme.id,
      bg: background.id,
      bgName: background.name,
    }
    const json = JSON.stringify(payload, null, 2)
    console.log('OBT Theme Export:', payload)
    console.log(json)
    setExportJson(json)
  }

  return (
    <div className="flex h-screen flex-col bg-slate-100 lg:flex-row">
      <ConfigPanel
        themes={THEMES}
        backgrounds={BACKGROUNDS}
        selectedThemeId={selectedThemeId}
        selectedBackgroundId={selectedBackgroundId}
        onThemeChange={setSelectedThemeId}
        onBackgroundChange={setSelectedBackgroundId}
        onExport={handleExport}
      />

      <main className="flex min-h-0 flex-1 flex-col p-4 lg:p-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Live preview
            </p>
            <p className="text-sm text-slate-700">
              <span className="font-semibold">{theme.name}</span>
              <span className="text-slate-400"> · </span>
              <span>{background.name}</span>
            </p>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span
              className="h-4 w-4 rounded-full ring-2 ring-white"
              style={{ backgroundColor: theme.primary }}
              title="Primary"
            />
            <span
              className="h-4 w-4 rounded-full ring-2 ring-white"
              style={{ backgroundColor: theme.secondary }}
              title="Secondary"
            />
            <span
              className="h-4 w-4 rounded-full ring-2 ring-white"
              style={{ backgroundColor: theme.surface }}
              title="Surface"
            />
          </div>
        </div>

        <OBTPreview theme={theme} background={background} />
      </main>

      {exportJson && (
        <ExportModal json={exportJson} onClose={() => setExportJson(null)} />
      )}
    </div>
  )
}
