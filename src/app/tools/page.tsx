"use client"

import { useState } from "react"
import { Play, Pause, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const presets = [
  {
    label: "Hoffmann V60",
    doses: [15],
    pours: [
      { at: 0, label: "Bloom — 35ml" },
      { at: 30, label: "Pour to 150ml" },
      { at: 75, label: "Pour to 250ml" },
    ],
    target: 195,
  },
  {
    label: "4:6 Method",
    doses: [20],
    pours: [
      { at: 0, label: "Pour 1 — 40ml" },
      { at: 45, label: "Pour 2 — 60ml" },
      { at: 90, label: "Pour 3 — 45ml" },
      { at: 135, label: "Pour 4 — 45ml" },
      { at: 180, label: "Pour 5 — 45ml" },
      { at: 225, label: "Final — 65ml" },
    ],
    target: 225,
  },
  {
    label: "10-Pour",
    doses: [20],
    pours: Array.from({ length: 10 }, (_, i) => ({
      at: i === 0 ? 0 : i * 15 + 30,
      label: `Pour ${i + 1} — 30ml`,
    })),
    target: 160,
  },
]

export default function ToolsPage() {
  // Calculator state
  const [dose, setDose] = useState(15)
  const [ratio, setRatio] = useState(15)

  // Timer state
  const [timerRunning, setTimerRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [selectedPreset, setSelectedPreset] = useState<typeof presets[0] | null>(null)
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null)

  const water = dose * ratio
  const bloom = dose * 2

  function startTimer() {
    if (timerRunning) return
    const start = Date.now() - elapsed * 1000
    setTimerRunning(true)
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - start) / 1000))
    }, 100)
    setIntervalId(id)
  }

  function stopTimer() {
    if (intervalId) clearInterval(intervalId)
    setTimerRunning(false)
    setIntervalId(null)
  }

  function resetTimer() {
    stopTimer()
    setElapsed(0)
    setSelectedPreset(null)
  }

  function selectPreset(preset: typeof presets[0]) {
    resetTimer()
    setSelectedPreset(preset)
    setDose(preset.doses[0])
  }

  function formatTime(s: number) {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
  }

  function getCurrentPour() {
    if (!selectedPreset) return null
    const reversed = [...selectedPreset.pours].reverse()
    return reversed.find((p) => elapsed >= p.at) || null
  }

  const currentPour = getCurrentPour()

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Brewing Tools</h1>
      <p className="text-muted-foreground mb-12">
        Ratio calculator and brew timer — everything you need to dial in
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Calculator */}
        <div className="rounded-2xl border bg-card p-8">
          <h2 className="text-xl font-semibold mb-6">Ratio Calculator</h2>

          <div className="space-y-6">
            <div>
              <label className="text-sm text-muted-foreground block mb-2">
                Coffee Dose (g)
              </label>
              <input
                type="number"
                value={dose}
                onChange={(e) => setDose(Number(e.target.value) || 0)}
                className="w-full rounded-lg border bg-background px-4 py-3 font-mono text-2xl font-semibold outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground block mb-2">
                Ratio (1:{ratio})
              </label>
              <div className="flex gap-2 flex-wrap">
                {[15, 16, 16.67, 17].map((r) => (
                  <Button
                    key={r}
                    variant={ratio === r ? "default" : "outline"}
                    size="sm"
                    onClick={() => setRatio(r)}
                    className="font-mono"
                  >
                    1:{r}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="rounded-xl bg-muted/50 p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">Water</div>
                <div className="font-mono text-3xl font-bold">{water}ml</div>
              </div>
              <div className="rounded-xl bg-muted/50 p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">Bloom</div>
                <div className="font-mono text-3xl font-bold">{bloom}ml</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timer */}
        <div className="rounded-2xl border bg-card p-8">
          <h2 className="text-xl font-semibold mb-6">Brew Timer</h2>

          {/* Presets */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {presets.map((p) => (
              <Badge
                key={p.label}
                variant={selectedPreset?.label === p.label ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => selectPreset(p)}
              >
                {p.label}
              </Badge>
            ))}
          </div>

          {/* Timer display */}
          <div className="mb-6 text-center">
            <div className="font-mono text-7xl font-bold tracking-tighter tabular-nums">
              {formatTime(elapsed)}
            </div>
            {selectedPreset && (
              <div className="mt-4 space-y-1">
                <div className="text-sm text-muted-foreground">
                  {selectedPreset.label}
                </div>
                {currentPour && (
                  <div className="rounded-lg bg-accent/10 px-3 py-2 text-accent font-semibold">
                    {currentPour.label}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-3">
            {!timerRunning ? (
              <Button size="lg" onClick={startTimer}>
                <Play className="h-5 w-5 mr-2" />
                Start
              </Button>
            ) : (
              <Button size="lg" variant="secondary" onClick={stopTimer}>
                <Pause className="h-5 w-5 mr-2" />
                Pause
              </Button>
            )}
            <Button size="lg" variant="outline" onClick={resetTimer}>
              <RotateCcw className="h-5 w-5" />
            </Button>
          </div>

          {/* Pour list */}
          {selectedPreset && (
            <div className="mt-6 pt-6 border-t">
              <div className="text-sm text-muted-foreground mb-3">
                Pour Schedule
              </div>
              <div className="space-y-1.5">
                {selectedPreset.pours.map((pour, i) => (
                  <div
                    key={i}
                    className={`flex justify-between text-sm rounded px-3 py-1.5 ${
                      elapsed >= pour.at
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span>{pour.label}</span>
                    <span className="font-mono">{formatTime(pour.at)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
