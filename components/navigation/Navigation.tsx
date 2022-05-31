import { memo } from 'react'
import Link from 'next/link'
import type { NavigationProps } from './types'
import styles from './Navigation.module.css'

export const Navigation = ({ navigation }: NavigationProps<string>) => {
  return (
    <nav className={styles.nav}>
      {navigation.map((link) => (
        <Link href={link.href} key={link.id}>
          <a>{link.text}</a>
        </Link>
      ))}
    </nav>
  )
}

export default memo(Navigation)
Navigation.displayName = 'Navigation'
