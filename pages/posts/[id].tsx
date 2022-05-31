import { DefaultLayout } from '../../layouts'
import type { NextPage } from 'next'

export const Post: NextPage = () => {
  return (
    <DefaultLayout title="Post">
      <h1>Post</h1>
      <div></div>
    </DefaultLayout>
  )
}

export default Post
