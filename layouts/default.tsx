import Head from 'next/head'
import { memo } from 'react'
import { Header, Navigation, Logotype, Main } from '../components'
import { NavigationMenuData } from '../data'
import type { FC } from 'react'
import type { DefaultLayoutProps } from './types'
import styles from './DefaultLayout.module.css'

export const DefaultLayout: FC<DefaultLayoutProps> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Popile - {title}</title>
        <meta name="description" content={`Popile Challenge - ${title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Logotype />
        <Navigation navigation={NavigationMenuData} />
      </Header>

      <Main>{children}</Main>
    </div>
  )
}

export default memo(DefaultLayout)
DefaultLayout.displayName = 'DefaultLayout'
