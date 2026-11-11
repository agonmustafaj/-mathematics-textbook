import { useLocale } from '../i18n/LocaleContext'
import { LOCALES, LOCALE_LABELS, type Locale } from '../i18n/types'

type LanguageToggleProps = {
  className?: string
}

export function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const { locale, setLocale, t } = useLocale()

  return (
    <div
      className={`lang-toggle ${className}`.trim()}
      role="group"
      aria-label={t.language}
    >
      {LOCALES.map((code: Locale) => {
        const active = locale === code
        return (
          <button
            key={code}
            type="button"
            className={`lang-toggle__btn${active ? ' is-active' : ''}`}
            aria-pressed={active}
            aria-label={t.switchTo(code)}
            onClick={() => setLocale(code)}
          >
            {LOCALE_LABELS[code]}
          </button>
        )
      })}
    </div>
  )
}
