import Link from 'next/link'
import { DefaultLayout } from '../../layouts'
import { getPosts, getPost } from '../../services'
import type { NextPage, GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import type { PostDTO } from '../@types/posts'
import styles from '../../styles/Post.module.css'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()
  const paths = posts.map((post: PostDTO) => ({
    params: { id: post.id.toLocaleString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params?.id)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 600,
  }
}

export const Post: NextPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <DefaultLayout title="Posts">
      <h1>Post</h1>
      <hr style={{ marginBlock: 20 }} />

      <h4 className={styles.postTitle}>{post.title}</h4>
      <p className={styles.postSummary}>{post.body}</p>
      <hr style={{ marginBlock: 20 }} />

      <Link href="/posts">
        <a className={styles.postLink}>Go back</a>
      </Link>
    </DefaultLayout>
  )
}

export default Post
