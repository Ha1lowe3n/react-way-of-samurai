import React from "react";

import { Preloader } from "../../common";

import classes from "./ProfileInfo.module.scss";
import userPhoto from "../../../assets/images/avatarDefault.jpg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

function ProfileInfo({ profile, status, updateStatus }) {
    return (
        <>
            {!profile ? (
                <Preloader />
            ) : (
                <div className={classes.wrapper}>
                    <img
                        src="https://i.pinimg.com/originals/0e/8b/a6/0e8ba6473ec93fa8b6cbba9179b31bd7.jpg"
                        alt="wrapper"
                    />

                    <div className={classes.descr}>
                        <img
                            src={
                                profile.photos.large !== null
                                    ? profile.photos.large
                                    : userPhoto
                            }
                            alt={"user_photo"}
                        />
                        <ProfileStatus
                            status={status}
                            updateStatus={updateStatus}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default ProfileInfo;
