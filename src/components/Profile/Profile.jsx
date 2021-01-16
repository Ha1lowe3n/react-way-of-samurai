import React from 'react';

import classes from './Profile.module.scss';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile({ posts, addPost, newPostText, updateNewPostText }) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        addPost={addPost}
        newPostText={newPostText}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
}

export default Profile;
