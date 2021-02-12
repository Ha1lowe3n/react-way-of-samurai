import React from 'react';

import classes from './Users.module.scss';

function Users({ users, follow, unfollow, setUsers }) {
  return (
    <div className={classes.user}>
      {users.map((user, i) => (
        <div key={`${user}_${i}`}>
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
