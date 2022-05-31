import type { NextPage } from 'next'
import { DefaultLayout } from '../layouts'

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Home">
      <h1>Home</h1>
      <div>homepage</div>
    </DefaultLayout>
  )
}

export default Home
