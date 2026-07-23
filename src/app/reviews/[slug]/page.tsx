import { notFound } from "next/navigation"
import { getMdxContent } from "@/lib/mdx"
import { ReviewFrontmatter } from "@/types/content"
import { MdxContent } from "@/components/mdx-content"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ReviewDetailPage({ params }: Props) {
  const { slug } = await params

  let content: React.ReactNode
  let frontmatter: ReviewFrontmatter
  try {
    const result = await getMdxContent<ReviewFrontmatter>(slug, "reviews")
    content = result.content
    frontmatter = result.frontmatter
  } catch {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="secondary">{frontmatter.roastLevel}</Badge>
          <Badge variant="outline">{frontmatter.origin}</Badge>
          <Badge variant="outline">{frontmatter.process}</Badge>
          <Badge variant="outline">{frontmatter.variety}</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{frontmatter.title}</h1>
        <p className="mt-1 text-muted-foreground">{frontmatter.roaster}</p>
        <div className="flex items-center gap-1 mt-3 text-accent text-2xl font-bold">
          <Star className="h-6 w-6 fill-current" />
          {frontmatter.rating}
        </div>
      </div>
      <MdxContent>{content}</MdxContent>
    </div>
  )
}
