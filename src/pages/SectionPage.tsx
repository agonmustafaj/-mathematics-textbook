import { Link, Navigate, useParams } from 'react-router-dom'
import { MathText } from '../components/MathText'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { getSection } from '../content'
import { useLocale } from '../i18n/LocaleContext'

export function SectionPage() {
  const { chapterId = '', sectionId = '' } = useParams()
  const { locale, t } = useLocale()
  const found = getSection(locale, chapterId, sectionId)

  if (!found) {
    return <Navigate to="/" replace />
  }

  const { chapter, section } = found
  const path = `/chapter/${chapter.id}/section/${section.id}`
  const helpPlace = {
    kind: 'section' as const,
    chapterTitle: chapter.title,
    sectionTitle: section.title,
    path,
  }

  return (
    <div className="page reading-page">
      <SiteHeader compact helpPlace={helpPlace} />
      <main className="reading-shell">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link to="/">{t.course}</Link>
          <span aria-hidden="true">/</span>
          <span>{t.chapterShort(chapter.number, chapter.title)}</span>
        </nav>

        <header className="section-hero">
          <p className="eyebrow">{t.section}</p>
          <h1>
            <MathText text={section.title} />
          </h1>
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
                <span className="example-entry__index">{t.exampleIndex(index + 1)}</span>
                <span className="example-entry__title">
                  <MathText text={example.title} />
                </span>
                <span className="example-entry__goal">
                  <MathText text={example.goal} />
                </span>
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
              {t.beginFirstExample}
            </Link>
          </div>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  )
}
