import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { areEqual } from 'react-window'
import type { RowProps } from '../virtual-list/types'
import styles from './styles.module.css'

export const PhotoItem = memo(
  ({ data, index, style }: RowProps) => (
    <div className={styles.item} style={style}>
      <h4>{data[index].title}</h4>
      <Image src={data[index].thumbnailUrl} alt={data[index].title} width={150} height={150} />

      <Link href={`/photos/${index + 1}`}>
        <a>See details</a>
      </Link>
    </div>
  ),
  areEqual
)

export default PhotoItem
PhotoItem.displayName = 'PhotoItem'
