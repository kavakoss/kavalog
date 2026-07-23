import type { ReactNode } from "react"

interface MdxContentProps {
  children: ReactNode
}

export function MdxContent({ children }: MdxContentProps) {
  return (
    <article className="prose prose-coffee dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:tracking-tight
      prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
      prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
      prose-p:leading-relaxed prose-p:text-foreground/85
      prose-strong:text-foreground
      prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono
      prose-pre:bg-muted prose-pre:border
      prose-li:text-foreground/85
      prose-table:text-sm
      prose-th:font-semibold prose-th:text-left
      prose-td:py-2
      prose-a:text-accent prose-a:no-underline hover:prose-a:underline
      ">
      {children}
    </article>
  )
}
