export type PostAuthorType = {
    name: string
}
  
export type CommentDataType = {
    __typename: string
    commentId: number
    text: string
    author: PostAuthorType[]
}
  
export type PostType = {
    __typename: string
    postId: number
    title: string
    likesCount: number
    comments: CommentDataType[]
}