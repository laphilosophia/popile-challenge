import { memo } from 'react'
import type { FC, PropsWithChildren } from 'react'
import styles from './Header.module.css'

export const Header: FC<PropsWithChildren<any>> = ({ children }) => {
  return <header className={styles.header}>{children}</header>
}

export default memo(Header)
Header.displayName = 'Header'
