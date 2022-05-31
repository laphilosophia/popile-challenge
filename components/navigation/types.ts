export interface INavigation<T> {
  id: T
  href: T
  text: T
}

export interface NavigationProps<T> {
  navigation: Array<INavigation<T>>
}
