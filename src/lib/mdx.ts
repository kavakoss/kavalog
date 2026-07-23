import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import * as fs from "fs"
import * as path from "path"

const contentDir = path.join(process.cwd(), "content")

export async function getMdxContent<T extends Record<string, unknown>>(
  slug: string,
  folder: string
) {
  const filePath = path.join(contentDir, folder, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf-8")
  const { content, frontmatter } = await compileMDX<T>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  })
  return { content, frontmatter }
}

export function getAllSlugs(folder: string): string[] {
  const dir = path.join(contentDir, folder)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""))
}

export function getMdxRawSource(slug: string, folder: string): string {
  const filePath = path.join(contentDir, folder, `${slug}.mdx`)
  return fs.readFileSync(filePath, "utf-8")
}
