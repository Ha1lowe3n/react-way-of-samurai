import React from "react";

import classes from "./Profile.module.scss";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({ profile, status, updateStatus }) {
    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
