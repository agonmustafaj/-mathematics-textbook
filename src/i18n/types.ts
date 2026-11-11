export type Locale = 'en' | 'sq'

export const LOCALES: Locale[] = ['en', 'sq']

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  sq: 'SQ',
}

export const LOCALE_STORAGE_KEY = 'mathh-locale'
