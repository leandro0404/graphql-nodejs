import { gql, useQuery } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    __typename
    posts{
      postId
      title
      likesCount
      comments {
        commentId
        text
        author {
          name
        }
      }
    }
  }
`;

export const useGetPosts = () => useQuery(GET_POSTS);