import { Link } from 'react-router-dom'
import { course } from '../content'

type SiteHeaderProps = {
  compact?: boolean
}

export function SiteHeader({ compact = false }: SiteHeaderProps) {
  return (
    <header className={`site-header${compact ? ' site-header--compact' : ''}`}>
      <Link to="/" className="brand-mark">
        <span className="brand-mark__name">{course.brand}</span>
        <span className="brand-mark__topic">{course.title}</span>
      </Link>
    </header>
  )
}
