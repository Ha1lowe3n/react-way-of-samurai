import React from "react";
import { NavLink } from "react-router-dom";

import userPhoto from "../../assets/images/avatarDefault.jpg";
import classes from "./Users.module.scss";
import axios from "axios";

function Users({
    users,
    follow,
    unfollow,
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged,
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
                                    alt="user photo"
                                />
                            </NavLink>
                        </div>

                        <div>
                            {user.followed ? (
                                <button
                                    onClick={() => {
                                        axios
                                            .delete(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY":
                                                            "f6d122c0-e13a-41a0-8a89-732f8ec98129",
                                                    },
                                                }
                                            )
                                            .then((res) => {
                                                if (res.data.resultCode === 0) {
                                                    unfollow(user.id);
                                                }
                                            });
                                    }}
                                >
                                    unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        axios
                                            .post(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY":
                                                            "f6d122c0-e13a-41a0-8a89-732f8ec98129",
                                                    },
                                                }
                                            )
                                            .then((res) => {
                                                if (res.data.resultCode === 0) {
                                                    follow(user.id);
                                                }
                                            });
                                    }}
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
