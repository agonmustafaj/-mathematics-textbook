import type { Locale } from '../i18n/types'
import { integrationCourse } from './integration'
import { integrationCourseSq } from './integration.sq'
import type { Chapter, Course, Example, Section } from './types'

export type { Chapter, Course, Example, MathStep, Section } from './types'
export { integrationCourse, integrationCourseSq }

const coursesByLocale: Record<Locale, Course> = {
  en: integrationCourse,
  sq: integrationCourseSq,
}

/** Course for the active locale. Same chapter/section/example ids in every language. */
export function getCourse(locale: Locale): Course {
  return coursesByLocale[locale]
}

export function getChapter(locale: Locale, chapterId: string): Chapter | undefined {
  return getCourse(locale).chapters.find((chapter) => chapter.id === chapterId)
}

export function getSection(
  locale: Locale,
  chapterId: string,
  sectionId: string,
): { chapter: Chapter; section: Section } | undefined {
  const chapter = getChapter(locale, chapterId)
  if (!chapter) return undefined
  const section = chapter.sections.find((item) => item.id === sectionId)
  if (!section) return undefined
  return { chapter, section }
}

export function getExample(
  locale: Locale,
  chapterId: string,
  sectionId: string,
  exampleId: string,
):
  | {
      chapter: Chapter
      section: Section
      example: Example
      index: number
      prev?: Example
      next?: Example
    }
  | undefined {
  const found = getSection(locale, chapterId, sectionId)
  if (!found) return undefined
  const index = found.section.examples.findIndex((item) => item.id === exampleId)
  if (index < 0) return undefined
  return {
    ...found,
    example: found.section.examples[index],
    index,
    prev: found.section.examples[index - 1],
    next: found.section.examples[index + 1],
  }
}
