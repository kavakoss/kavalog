import Link from "next/link"
import { getMdxContent, getAllSlugs } from "@/lib/mdx"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface GearFrontmatter {
  title: string
  brand?: string
  type?: string
  price?: string
  rating?: number
  [key: string]: unknown
}

export default async function GearPage() {
  const slugs = getAllSlugs("gear")
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getMdxContent<GearFrontmatter>(slug, "gear")
      return { slug, ...frontmatter }
    })
  )

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Gear</h1>
        <p className="mt-2 text-muted-foreground">
          Hands‑on reviews of grinders, drippers, and brewing equipment
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link key={item.slug} href={`/gear/${item.slug}`}>
            <Card className="group h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {Boolean(item.brand) && (
                    <Badge variant="secondary" className="text-xs">{item.brand as string}</Badge>
                  )}
                  {Boolean(item.type) && (
                    <Badge variant="outline" className="text-xs">{item.type as string}</Badge>
                  )}
                </div>
                <CardTitle className="group-hover:text-accent transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.price}</CardDescription>
                {item.rating && (
                  <div className="flex items-center gap-1 mt-1 text-accent">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-mono font-semibold">{item.rating}</span>
                  </div>
                )}
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
