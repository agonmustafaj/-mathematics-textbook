import { Link } from 'react-router-dom'
import { course } from '../content'

export function CoursePage() {
  return (
    <div className="page course-page">
      <section className="hero" aria-labelledby="hero-brand">
        <div className="hero__atmosphere" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__kicker">{course.topic}</p>
          <h1 id="hero-brand" className="hero__brand">
            {course.brand}
          </h1>
          <p className="hero__lede">{course.subtitle}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#chapters">
              Browse chapters
            </a>
            <Link
              className="btn btn--ghost"
              to={`/chapter/${course.chapters[0].id}/section/${course.chapters[0].sections[0].id}`}
            >
              Start first section
            </Link>
          </div>
        </div>
      </section>

      <section id="chapters" className="course-body" aria-labelledby="course-heading">
        <div className="course-body__intro">
          <h2 id="course-heading">{course.title}</h2>
          <p>
            Choose a chapter, then a section. Each section walks through worked examples one at a
            time, with every algebraic move explained.
          </p>
        </div>

        <ol className="chapter-list">
          {course.chapters.map((chapter) => (
            <li key={chapter.id} className="chapter-block">
              <div className="chapter-block__heading">
                <span className="chapter-block__number">Chapter {chapter.number}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
              </div>
              <ul className="section-list">
                {chapter.sections.map((section) => (
                  <li key={section.id}>
                    <Link
                      className="section-link"
                      to={`/chapter/${chapter.id}/section/${section.id}`}
                    >
                      <span className="section-link__title">{section.title}</span>
                      <span className="section-link__meta">
                        {section.examples.length} example
                        {section.examples.length === 1 ? '' : 's'}
                      </span>
                      <span className="section-link__summary">{section.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
