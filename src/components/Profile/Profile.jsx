import React from 'react';

import classes from './Profile.module.scss';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile({ posts, dispatch, newPostText }) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} dispatch={dispatch} newPostText={newPostText} />
    </div>
  );
}

export default Profile;
