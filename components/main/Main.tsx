import { memo } from 'react'
import type { FC, PropsWithChildren } from 'react'
import styles from './Main.module.css'

export const Main: FC<PropsWithChildren<any>> = ({ children }) => {
  return <main className={styles.main}>{children}</main>
}

export default memo(Main)
Main.displayName = 'Main'
