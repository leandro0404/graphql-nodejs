import React, { Fragment, useCallback, useState } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client';
import { useGetPosts } from './hooks/api/useGetPosts';
import { useAddPost } from './hooks/api/useAddPost';
import { PostType } from './types';
import { Post, PostProps } from './components/Post';
import { PostComents } from './components/PostComments';
import { removeArgumentsFromDocument } from '@apollo/client/utilities';

import './App.css'

function App() {

  const { loading, error, data } = useGetPosts();
  const [addPost, {data:postResponse, loading:adding, error:postError}] = useAddPost();

  const submitPost = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { post: { value } } = e.target as HTMLFormElement;

      if(!value) return;

      addPost({
        //variables expected in the schema
        variables: {postTitle: value},
        //update cache usign a mock until mutation completes
        optimisticResponse: {
          savePost: {
            __typename: 'Post',
            postId: 999999,
            title: value,
            likesCount: null,
            comments: null,
          }
        },
        onCompleted: () => {
          //@ts-ignore
          e.target.reset()
        }
      });
  }

  if (loading ) return <p>Loading...</p>;
  
  if (error || postError) return <p>Error : {error?.message || postError?.message}</p>;

  return (
    <>
      <form onSubmit={submitPost}>
        <input type='text'  name='post' className='input' placeholder='Post something!' />
      </form>
      {
        adding && <p>Saving...</p>
      }
      <dl>
        {
          !!data?.posts ?
          data.posts.map(
            ({postId, comments, ...postProps}:PostType) => <Fragment key={postId}>
              <Post {...postProps} isSaving={adding && postId === 999999} />
              <PostComents comments={comments} />
              <hr />
            </Fragment>
          ) :
          <p>No posts yet!</p>
        }
      </dl>
    </>
  )
}

export default App
