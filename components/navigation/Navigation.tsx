import { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { NavigationProps } from './types'
import styles from './Navigation.module.css'

export const Navigation = ({ navigation }: NavigationProps<string>) => {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      {navigation.map((link) => (
        <Link href={link.href} key={link.id}>
          <a
            className={
              router.pathname === link.href
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }>
            {link.text}
          </a>
        </Link>
      ))}
    </nav>
  )
}

export default memo(Navigation)
Navigation.displayName = 'Navigation'
