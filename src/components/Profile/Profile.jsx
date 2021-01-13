import React from "react";

import classes from "./Profile.module.scss";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({ posts }) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
}

export default Profile;
