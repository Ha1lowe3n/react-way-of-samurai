import React from 'react';

import classes from './Profile.module.scss';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile({ posts, dispatch, newPostText }) {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer posts={posts} dispatch={dispatch} newPostText={newPostText} />
    </div>
  );
}

export default Profile;
