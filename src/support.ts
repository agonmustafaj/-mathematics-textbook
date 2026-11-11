/** Contact for learners who need help understanding the material. */
export const SUPPORT_EMAIL = 'apu.gus.t.13@gmail.com'

/** Where the learner is when they ask for help. */
export type HelpPlace = {
  /** e.g. course home, section list, or a specific example */
  kind: 'course' | 'section' | 'example'
  chapterTitle?: string
  sectionTitle?: string
  exampleTitle?: string
  exampleIndex?: number
  path: string
}

export function buildHelpMailto(
  email: string,
  subject: string,
  body: string,
): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/** Turn a route path into a full clickable URL for help emails. */
export function absolutePageUrl(path: string): string {
  if (typeof window === 'undefined') return path
  try {
    return new URL(path || '/', window.location.origin).href
  } catch {
    return path
  }
}
