import type { HelpPlace } from '../support'
import type { Locale } from './types'

function placeLabel(place: HelpPlace, locale: Locale): string {
  if (place.kind === 'example' && place.exampleTitle) {
    const index =
      place.exampleIndex != null
        ? locale === 'sq'
          ? `Shembulli ${place.exampleIndex}: `
          : `Example ${place.exampleIndex}: `
        : ''
    return `${index}${place.exampleTitle}`
  }
  if (place.kind === 'section' && place.sectionTitle) {
    return place.sectionTitle
  }
  return locale === 'sq' ? 'Faqja e kursit' : 'Course page'
}

function placeDetails(place: HelpPlace, locale: Locale): string {
  const lines: string[] = []
  if (locale === 'sq') {
    if (place.chapterTitle) lines.push(`Kapitulli: ${place.chapterTitle}`)
    if (place.sectionTitle) lines.push(`Seksioni: ${place.sectionTitle}`)
    if (place.exampleTitle) {
      const n = place.exampleIndex != null ? ` (Shembulli ${place.exampleIndex})` : ''
      lines.push(`Ushtrimi: ${place.exampleTitle}${n}`)
    }
    lines.push(`Faqja: ${place.path}`)
  } else {
    if (place.chapterTitle) lines.push(`Chapter: ${place.chapterTitle}`)
    if (place.sectionTitle) lines.push(`Section: ${place.sectionTitle}`)
    if (place.exampleTitle) {
      const n = place.exampleIndex != null ? ` (Example ${place.exampleIndex})` : ''
      lines.push(`Exercise: ${place.exampleTitle}${n}`)
    }
    lines.push(`Link: ${place.path}`)
  }
  return lines.join('\n')
}

export type UiStrings = {
  browseChapters: string
  startFirstSection: string
  courseIntro: string
  chapterLabel: (n: number) => string
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
    helpEmailSubject: (place) =>
      `Mathh — Help with: ${placeLabel(place, 'en')}`,
    helpEmailBody: (place) =>
      `Hi,\n\nI am having trouble understanding something in Mathh.\n\n${placeDetails(place, 'en')}\n\nWhat I do not understand:\n\nThanks,`,
    footerImplemented: 'Implemented by Agon Mustafaj',
    footerContent: 'Tasks and content by Admir Krasniqi',
  },
  sq: {
    browseChapters: 'Shfleto kapitujt',
    startFirstSection: 'Fillo seksionin e parë',
    courseIntro:
      'Zgjidh një kapitull, pastaj një seksion. Çdo seksion i shpjegon shembujt një nga një, me çdo hap algjebrik të qartë.',
    chapterLabel: (n) => `Kapitulli ${n}`,
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
    helpEmailSubject: (place) =>
      `Mathh — Ndihmë për: ${placeLabel(place, 'sq')}`,
    helpEmailBody: (place) =>
      `Përshëndetje,\n\nKam vështirësi të kuptoj diçka në Mathh.\n\n${placeDetails(place, 'sq')}\n\nÇfarë nuk kuptoj:\n\nFaleminderit,`,
    footerImplemented: 'Implementuar nga Agon Mustafaj',
    footerContent: 'Ndërsa detyrat dhe përmbajtja nga Admir Krasniqi',
  },
}
