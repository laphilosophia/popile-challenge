interface IFor<T, U extends JSX.Element> {
  each: readonly T[] | undefined
  fallback: U
  children: (item: T, index: number) => U
}

export function For<T, U extends JSX.Element>({
  each,
  fallback,
  children,
}: IFor<T, U>): JSX.Element {
  return each ? (
    <>
      {each.map(children, (item: U) => {
        if (item) {
          return fallback
        }

        return item
      })}
    </>
  ) : (
    fallback
  )
}

export default For
