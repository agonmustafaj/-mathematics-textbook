import { SUPPORT_EMAIL } from '../support'
import { useLocale } from '../i18n/LocaleContext'

type HelpButtonProps = {
  className?: string
}

export function HelpButton({ className = '' }: HelpButtonProps) {
  const { t } = useLocale()

  const href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(t.helpEmailSubject)}&body=${encodeURIComponent(t.helpEmailBody)}`

  return (
    <a className={`help-btn ${className}`.trim()} href={href}>
      {t.needHelp}
    </a>
  )
}
