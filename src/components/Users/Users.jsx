import React from 'react';
import axios from 'axios';

import userPhoto from '../../assets/images/avatarDefault.jpg';
import classes from './Users.module.scss';

function Users({ users, follow, unfollow, setUsers }) {
  if (users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((res) => setUsers(res.data.items));
  }

  return (
    <div className={classes.user}>
      {users.map((user, i) => (
        <div key={`${user}_${i}`}>
          <span>
            <div className={classes.photo}>
              <img
                src={user.photos.small !== null ? user.photos.small : userPhoto}
                alt="user photo"
              />
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
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>

            <span>
              <div>{'user.location.country'}</div>
              <div>{'user.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
