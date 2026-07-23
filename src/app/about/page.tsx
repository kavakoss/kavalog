import Link from "next/link"
import { Coffee } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

const socials = [
  { label: "TikTok", href: "https://tiktok.com/@kava.log" },
  { label: "Instagram", href: "https://instagram.com/kava.log" },
  { label: "GitHub", href: "https://github.com/kavalog" },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
        <Coffee className="h-10 w-10 text-accent" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight">kava.log</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Where coffee meets tech.
      </p>
      <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg mx-auto">
        Hey, I'm a manual brew enthusiast based in Indonesia. I share brew
        recipes, review specialty beans, and geek out over coffee gear.
        Follow along on TikTok for the video version of everything here.
      </p>

      <div className="mt-8 flex justify-center gap-3">
        {socials.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            {s.label}
          </Link>
        ))}
      </div>

      <div className="mt-16 border-t pt-8">
        <p className="text-sm text-muted-foreground">
          Have feedback or want to collaborate? Reach out on Instagram or TikTok.
        </p>
      </div>
    </div>
  )
}
