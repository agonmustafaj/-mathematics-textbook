import { Link, Navigate, useParams } from 'react-router-dom'
import { Latex, MathText } from '../components/MathText'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { getExample } from '../content'
import { useLocale } from '../i18n/LocaleContext'

export function ExamplePage() {
  const { chapterId = '', sectionId = '', exampleId = '' } = useParams()
  const { locale, t } = useLocale()
  const found = getExample(locale, chapterId, sectionId, exampleId)

  if (!found) {
    return <Navigate to="/" replace />
  }

  const { chapter, section, example, index, prev, next } = found
  const total = section.examples.length
  const path = `/chapter/${chapter.id}/section/${section.id}/example/${example.id}`
  const helpPlace = {
    kind: 'example' as const,
    chapterTitle: chapter.title,
    sectionTitle: section.title,
    exampleTitle: example.title,
    exampleIndex: index + 1,
    path,
  }

  return (
    <div className="page reading-page">
      <SiteHeader compact helpPlace={helpPlace} />
      <main className="reading-shell example-shell">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link to="/">{t.course}</Link>
          <span aria-hidden="true">/</span>
          <Link to={`/chapter/${chapter.id}/section/${section.id}`}>
            <MathText text={section.title} />
          </Link>
          <span aria-hidden="true">/</span>
          <span>{t.exampleOf(index + 1, total)}</span>
        </nav>

        <header className="example-hero">
          <p className="eyebrow">
            {t.exampleIndex(index + 1)} · <MathText text={section.title} />
          </p>
          <h1>
            <MathText text={example.title} />
          </h1>
          <div className="prompt-panel">
            <p className="prompt-panel__label">{t.problem}</p>
            <p className="prompt-panel__text">
              <MathText text={example.prompt} />
            </p>
            <p className="prompt-panel__goal">
              <span>{t.goal}</span> <MathText text={example.goal} />
            </p>
          </div>
        </header>

        <ol className="step-list">
          {example.steps.map((step, stepIndex) => (
            <li key={step.id} className="step">
              <div className="step__rail" aria-hidden="true">
                <span className="step__number">{stepIndex + 1}</span>
              </div>
              <div className="step__body">
                <h2>
                  <MathText text={step.title} />
                </h2>
                <p className="step__why">
                  <MathText text={step.why} />
                </p>
                {step.formula ? (
                  <figure className="math-block">
                    <figcaption>{t.formula}</figcaption>
                    <Latex tex={step.formula} display />
                  </figure>
                ) : null}
                {step.calculation ? (
                  <figure className="math-block math-block--calc">
                    <figcaption>{t.calculation}</figcaption>
                    <Latex tex={step.calculation} display />
                  </figure>
                ) : null}
                {step.notes ? (
                  <p className="step__notes">
                    <MathText text={step.notes} />
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <nav className="example-nav" aria-label="Example navigation">
          {prev ? (
            <Link
              className="btn btn--ghost"
              to={`/chapter/${chapter.id}/section/${section.id}/example/${prev.id}`}
            >
              {t.previous}
            </Link>
          ) : (
            <span className="btn btn--ghost btn--disabled" aria-disabled="true">
              {t.previous}
            </span>
          )}

          <Link className="btn btn--quiet" to={`/chapter/${chapter.id}/section/${section.id}`}>
            {t.allExamples}
          </Link>

          {next ? (
            <Link
              className="btn btn--primary"
              to={`/chapter/${chapter.id}/section/${section.id}/example/${next.id}`}
            >
              {t.next}
            </Link>
          ) : (
            <Link className="btn btn--primary" to={`/chapter/${chapter.id}/section/${section.id}`}>
              {t.backToSection}
            </Link>
          )}
        </nav>
      </main>
      <SiteFooter />
    </div>
  )
}
