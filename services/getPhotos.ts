import { request } from './request'

export async function getPhotos() {
  const { data } = await request.get('/photos')
  return data
}

export default getPhotos
