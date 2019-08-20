import { PostType } from "../types";

export type PostProps = { isSaving: boolean } & Pick<PostType, 'title' | 'likesCount'> 

export const Post = ({title, likesCount, isSaving} : PostProps) => {
  return <dt>
    <h2>{isSaving && 'Saving: '}{title}</h2> 
    <button onClick={() => console.log('like')}>likes: {likesCount || 0}</button>
  </dt>;
}

