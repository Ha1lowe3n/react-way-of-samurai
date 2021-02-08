import React from 'react';

import classes from './Profile.module.scss';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile() {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
