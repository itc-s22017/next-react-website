import Link from 'next/link'
import styles from 'styles/nav.module.css'
import { useState } from 'react'

export default function Nav () {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen(prev => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width:767px) {
            body{
              overflow:hidden;
              position:fixed;
              width:100%;
            }
          }
          `}
        </style>
      )}

      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar} />
        <span className='sr-only'>Menu</span>
      </button>

      <ul className={styles.list}>
        <li onClick={closeNav}>
          <Link legacyBehavior href='/'>Home</Link>
        </li>
        <li onClick={closeNav}>
          <Link legacyBehavior href='/about'>About</Link>
        </li>
        <li onClick={closeNav}>
          <Link legacyBehavior href='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
