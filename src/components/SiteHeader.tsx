import { Link } from 'react-router-dom'
import { getCourse } from '../content'
import { useLocale } from '../i18n/LocaleContext'
import type { HelpPlace } from '../support'
import { HelpButton } from './HelpButton'
import { LanguageToggle } from './LanguageToggle'

type SiteHeaderProps = {
  compact?: boolean
  helpPlace?: HelpPlace
}

export function SiteHeader({ compact = false, helpPlace }: SiteHeaderProps) {
  const { locale } = useLocale()
  const course = getCourse(locale)

  return (
    <header className={`site-header${compact ? ' site-header--compact' : ''}`}>
      <Link to="/" className="brand-mark">
        <span className="brand-mark__name">{course.brand}</span>
        <span className="brand-mark__topic">{course.title}</span>
      </Link>
      <div className="header-actions">
        <HelpButton place={helpPlace} />
        <LanguageToggle />
      </div>
    </header>
  )
}
