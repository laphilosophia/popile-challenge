import { request } from './request'

export async function getPost(id?: string | string[]) {
  const { data } = await request.get(`/posts/${id}`)
  return data
}

export default getPost
