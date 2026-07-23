import { getMdxContent } from "@/lib/mdx"
import { MdxContent } from "@/components/mdx-content"

export default async function HistoryPage() {
  const { content, frontmatter } = await getMdxContent("history", "pages")

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-8">
        {frontmatter.title as string}
      </h1>
      <MdxContent>{content}</MdxContent>
    </div>
  )
}
