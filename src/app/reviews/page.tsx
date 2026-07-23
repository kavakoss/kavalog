import Link from "next/link"
import { getMdxContent, getAllSlugs } from "@/lib/mdx"
import { ReviewFrontmatter } from "@/types/content"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default async function ReviewsPage() {
  const slugs = getAllSlugs("reviews")
  const reviews = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getMdxContent<ReviewFrontmatter>(slug, "reviews")
      return { slug, ...frontmatter }
    })
  )

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Bean Reviews</h1>
        <p className="mt-2 text-muted-foreground">
          Honest tasting notes on specialty beans from around the world
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Link key={review.slug} href={`/reviews/${review.slug}`}>
            <Card className="group h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <Badge variant="secondary" className="text-xs">{review.roastLevel}</Badge>
                  <Badge variant="outline" className="text-xs">{review.origin}</Badge>
                </div>
                <CardTitle className="group-hover:text-accent transition-colors">
                  {review.title}
                </CardTitle>
                <CardDescription>
                  {review.roaster} · {review.variety} · {review.process}
                </CardDescription>
                <div className="flex items-center gap-1 mt-1 text-accent">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-mono font-semibold">{review.rating}</span>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
