import Link from "next/link"
import { ArrowRight, Coffee } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredRecipes = [
  {
    title: "Tetsuya 4:6 Method",
    brewer: "Hario V60",
    champion: "Tetsuya Kasuya",
    grind: "2.4.0 – 3.0.0 (X‑Ultra)",
    href: "/recipes/tetsuya-4-6",
  },
  {
    title: "James Hoffmann V60",
    brewer: "Hario V60",
    champion: "James Hoffmann",
    grind: "2.0.0 – 2.2.0 (X‑Ultra)",
    href: "/recipes/james-hoffmann-v60",
  },
  {
    title: "10‑Pour Neo Brew",
    brewer: "Hario V60 / Neo",
    champion: "Tetsuya Kasuya",
    grind: "3.0.0 – 3.3.0 (X‑Ultra)",
    href: "/recipes/tetsuya-10-pour",
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28 lg:py-36">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex items-center gap-2 rounded-full border bg-background/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
              <Coffee className="h-3.5 w-3.5 text-accent" />
              Manual Brew • Recipes • Reviews
            </div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              kava.log
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              Where coffee meets tech. Hand‑crafted brew recipes, honest bean
              reviews, and tools for the curious home barista.
            </p>
            <div className="flex gap-3">
              <Link
                href="/recipes"
                className={buttonVariants({ size: "lg" })}
              >
                Explore Recipes <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/tools"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Brewing Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Featured Recipes
            </h2>
            <p className="text-muted-foreground">
              Champion‑tested recipes for your daily brew
            </p>
          </div>
          <Link href="/recipes" className={buttonVariants({ variant: "ghost" })}>
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRecipes.map((recipe) => (
            <Link key={recipe.href} href={recipe.href}>
              <Card className="group h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs">
                      {recipe.brewer}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-accent transition-colors">
                    {recipe.title}
                  </CardTitle>
                  <CardDescription>
                    <span className="text-accent">{recipe.champion}</span>
                    {" · "}
                    {recipe.grind}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="grid gap-6 sm:grid-cols-3">
            <Link
              href="/reviews"
              className="group rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                Bean Reviews →
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Honest tasting notes on specialty beans from around the world.
              </p>
            </Link>
            <Link
              href="/gear"
              className="group rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                Gear →
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Hands‑on reviews of grinders, drippers, and brewing equipment.
              </p>
            </Link>
            <Link
              href="/tools"
              className="group rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                Tools →
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Ratio calculator and brew timer — dial in every variable.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
