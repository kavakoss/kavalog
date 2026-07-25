import { notFound } from "next/navigation"
import Image from "next/image"
import { getMdxContent } from "@/lib/mdx"
import { GearFrontmatter } from "@/types/content"
import { MdxContent } from "@/components/mdx-content"
import { Badge } from "@/components/ui/badge"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function GearDetailPage({ params }: Props) {
  const { slug } = await params

  let content: React.ReactNode
  let frontmatter: GearFrontmatter
  try {
    const result = await getMdxContent<GearFrontmatter>(slug, "gear")
    content = result.content
    frontmatter = result.frontmatter
  } catch {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      {frontmatter.image && (
        <div className="relative w-full aspect-2/1 rounded-xl overflow-hidden mb-8">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      )}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          {frontmatter.brand && (
            <Badge variant="secondary">{frontmatter.brand}</Badge>
          )}
          {frontmatter.type && (
            <Badge variant="outline">{frontmatter.type}</Badge>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          {frontmatter.title}
        </h1>
        {frontmatter.price && (
          <p className="mt-1 text-muted-foreground">{frontmatter.price}</p>
        )}
      </div>
      <MdxContent>{content}</MdxContent>
    </div>
  )
}
