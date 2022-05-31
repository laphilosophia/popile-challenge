import type { FixedSizeListProps } from 'react-window'

export const useVirtualListConfig = (data: any, height?: number, itemSize?: number) =>
  ({
    layout: 'vertical',
    height: height || data.length * 36,
    itemData: data,
    itemCount: data.length,
    itemSize: itemSize || 40,
    width: '100%',
  } as FixedSizeListProps<any>)

export default useVirtualListConfig
