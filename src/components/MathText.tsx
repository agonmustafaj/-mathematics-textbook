import katex from 'katex'
import { Fragment, type ReactNode } from 'react'

type MathTextProps = {
  text: string
  className?: string
}

function renderLatex(tex: string, displayMode: boolean): string {
  try {
    return katex.renderToString(tex, {
      throwOnError: false,
      displayMode,
      strict: 'ignore',
    })
  } catch {
    return tex
  }
}

/**
 * Renders mixed prose with inline `$...$` and display `$$...$$` LaTeX.
 */
export function MathText({ text, className }: MathTextProps) {
  const nodes: ReactNode[] = []
  const pattern = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <Fragment key={`t-${key++}`}>{text.slice(lastIndex, match.index)}</Fragment>,
      )
    }

    const token = match[0]
    if (token.startsWith('$$')) {
      const tex = token.slice(2, -2).trim()
      nodes.push(
        <span
          key={`d-${key++}`}
          className="math-display"
          dangerouslySetInnerHTML={{ __html: renderLatex(tex, true) }}
        />,
      )
    } else {
      const tex = token.slice(1, -1).trim()
      nodes.push(
        <span
          key={`i-${key++}`}
          className="math-inline"
          dangerouslySetInnerHTML={{ __html: renderLatex(tex, false) }}
        />,
      )
    }

    lastIndex = match.index + token.length
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={`t-${key++}`}>{text.slice(lastIndex)}</Fragment>)
  }

  return <span className={className}>{nodes}</span>
}

type LatexProps = {
  tex: string
  display?: boolean
  className?: string
}

export function Latex({ tex, display = false, className }: LatexProps) {
  return (
    <span
      className={className ?? (display ? 'math-display' : 'math-inline')}
      dangerouslySetInnerHTML={{ __html: renderLatex(tex, display) }}
    />
  )
}
