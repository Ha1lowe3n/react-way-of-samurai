import React from 'react';
import axios from 'axios';

import userPhoto from '../../assets/images/avatarDefault.jpg';
import classes from './Users.module.scss';

class Users extends React.Component {
  componentDidMount() {
    const { currentPage, setUsers, pageSize, setTotalUsersCount } = this.props;

    if (this.props.users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        )
        .then((res) => {
          setUsers(res.data.items);
          setTotalUsersCount(res.data.totalCount);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
      )
      .then((res) => this.props.setUsers(res.data.items));
  };

  render() {
    const { users, follow, unfollow, totalUsersCount, pageSize, currentPage } = this.props;

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
            for (; i < 10; i++) {
              return (
                <span
                  onClick={() => this.onPageChanged(page)}
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
                <img
                  src={user.photos.small !== null ? user.photos.small : userPhoto}
                  alt="user photo"
                />
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
}

export default Users;
