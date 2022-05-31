import { DefaultLayout } from '../../layouts'
import { List, PostItem } from '../../components'
import { getPosts } from '../../services'
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
    },
    revalidate: 600,
  }
}

export const Posts: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <DefaultLayout title="Posts">
      <h1>Posts</h1>

      <List collection={posts} height={500} itemSize={120}>
        {PostItem}
      </List>
    </DefaultLayout>
  )
}

export default Posts
