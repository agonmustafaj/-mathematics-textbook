import type { Locale } from './types'

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
  },
  sq: {
    browseChapters: 'Shfleto kapitujt',
    startFirstSection: 'Fillo seksionin e parë',
    courseIntro:
      'Zgjidh një kapitull, pastaj një seksion. Çdo seksion kalon shembujt një nga një, me çdo hap algjebrik të shpjeguar.',
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
    previous: '← I mëparshmi',
    next: 'I radhës →',
    allExamples: 'Të gjithë shembujt',
    backToSection: 'Kthehu te seksioni',
    language: 'Gjuha',
    switchTo: (locale) => (locale === 'en' ? 'Kalo në anglisht' : 'Kalo në shqip'),
  },
}
