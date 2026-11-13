import { Link } from 'react-router-dom'
import { EulerHeroSticker } from '../components/EulerHeroSticker'
import { IntegralHeroGraphic } from '../components/IntegralHeroGraphic'
import { MathText } from '../components/MathText'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { getCourse } from '../content'
import { useLocale } from '../i18n/LocaleContext'

export function CoursePage() {
  const { locale, t } = useLocale()
  const course = getCourse(locale)
  const courseEn = getCourse('en')
  const courseSq = getCourse('sq')
  const firstSection = course.chapters[0]?.sections[0]

  return (
    <div className="page course-page">
      <SiteHeader helpPlace={{ kind: 'course', path: '/' }} />

      <section className="hero" aria-labelledby="hero-brand">
        <div className="hero__atmosphere" aria-hidden="true" />

        <div className="hero__layout">
          <div className="hero__visual" aria-hidden="true">
            <IntegralHeroGraphic />
          </div>

          <div className="hero__content">
            <p className="hero__kicker">
              <MathText text={course.topic} />
            </p>
            <h1 id="hero-brand" className="hero__brand">
              {course.brand}
            </h1>
            <p className="hero__lede">{course.subtitle}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#chapters">
                {t.browseChapters}
              </a>
              {firstSection ? (
                <Link
                  className="btn btn--ghost"
                  to={`/chapter/${course.chapters[0].id}/section/${firstSection.id}`}
                >
                  {t.startFirstSection}
                </Link>
              ) : null}
            </div>
          </div>

          <div className="hero__sticker">
            <EulerHeroSticker />
          </div>
        </div>
      </section>

      <section id="chapters" className="course-body" aria-labelledby="course-heading">
        <div className="course-body__intro">
          <h2 id="course-heading">{course.title}</h2>
          <p>{t.courseIntro}</p>
        </div>

        <div className="curriculum">
          <h3 className="curriculum__title">{t.curriculumHeading}</h3>
          <div className="curriculum__scroll">
            <table className="curriculum__table">
              <thead>
                <tr>
                  <th scope="col">{t.curriculumColChapter}</th>
                  <th scope="col">{t.curriculumColSq}</th>
                  <th scope="col">{t.curriculumColEn}</th>
                  <th scope="col">{t.curriculumColExercises}</th>
                </tr>
              </thead>
              <tbody>
                {course.chapters.map((chapter, index) => {
                  const en = courseEn.chapters[index]
                  const sq = courseSq.chapters[index]
                  const section = chapter.sections[0]
                  const href = section
                    ? `/chapter/${chapter.id}/section/${section.id}`
                    : '#chapters'
                  return (
                    <tr key={chapter.id}>
                      <td className="curriculum__num">
                        <Link to={href}>{chapter.number}</Link>
                      </td>
                      <td>
                        <Link to={href}>{sq?.title ?? chapter.title}</Link>
                      </td>
                      <td>
                        <Link to={href}>{en?.title ?? chapter.title}</Link>
                      </td>
                      <td className="curriculum__exercises">
                        {chapter.exercises ?? '—'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <ol className="chapter-list">
          {course.chapters.map((chapter) => (
            <li key={chapter.id} className="chapter-block">
              <div className="chapter-block__heading">
                <span className="chapter-block__number">{t.chapterLabel(chapter.number)}</span>
                <h3>{chapter.title}</h3>
                {chapter.exercises ? (
                  <p className="chapter-block__exercises">{t.exercisesLabel(chapter.exercises)}</p>
                ) : null}
                <p>{chapter.description}</p>
              </div>
              <ul className="section-list">
                {chapter.sections.map((section) => (
                  <li key={section.id}>
                    <Link
                      className="section-link"
                      to={`/chapter/${chapter.id}/section/${section.id}`}
                    >
                      <span className="section-link__title">
                        <MathText text={section.title} />
                      </span>
                      <span className="section-link__meta">
                        {t.exampleCount(section.examples.length)}
                      </span>
                      <span className="section-link__summary">
                        <MathText text={section.summary} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
      <SiteFooter />
    </div>
  )
}
