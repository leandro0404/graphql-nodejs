import { gql, useMutation } from "@apollo/client";
import { GET_POSTS } from "./useGetPosts";

export const ADD_POST = gql`
    mutation AddPost($postTitle: String) {
        savePost(title: $postTitle){
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
`

export const useAddPost = () => useMutation(ADD_POST, {
    //fetch a query after mutation succeed
    /*
    refetchQueries: [
        {query: GET_POSTS}, // DocumentNode object parsed with gql
        'getPosts' // Query name
    ],
    */
   //update cache before mutation if optimisticResponse is set in the config and after mutation succeed 
    update(cache, { data: { savePost:newPostData } }) {
        const prevPosts : any = cache.readQuery({query: GET_POSTS});

        const updatedPosts = {posts: [...prevPosts.posts, newPostData]};
        console.log('enviando', newPostData);
        cache.writeQuery({query: GET_POSTS, data: updatedPosts});
        console.log('finalizado', newPostData);
    }
});