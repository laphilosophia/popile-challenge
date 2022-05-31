import { request } from './request'

export async function getPosts() {
  const { data } = await request.get('/posts')
  return data
}

export default getPosts
