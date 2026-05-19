type ExportModalProps = {
  json: string
  onClose: () => void
}

export function ExportModal({ json, onClose }: ExportModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="export-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="export-title" className="text-lg font-bold text-slate-900">
          Exportované nastavení
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          JSON je také vypsán v konzoli prohlížeče (F12).
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-emerald-400">
          {json}
        </pre>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(json)}
            className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Kopírovat
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Zavřít
          </button>
        </div>
      </div>
    </div>
  )
}
