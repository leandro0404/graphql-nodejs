import { PostType } from "../types";
import { CommentCard } from "./CommentCard";

export type PostCommentsProps = Pick<PostType,  'comments'>;

export const PostComents = ({comments}:PostCommentsProps) => {
  return <dd>

    <h3>{(!!comments && comments.length) ? 'Comments:' : 'No comments yet!'}</h3>
    {
      comments &&
        <ul className="comments">
          { 
             (!!comments && !!comments.length) && comments.map(({commentId, ...commentProps}) => <CommentCard key={commentId} {...commentProps} />) 
          }
        </ul>
    }
  </dd>
}