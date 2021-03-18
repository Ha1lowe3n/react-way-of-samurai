import React from "react";
import { NavLink } from "react-router-dom";

import userPhoto from "../../assets/images/avatarDefault.jpg";
import classes from "./Users.module.scss";

function Users({
    users,
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged,
    followingInProgress,
    followUser,
    unfollowUser,
}) {
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
                    // поставил цикл для ограничения из-за огромного кол-ва пользователей
                    while (i < 10) {
                        return (
                            <span
                                onClick={() => onPageChanged(page)}
                                key={`${page}_${i}`}
                                className={
                                    page === currentPage
                                        ? classes.selectedPage
                                        : ""
                                }
                            >
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
                                    src={
                                        user.photos.small !== null
                                            ? user.photos.small
                                            : userPhoto
                                    }
                                    alt="user_photo"
                                />
                            </NavLink>
                        </div>

                        <div>
                            {user.followed ? (
                                <button
                                    disabled={followingInProgress.some(
                                        (id) => id === user.id
                                    )}
                                    onClick={() => unfollowUser(user.id)}
                                >
                                    unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={followingInProgress.some(
                                        (id) => id === user.id
                                    )}
                                    onClick={() => followUser(user.id)}
                                >
                                    follow
                                </button>
                            )}
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>

                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Users;
