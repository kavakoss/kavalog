import { notFound } from "next/navigation"
import Image from "next/image"
import { getMdxContent } from "@/lib/mdx"
import { RecipeFrontmatter } from "@/types/content"
import { MdxContent } from "@/components/mdx-content"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Thermometer, Gauge, Scale } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function RecipeDetailPage({ params }: Props) {
  const { slug } = await params

  let content: React.ReactNode
  let frontmatter: RecipeFrontmatter
  try {
    const result = await getMdxContent<RecipeFrontmatter>(slug, "recipes")
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
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="secondary">{frontmatter.brewer}</Badge>
          {frontmatter.champion && (
            <Badge className="bg-accent/15 text-accent border-accent/30">
              {frontmatter.champion}
            </Badge>
          )}
          {frontmatter.tags?.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{frontmatter.title}</h1>
      </div>

      {/* Brew Parameters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="rounded-xl border bg-card p-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
            <Scale className="h-3.5 w-3.5" />
            Dose
          </div>
          <div className="font-mono font-semibold">{frontmatter.dose}</div>
        </div>
        <div className="rounded-xl border bg-card p-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
            <Gauge className="h-3.5 w-3.5" />
            Ratio
          </div>
          <div className="font-mono font-semibold">{frontmatter.ratio}</div>
        </div>
        <div className="rounded-xl border bg-card p-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
            <Thermometer className="h-3.5 w-3.5" />
            Temp
          </div>
          <div className="font-mono font-semibold">{frontmatter.temperature}</div>
        </div>
        <div className="rounded-xl border bg-card p-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
            <Clock className="h-3.5 w-3.5" />
            Time
          </div>
          <div className="font-mono font-semibold">{frontmatter.brewTime}</div>
        </div>
      </div>

      {/* Grind setting */}
      <div className="rounded-xl border bg-muted/30 p-4 mb-8">
        <div className="text-sm text-muted-foreground mb-1">Grind Setting</div>
        <div className="font-mono font-semibold text-lg">{frontmatter.grindSetting}</div>
        <div className="text-sm text-muted-foreground mt-1">{frontmatter.grinder}</div>
      </div>

      <Separator className="mb-8" />

      {/* Content */}
      <MdxContent>{content}</MdxContent>
    </div>
  )
}
