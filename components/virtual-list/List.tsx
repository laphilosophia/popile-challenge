import { FixedSizeList } from 'react-window'
import { useVirtualList } from './utils'
import styles from './styles.module.css'

interface VirtualListProps {
  collection: any[]
  children: any
  height?: number
  itemSize?: number
}

export function VirtualList({ collection, height, itemSize, children }: VirtualListProps) {
  const config = useVirtualList(collection, height, itemSize)

  return (
    <div className={styles.list}>
      <div style={{ height: '100%', paddingBlock: 4 }}>
        <FixedSizeList {...config}>{children}</FixedSizeList>
      </div>
    </div>
  )
}

export default VirtualList
