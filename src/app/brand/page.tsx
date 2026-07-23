import { Coffee, Code, Palette, Type, Camera, Play, Check, X } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const colors = [
  { name: "Bean", hex: "#2D1B0E", oklch: "oklch(0.25 0.03 65)", text: "text-white" },
  { name: "Roast", hex: "#4A2E18", oklch: "oklch(0.35 0.04 65)", text: "text-white" },
  { name: "Brew", hex: "#8B5A2D", oklch: "oklch(0.5 0.06 65)", text: "text-white" },
  { name: "Latte", hex: "#C08A53", oklch: "oklch(0.62 0.1 70)", text: "text-black" },
  { name: "Crema", hex: "#E6C9A8", oklch: "oklch(0.82 0.05 75)", text: "text-black" },
  { name: "Foam", hex: "#FDF8F0", oklch: "oklch(0.98 0.01 82)", text: "text-black" },
]

const accents = [
  { name: "Amber", hex: "#F59E0B", text: "text-black" },
  { name: "Amber Dark", hex: "#D97706", text: "text-white" },
  { name: "Amber Light", hex: "#FDE68A", text: "text-black" },
]

const functionalColors = [
  { name: "Success", hex: "#22C55E", icon: Check },
  { name: "Warning", hex: "#F59E0B", icon: null },
  { name: "Error", hex: "#EF4444", icon: X },
  { name: "Info", hex: "#3B82F6", icon: null },
]

const typeScale = [
  { level: "Hero", font: "JetBrains Mono", size: "56px", weight: "700", usage: "Homepage title, TikTok headline" },
  { level: "H1", font: "JetBrains Mono", size: "36px", weight: "700", usage: "Page titles" },
  { level: "H2", font: "JetBrains Mono", size: "24px", weight: "600", usage: "Section headers" },
  { level: "H3", font: "JetBrains Mono", size: "18px", weight: "600", usage: "Card titles" },
  { level: "Body L", font: "Inter", size: "18px", weight: "400", usage: "Lead paragraphs" },
  { level: "Body", font: "Inter", size: "16px", weight: "400", usage: "Standard text" },
  { level: "Body S", font: "Inter", size: "14px", weight: "400", usage: "Captions" },
  { level: "Code L", font: "JetBrains Mono", size: "16px", weight: "400", usage: "Recipe params" },
  { level: "Code", font: "JetBrains Mono", size: "14px", weight: "400", usage: "Code blocks" },
  { level: "Code S", font: "JetBrains Mono", size: "12px", weight: "400", usage: "Badges, grind" },
]

const dos = [
  "Use JetBrains Mono for all data — grind size, ratio, temperature",
  "Amber accent sparingly — 1-2 elements per canvas",
  "Code block styling for recipe steps — this is the signature brand",
  "Dark mode as default, light as option",
  "Generous whitespace — never overcrowd",
  "Coffee photos always warm-toned",
]

const donts = [
  "Never use Montserrat, Poppins, or Lobster — generic fonts",
  "Never full Matrix green — not a hacker brand",
  "No glitch effects or scanlines",
  "No logo smaller than 48px (mobile) / 24px (web)",
  "No text on photos without dark scrim",
  "No more than 3 typefaces in one canvas",
  "No emojis 🚀💎🔥 — not a tech bro brand",
]

const motionGuidelines = [
  { element: "Logo reveal", animation: "Typewriter cursor", duration: "1.5s" },
  { element: "Code block", animation: "Lines appear top→bottom", duration: "0.15s/line" },
  { element: "Title", animation: "Fade up + scale", duration: "0.5s" },
  { element: "Spec pills", animation: "Pop in staggered", duration: "0.3s each" },
  { element: "Recipe steps", animation: "Typewriter (sync to VO)", duration: "Voice-synced" },
  { element: "Transition", animation: "Quick zoom / whip pan", duration: "0.3s" },
]

export default function BrandPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Coffee className="h-8 w-8 text-accent" />
          <h1 className="text-3xl font-bold tracking-tight">Brand Guideline</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          The complete visual identity system for kava.log — where specialty coffee meets developer aesthetic.
        </p>
        <div className="flex gap-2 mt-4">
          <Badge variant="outline">v1.0</Badge>
          <Badge variant="outline">July 2026</Badge>
        </div>
      </div>

      {/* Tone */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="h-5 w-5 text-accent" /> Brand Tone
        </h2>
        <div className="rounded-xl border bg-card p-8">
          <p className="text-xl font-semibold mb-2">Specialty coffee roaster who happens to be a developer.</p>
          <p className="text-muted-foreground">Warm, precise, slightly nerdy — never cold or "hacker."</p>
          <div className="mt-4 font-mono text-accent text-lg">$ where coffee meets tech</div>
        </div>
      </section>

      {/* Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Palette className="h-5 w-5 text-accent" /> Color Palette
        </h2>

        <h3 className="text-lg font-semibold mb-3 mt-8">Primary — Coffee Browns</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {colors.map((c) => (
            <div key={c.name} className="text-center">
              <div
                className="h-20 rounded-xl border shadow-sm mb-2 flex items-end p-2"
                style={{ backgroundColor: c.hex }}
              >
                <span className={`text-xs font-mono font-semibold ${c.text === "text-white" ? "text-white/80" : "text-black/60"}`}>
                  {c.name}
                </span>
              </div>
              <div className="font-mono text-[11px] text-muted-foreground">{c.hex}</div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-8">Accent — Amber</h3>
        <div className="grid grid-cols-3 gap-3">
          {accents.map((c) => (
            <div key={c.name} className="text-center">
              <div
                className="h-16 rounded-xl border shadow-sm mb-2 flex items-end p-2"
                style={{ backgroundColor: c.hex }}
              >
                <span className={`text-xs font-mono font-semibold ${c.text === "text-white" ? "text-white/80" : "text-black/60"}`}>
                  {c.name}
                </span>
              </div>
              <div className="font-mono text-[11px] text-muted-foreground">{c.hex}</div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-8">Functional</h3>
        <div className="grid grid-cols-4 gap-3">
          {functionalColors.map((c) => (
            <div key={c.name} className="text-center">
              <div
                className="h-12 rounded-lg border shadow-sm mb-2 flex items-center justify-center"
                style={{ backgroundColor: c.hex }}
              >
                {c.icon && <c.icon className="h-4 w-4 text-white" />}
              </div>
              <div className="font-mono text-[11px] text-muted-foreground">{c.name}</div>
              <div className="font-mono text-[10px] text-muted-foreground/60">{c.hex}</div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Typography */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Type className="h-5 w-5 text-accent" /> Typography
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl border bg-card p-6">
            <div className="text-sm text-muted-foreground mb-3">Display / Code</div>
            <div className="font-mono text-2xl font-bold mb-1">JetBrains Mono</div>
            <div className="font-mono text-sm text-muted-foreground">Headings · Code · Logo</div>
            <div className="mt-2 font-mono text-accent">ABCDEFGHIJKLM</div>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <div className="text-sm text-muted-foreground mb-3">Body</div>
            <div className="text-2xl font-semibold mb-1">Inter</div>
            <div className="text-sm text-muted-foreground">Paragraphs · Captions · UI</div>
            <div className="mt-2 text-muted-foreground">ABCDEFGHIJKLM</div>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <div className="text-sm text-muted-foreground mb-3">Social</div>
            <div className="text-2xl font-bold mb-1">Space Grotesk</div>
            <div className="text-sm text-muted-foreground">TikTok · IG · Thumbnails</div>
            <div className="mt-2 font-semibold">ABCDEFGHIJKLM</div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3">Type Scale</h3>
        <div className="rounded-xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground">Level</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground">Font</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground">Size</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground">Weight</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground">Usage</th>
              </tr>
            </thead>
            <tbody>
              {typeScale.map((t) => (
                <tr key={t.level} className="border-t">
                  <td className="px-4 py-2.5 font-mono text-accent">{t.level}</td>
                  <td className="px-4 py-2.5">{t.font}</td>
                  <td className="px-4 py-2.5 font-mono">{t.size}</td>
                  <td className="px-4 py-2.5 font-mono text-muted-foreground">{t.weight}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{t.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Logo */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Coffee className="h-5 w-5 text-accent" /> Logo
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-8 flex flex-col items-center justify-center gap-3 min-h-[160px]">
            <div className="flex items-center gap-2 font-mono text-3xl font-bold">
              <Coffee className="h-7 w-7 text-accent" />
              kava.log
            </div>
            <span className="text-xs text-muted-foreground">Primary — Full logo</span>
          </div>
          <div className="rounded-xl border bg-card p-8 flex flex-col items-center justify-center gap-3 min-h-[160px]">
            <Coffee className="h-12 w-12 text-accent" />
            <span className="text-xs text-muted-foreground">Icon only — Favicon · Watermark</span>
          </div>
          <div className="rounded-xl border bg-card p-8 flex flex-col items-center justify-center gap-3 min-h-[160px]">
            <div className="flex flex-col items-center gap-1">
              <Coffee className="h-8 w-8 text-accent" />
              <div className="font-mono font-bold text-xl">kava.log</div>
            </div>
            <span className="text-xs text-muted-foreground">Stacked — Merch · Stickers</span>
          </div>
          <div className="rounded-xl border bg-card p-8 flex flex-col items-center justify-center gap-3 min-h-[160px]">
            <div className="font-mono font-bold text-4xl text-accent">KV</div>
            <span className="text-xs text-muted-foreground">Monogram — Small spaces</span>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Terminal Block */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="h-5 w-5 text-accent" /> Terminal / Code Block
        </h2>
        <p className="text-muted-foreground mb-4">Signature brand element — used on web & adapted for social content.</p>

        <div className="rounded-xl border bg-[#1A1512] p-6 font-mono text-sm leading-relaxed overflow-x-auto">
          {[
            { n: 1, t: "prompt", text: "$ brew --method=v60" },
            { n: 2, t: "prompt", text: "$ --dose=15g" },
            { n: 3, t: "prompt", text: "$ --ratio=1:16" },
            { n: 4, t: "empty", text: "" },
            { n: 5, t: "comment", text: "# Pour schedule" },
            { n: 6, t: "step", text: "0:00 → Bloom 35ml" },
            { n: 7, t: "step", text: "0:35 → Pour to 130ml" },
            { n: 8, t: "step", text: "1:15 → Pour to 225ml" },
            { n: 9, t: "empty", text: "" },
            { n: 10, t: "success", text: "✓ brew complete · 2:45" },
          ].map((line) => (
            <div key={line.n} className="flex gap-4">
              <span className="text-[#6B5544] text-right w-6 shrink-0 select-none opacity-60">
                {line.n}
              </span>
              <span className={
                line.t === "prompt" ? "text-[#F59E0B] font-semibold" :
                line.t === "comment" ? "text-[#6B5544] italic" :
                line.t === "success" ? "text-[#22C55E]" :
                "text-[#C9B99A]"
              }>
                {line.text || "\u00A0"}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Social Templates */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Camera className="h-5 w-5 text-accent" /> Social Media
        </h2>

        <div className="grid gap-4 sm:grid-cols-3 mb-6">
          <div className="rounded-xl border bg-card p-4">
            <div className="text-xs text-muted-foreground mb-2 font-mono">TikTok / Reels</div>
            <div className="aspect-[9/16] bg-muted/30 rounded-lg flex items-center justify-center border border-dashed">
              <span className="font-mono text-xs text-muted-foreground">1080×1920</span>
            </div>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <div className="text-xs text-muted-foreground mb-2 font-mono">IG Feed</div>
            <div className="aspect-square bg-muted/30 rounded-lg flex items-center justify-center border border-dashed">
              <span className="font-mono text-xs text-muted-foreground">1080×1080</span>
            </div>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <div className="text-xs text-muted-foreground mb-2 font-mono">IG Story</div>
            <div className="aspect-[9/16] bg-muted/30 rounded-lg flex items-center justify-center border border-dashed">
              <span className="font-mono text-xs text-muted-foreground">1080×1920</span>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Motion */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="h-5 w-5 text-accent" /> Motion Guidelines
        </h2>
        <div className="rounded-xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground">Element</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground">Animation</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground">Duration</th>
              </tr>
            </thead>
            <tbody>
              {motionGuidelines.map((m) => (
                <tr key={m.element} className="border-t">
                  <td className="px-4 py-2.5 font-medium">{m.element}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{m.animation}</td>
                  <td className="px-4 py-2.5 font-mono text-accent">{m.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Do / Don't */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Usage Guidelines</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-[#22C55E]/20 text-[#22C55E] text-sm">✓</span>
              Do
            </h3>
            <ul className="space-y-2">
              {dos.map((d, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-[#22C55E] shrink-0 mt-0.5">✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-[#EF4444]/20 text-[#EF4444] text-sm">✗</span>
              Don't
            </h3>
            <ul className="space-y-2">
              {donts.map((d, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-[#EF4444] shrink-0 mt-0.5">✗</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div className="border-t pt-8 text-center text-sm text-muted-foreground">
        <p>Last updated: July 2026 · v1.0</p>
        <p className="mt-1">
          Full markdown spec: <code className="text-xs bg-muted px-1.5 py-0.5 rounded">brand-guideline.md</code>
        </p>
      </div>
    </div>
  )
}
