export interface PostDTO {
  id: number
  userId: number
  body: string
  title: string
}

export interface PostsDTO extends Array<PostsDTO> {}
