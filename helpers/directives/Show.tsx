import { useEffect, useState } from 'react'

interface IShow<T> {
  when: T | undefined | null | false
  children: JSX.Element
  fallback?: JSX.Element | undefined
}

export function Show<T>({ when, fallback, children }: IShow<T>) {
  const [condition, setCondition] = useState(when)

  useEffect(() => setCondition(when), [when])

  switch (condition) {
    case undefined:
    case null:
    case false:
      if (fallback) {
        return fallback
      }

      return null

    default:
      return children
  }
}

export default Show
