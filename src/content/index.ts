import { integrationCourse } from './integration'
import type { Chapter, Course, Example, Section } from './types'

export type { Chapter, Course, Example, MathStep, Section } from './types'
export { integrationCourse }

/** Active course shown by the prototype UI. Swap this export to change topics. */
export const course: Course = integrationCourse

export function getChapter(chapterId: string): Chapter | undefined {
  return course.chapters.find((chapter) => chapter.id === chapterId)
}

export function getSection(
  chapterId: string,
  sectionId: string,
): { chapter: Chapter; section: Section } | undefined {
  const chapter = getChapter(chapterId)
  if (!chapter) return undefined
  const section = chapter.sections.find((item) => item.id === sectionId)
  if (!section) return undefined
  return { chapter, section }
}

export function getExample(
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
  const found = getSection(chapterId, sectionId)
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
