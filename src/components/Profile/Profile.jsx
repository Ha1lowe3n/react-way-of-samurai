import React from "react";

import classes from "./Profile.module.scss";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default Profile;
