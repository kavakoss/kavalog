import { notFound } from "next/navigation"
import { getMdxContent } from "@/lib/mdx"
import { MdxContent } from "@/components/mdx-content"
import { Badge } from "@/components/ui/badge"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function GearDetailPage({ params }: Props) {
  const { slug } = await params

  let content: React.ReactNode
  let frontmatter: Record<string, unknown>
  try {
    const result = await getMdxContent(slug, "gear")
    content = result.content
    frontmatter = result.frontmatter
  } catch {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          {Boolean(frontmatter.brand) && (
            <Badge variant="secondary">{frontmatter.brand as string}</Badge>
          )}
          {Boolean(frontmatter.type) && (
            <Badge variant="outline">{frontmatter.type as string}</Badge>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          {frontmatter.title as string}
        </h1>
        {Boolean(frontmatter.price) && (
          <p className="mt-1 text-muted-foreground">{frontmatter.price as string}</p>
        )}
      </div>
      <MdxContent>{content}</MdxContent>
    </div>
  )
}
