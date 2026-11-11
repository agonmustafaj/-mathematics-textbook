import { useLocale } from '../i18n/LocaleContext'

export function SiteFooter() {
  const { t } = useLocale()

  return (
    <footer className="site-footer">
      <p className="site-footer__line">{t.footerImplemented}</p>
      <p className="site-footer__line">{t.footerContent}</p>
    </footer>
  )
}
