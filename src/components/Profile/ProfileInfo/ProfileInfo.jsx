import React from 'react';
import { Preloader } from '../../common';

import classes from './ProfileInfo.module.scss';

function ProfileInfo({ profile }) {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={classes.wrapper}>
      <img
        src="https://i.pinimg.com/originals/0e/8b/a6/0e8ba6473ec93fa8b6cbba9179b31bd7.jpg"
        alt="wrapper"
      />

      <div className={classes.descr}>
        <img src={profile.photos.large} />
        ava + descr
      </div>
    </div>
  );
}

export default ProfileInfo;
