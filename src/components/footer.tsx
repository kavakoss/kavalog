import Link from "next/link"
import { Coffee } from "lucide-react"

const socials = [
  { href: "https://tiktok.com/@kava.log", label: "TikTok" },
  { href: "https://instagram.com/kava.log", label: "Instagram" },
  { href: "https://github.com/kavalog", label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <div className="flex items-center gap-1.5">
          <Coffee className="h-4 w-4 text-accent" />
          <span>kava.log</span>
          <span className="mx-1 text-border">|</span>
          <span>Built with ☕</span>
        </div>
        <div className="flex gap-4">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
