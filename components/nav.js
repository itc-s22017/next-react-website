import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav () {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link legacyBehavior href='/'>Home</Link>
        </li>
        <li>
          <Link legacyBehavior href='/about'>About</Link>
        </li>
        <li>
          <Link legacyBehavior href='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
