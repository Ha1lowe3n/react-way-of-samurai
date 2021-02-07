import React from 'react';

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/reducers/profile';
import MyPosts from './MyPosts';

function MyPostsContainer({ posts, newPostText, dispatch }) {
  const addNewPost = () => {
    dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addNewPost}
      posts={posts}
      newPostText={newPostText}
    />
  );
}

export default MyPostsContainer;
