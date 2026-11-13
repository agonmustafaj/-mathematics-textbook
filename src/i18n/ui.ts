import type { HelpPlace } from '../support'
import type { Locale } from './types'

/** Plain text for email (drop $...$ markers so subjects stay readable). */
function plain(text: string): string {
  return text.replace(/\$\$([\s\S]+?)\$\$/g, '$1').replace(/\$([^$\n]+?)\$/g, '$1').trim()
}

/** Short subject label — keeps the headline tidy on mobile mail apps. */
function placeSubjectLabel(place: HelpPlace, locale: Locale): string {
  if (place.kind === 'example' && place.exampleIndex != null) {
    return locale === 'sq' ? `Shembulli ${place.exampleIndex}` : `Example ${place.exampleIndex}`
  }
  if (place.kind === 'section' && place.sectionTitle) {
    return plain(place.sectionTitle)
  }
  return locale === 'sq' ? 'Faqja e kursit' : 'Course page'
}

/** Keep the URL alone on a line so mail apps turn it into a tappable link. */
function pageLinkBlock(url: string, locale: Locale): string {
  const label = locale === 'sq' ? 'Faqja:' : 'Page:'
  return `${label}\r\n${url}`
}

function placeDetails(place: HelpPlace, locale: Locale): string {
  const lines: string[] = []
  if (locale === 'sq') {
    if (place.chapterTitle) lines.push(`Kapitulli: ${plain(place.chapterTitle)}`)
    if (place.sectionTitle) lines.push(`Seksioni: ${plain(place.sectionTitle)}`)
    if (place.exampleTitle) {
      const n = place.exampleIndex != null ? ` (Shembulli ${place.exampleIndex})` : ''
      lines.push(`Ushtrimi: ${plain(place.exampleTitle)}${n}`)
    }
    lines.push(pageLinkBlock(place.path, 'sq'))
  } else {
    if (place.chapterTitle) lines.push(`Chapter: ${plain(place.chapterTitle)}`)
    if (place.sectionTitle) lines.push(`Section: ${plain(place.sectionTitle)}`)
    if (place.exampleTitle) {
      const n = place.exampleIndex != null ? ` (Example ${place.exampleIndex})` : ''
      lines.push(`Exercise: ${plain(place.exampleTitle)}${n}`)
    }
    lines.push(pageLinkBlock(place.path, 'en'))
  }
  return lines.join('\r\n')
}

export type UiStrings = {
  browseChapters: string
  startFirstSection: string
  courseIntro: string
  chapterLabel: (n: number) => string
  exercisesLabel: (range: string) => string
  curriculumHeading: string
  curriculumColChapter: string
  curriculumColSq: string
  curriculumColEn: string
  curriculumColExercises: string
  exampleCount: (n: number) => string
  course: string
  section: string
  example: string
  exampleOf: (index: number, total: number) => string
  exampleIndex: (index: number) => string
  chapterShort: (n: number, title: string) => string
  beginFirstExample: string
  problem: string
  goal: string
  formula: string
  calculation: string
  previous: string
  next: string
  allExamples: string
  backToSection: string
  language: string
  switchTo: (locale: Locale) => string
  needHelp: string
  helpEmailSubject: (place: HelpPlace) => string
  helpEmailBody: (place: HelpPlace) => string
  footerImplemented: string
  footerContent: string
}

export const ui: Record<Locale, UiStrings> = {
  en: {
    browseChapters: 'Browse chapters',
    startFirstSection: 'Start first section',
    courseIntro:
      'Choose a chapter, then a section. Each section walks through worked examples one at a time, with every algebraic move explained.',
    chapterLabel: (n) => `Chapter ${n}`,
    exercisesLabel: (range) => `Exercises ${range}`,
    curriculumHeading: 'Chapter outline',
    curriculumColChapter: 'Chapter',
    curriculumColSq: 'Shqip',
    curriculumColEn: 'English',
    curriculumColExercises: 'Exercises',
    exampleCount: (n) => (n === 1 ? '1 example' : `${n} examples`),
    course: 'Course',
    section: 'Section',
    example: 'Example',
    exampleOf: (index, total) => `Example ${index} of ${total}`,
    exampleIndex: (index) => `Example ${index}`,
    chapterShort: (n, title) => `Ch. ${n} · ${title}`,
    beginFirstExample: 'Begin first example',
    problem: 'Problem',
    goal: 'Goal.',
    formula: 'Formula',
    calculation: 'Calculation',
    previous: '← Previous',
    next: 'Next →',
    allExamples: 'All examples',
    backToSection: 'Back to section',
    language: 'Language',
    switchTo: (locale) => (locale === 'en' ? 'Switch to English' : 'Switch to Albanian'),
    needHelp: 'Need help?',
    helpEmailSubject: (place) => `Mathh — Help · ${placeSubjectLabel(place, 'en')}`,
    helpEmailBody: (place) =>
      `Hi,\r\n\r\nI am having trouble understanding something in Mathh.\r\n\r\n${placeDetails(place, 'en')}\r\n\r\nThanks,`,
    footerImplemented: 'Implemented by Agon Mustafaj',
    footerContent: 'Tasks and content by Admir Krasniqi',
  },
  sq: {
    browseChapters: 'Shfleto kapitujt',
    startFirstSection: 'Fillo seksionin e parë',
    courseIntro:
      'Zgjidh një kapitull, pastaj një seksion. Çdo seksion i shpjegon shembujt një nga një, me çdo hap algjebrik të qartë.',
    chapterLabel: (n) => `Kapitulli ${n}`,
    exercisesLabel: (range) => `Detyrat ${range}`,
    curriculumHeading: 'Struktura e kapitujve',
    curriculumColChapter: 'Chapter',
    curriculumColSq: 'Shqip',
    curriculumColEn: 'English',
    curriculumColExercises: 'Detyrat',
    exampleCount: (n) => (n === 1 ? '1 shembull' : `${n} shembuj`),
    course: 'Kursi',
    section: 'Seksioni',
    example: 'Shembull',
    exampleOf: (index, total) => `Shembulli ${index} nga ${total}`,
    exampleIndex: (index) => `Shembulli ${index}`,
    chapterShort: (n, title) => `Kap. ${n} · ${title}`,
    beginFirstExample: 'Fillo shembullin e parë',
    problem: 'Problemi',
    goal: 'Qëllimi.',
    formula: 'Formula',
    calculation: 'Llogaritja',
    previous: '← Mëparshmi',
    next: 'Tjetri →',
    allExamples: 'Të gjithë shembujt',
    backToSection: 'Kthehu te seksioni',
    language: 'Gjuha',
    switchTo: (locale) => (locale === 'en' ? 'Kalo në anglisht' : 'Kalo në shqip'),
    needHelp: 'Ke nevojë për ndihmë?',
    helpEmailSubject: (place) => `Mathh — Ndihmë · ${placeSubjectLabel(place, 'sq')}`,
    helpEmailBody: (place) =>
      `Përshëndetje,\r\n\r\nKam vështirësi të kuptoj diçka në Mathh.\r\n\r\n${placeDetails(place, 'sq')}\r\n\r\nFaleminderit,`,
    footerImplemented: 'Implementuar nga Agon Mustafaj',
    footerContent: 'Ndërsa detyrat dhe përmbajtja nga Admir Krasniqi',
  },
}
