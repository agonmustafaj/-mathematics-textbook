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

function currentPageUrl(path: string): string {
  if (typeof window === 'undefined') return absolutePageUrl(path)
  // Prefer the live browser URL so the mailto body always has a real https link.
  const fromPath = absolutePageUrl(path)
  try {
    const live = window.location.href.split('#')[0]
    const livePath = `${window.location.pathname}${window.location.search}` || '/'
    if (livePath === path || livePath === `${path}/` || path === '/') {
      return live.startsWith('http') ? live : fromPath
    }
  } catch {
    /* ignore */
  }
  return fromPath.startsWith('http') ? fromPath : absolutePageUrl(path)
}

export function HelpButton({ className = '', place }: HelpButtonProps) {
  const { t } = useLocale()
  const base = place ?? { kind: 'course' as const, path: '/' }
  const location: HelpPlace = {
    ...base,
    path: currentPageUrl(base.path),
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
