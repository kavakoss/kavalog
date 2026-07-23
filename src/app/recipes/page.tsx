import Link from "next/link"
import { getMdxContent, getAllSlugs } from "@/lib/mdx"
import { RecipeFrontmatter } from "@/types/content"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default async function RecipesPage() {
  const slugs = getAllSlugs("recipes")
  const recipes = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getMdxContent<RecipeFrontmatter>(slug, "recipes")
      return { slug, ...frontmatter }
    })
  )

  recipes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Recipes</h1>
        <p className="mt-2 text-muted-foreground">
          Champion and community recipes for every brewing method
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link key={recipe.slug} href={`/recipes/${recipe.slug}`}>
            <Card className="group h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {recipe.brewer}
                  </Badge>
                  {recipe.champion && (
                    <Badge className="text-xs bg-accent/15 text-accent border-accent/30">
                      {recipe.champion}
                    </Badge>
                  )}
                </div>
                <CardTitle className="group-hover:text-accent transition-colors">
                  {recipe.title}
                </CardTitle>
                <CardDescription>
                  {recipe.dose} · {recipe.water} · {recipe.temperature}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
