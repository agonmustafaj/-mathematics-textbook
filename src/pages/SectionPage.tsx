import { Link, Navigate, useParams } from 'react-router-dom'
import { MathText } from '../components/MathText'
import { SiteHeader } from '../components/SiteHeader'
import { getSection } from '../content'

export function SectionPage() {
  const { chapterId = '', sectionId = '' } = useParams()
  const found = getSection(chapterId, sectionId)

  if (!found) {
    return <Navigate to="/" replace />
  }

  const { chapter, section } = found

  return (
    <div className="page reading-page">
      <SiteHeader compact />
      <main className="reading-shell">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link to="/">Course</Link>
          <span aria-hidden="true">/</span>
          <span>
            Ch. {chapter.number} · {chapter.title}
          </span>
        </nav>

        <header className="section-hero">
          <p className="eyebrow">Section</p>
          <h1>{section.title}</h1>
          <p className="section-hero__summary">
            <MathText text={section.summary} />
          </p>
        </header>

        <ol className="example-sequence">
          {section.examples.map((example, index) => (
            <li key={example.id}>
              <Link
                className="example-entry"
                to={`/chapter/${chapter.id}/section/${section.id}/example/${example.id}`}
              >
                <span className="example-entry__index">Example {index + 1}</span>
                <span className="example-entry__title">{example.title}</span>
                <span className="example-entry__goal">{example.goal}</span>
              </Link>
            </li>
          ))}
        </ol>

        {section.examples[0] ? (
          <div className="section-cta">
            <Link
              className="btn btn--primary"
              to={`/chapter/${chapter.id}/section/${section.id}/example/${section.examples[0].id}`}
            >
              Begin first example
            </Link>
          </div>
        ) : null}
      </main>
    </div>
  )
}
