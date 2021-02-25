import React from 'react';
import { NavLink } from 'react-router-dom';

import userPhoto from '../../assets/images/avatarDefault.jpg';
import classes from './Users.module.scss';

function Users({ users, follow, unfollow, totalUsersCount, pageSize, currentPage, onPageChanged }) {
  // кол-во страниц
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  // отображение кол-ва страниц
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.user}>
      <div className={classes.pages}>
        {pages.map((page, i) => {
          // поставил ограничение из-за огромного кол-ва пользователей
          while (i < 10) {
            return (
              <span
                onClick={() => onPageChanged(page)}
                key={`${page}_${i}`}
                className={page === currentPage ? classes.selectedPage : ''}>
                {page}
              </span>
            );
          }
        })}
      </div>

      {users.map((user, i) => (
        <div key={`${user}_${i}`}>
          <span>
            <div className={classes.photo}>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={user.photos.small !== null ? user.photos.small : userPhoto}
                  alt="user photo"
                />
              </NavLink>
            </div>

            <div>
              {user.followed ? (
                <button onClick={() => unfollow(user.id)}>unfollow</button>
              ) : (
                <button onClick={() => follow(user.id)}>follow</button>
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
