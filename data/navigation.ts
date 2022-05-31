import type { INavigation } from '../components/navigation/types'

interface NavigationMenuDataProps extends Array<INavigation<string>> {}

export const NavigationMenuData: NavigationMenuDataProps = [
  {
    id: 'popile',
    href: '/',
    text: 'Home',
  },
  {
    id: 'popile-posts',
    href: '/posts',
    text: 'Posts',
  },
  {
    id: 'popile-comments',
    href: '/comments',
    text: 'Comments',
  },
  {
    id: 'popile-photos',
    href: '/photos',
    text: 'Photos',
  },
  {
    id: 'popile-users',
    href: '/users',
    text: 'Users',
  },
]

export default NavigationMenuData
