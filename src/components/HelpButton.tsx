import {
  absolutePageUrl,
  buildHelpMailto,
  SUPPORT_EMAIL,
  type HelpPlace,
} from '../support'
import { useLocale } from '../i18n/LocaleContext'

type HelpButtonProps = {
  className?: string
  /** Current page/exercise — used to fill the email subject and body. */
  place?: HelpPlace
}

export function HelpButton({ className = '', place }: HelpButtonProps) {
  const { t } = useLocale()
  const base = place ?? { kind: 'course' as const, path: '/' }
  const location: HelpPlace = {
    ...base,
    path: absolutePageUrl(base.path),
  }
  const href = buildHelpMailto(
    SUPPORT_EMAIL,
    t.helpEmailSubject(location),
    t.helpEmailBody(location),
  )

  return (
    <a className={`help-btn ${className}`.trim()} href={href}>
      {t.needHelp}
    </a>
  )
}
