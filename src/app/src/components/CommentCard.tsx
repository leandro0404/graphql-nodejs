import { CommentDataType } from "../types";

export type CommentCardProps = Omit<CommentDataType, 'commentId'>;

export const CommentCard = ({text, author}:Omit<CommentDataType, 'commentId'>) => {
  return <li>
    <p>{text}</p>
    <em>By: {author[0].name}</em>
  </li>;
}