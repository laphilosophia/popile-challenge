import { memo } from 'react'
import { areEqual } from 'react-window'
import { RowProps } from './types'

const Item = memo(
  ({ data, index, style }: RowProps) => <span style={style}>{data[index]}</span>,
  areEqual
)

export default Item
Item.displayName = 'Item'
