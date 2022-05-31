import Link from 'next/link'
import Image from 'next/image'
import { memo } from 'react'
import styles from './Logotype.module.css'

export const Logotype = () => {
  return (
    <h1 className={styles.logotype}>
      <Link href="/">
        <a>
          <Image src="/popile-icon.svg" alt="Popile" width={40} height={40} />
        </a>
      </Link>
    </h1>
  )
}

export default memo(Logotype)
Logotype.displayName = 'Logotype'
