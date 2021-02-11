import React from 'react';

import classes from './Users.module.scss';

function Users({ users, follow, unfollow, setUsers }) {
  if (users.length === 0) {
    setUsers(
      {
        id: 1,
        photoUrl:
          'https://avatars.mds.yandex.net/get-zen_doc/1640581/pub_5e0497c82beb4900ad59a2d0_5e04996e028d6800ac20ec89/scale_1200',
        followed: true,
        fullName: 'Ilya',
        status: 'student',
        location: {
          city: 'Krasnoyarsk',
          country: 'Russia',
        },
      },
      {
        id: 2,
        photoUrl:
          'https://avatars.mds.yandex.net/get-zen_doc/1640581/pub_5e0497c82beb4900ad59a2d0_5e04996e028d6800ac20ec89/scale_1200',
        followed: false,
        fullName: 'Egor',
        status: 'rabotyaga',
        location: {
          city: 'Kamchatka',
          country: 'Russia',
        },
      },
      {
        id: 3,
        photoUrl:
          'https://avatars.mds.yandex.net/get-zen_doc/1640581/pub_5e0497c82beb4900ad59a2d0_5e04996e028d6800ac20ec89/scale_1200',
        followed: true,
        fullName: 'Sasha',
        status: 'bomj',
        location: {
          city: 'kolodec',
          country: 'Russia',
        },
      },
    );
  }

  return (
    <div className={classes.user}>
      {users.map((user) => (
        <div key={user.id}>
          <span>
            <div className={classes.photo}>
              <img src={user.photoUrl} alt="avatar" />
            </div>

            <div>
              {user.followed ? (
                <button onClick={() => follow(user.id)}>unfollow</button>
              ) : (
                <button onClick={() => unfollow(user.id)}>follow</button>
              )}
            </div>
          </span>

          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>

            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
