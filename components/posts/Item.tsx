import { memo } from 'react'
import Link from 'next/link'
import { areEqual } from 'react-window'
import type { RowProps } from '../../components/virtual-list/types'
import styles from './styles.module.css'

export const PostItem = memo(
  ({ data, index, style }: RowProps) => (
    <div className={styles.item} style={style}>
      <h4>{data[index].title}</h4>
      <p>{data[index].body}</p>

      <Link href={`/posts/${index + 1}`}>
        <a>See details</a>
      </Link>
    </div>
  ),
  areEqual
)

export default PostItem
PostItem.displayName = 'PostItem'
