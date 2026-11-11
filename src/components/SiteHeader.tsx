import { Link } from 'react-router-dom'
import { getCourse } from '../content'
import { useLocale } from '../i18n/LocaleContext'
import { LanguageToggle } from './LanguageToggle'

type SiteHeaderProps = {
  compact?: boolean
}

export function SiteHeader({ compact = false }: SiteHeaderProps) {
  const { locale } = useLocale()
  const course = getCourse(locale)

  return (
    <header className={`site-header${compact ? ' site-header--compact' : ''}`}>
      <Link to="/" className="brand-mark">
        <span className="brand-mark__name">{course.brand}</span>
        <span className="brand-mark__topic">{course.title}</span>
      </Link>
      <LanguageToggle />
    </header>
  )
}
