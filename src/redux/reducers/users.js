// action types
import { usersAPI } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

const initialState = {
    users: [], // пользователи
    pageSize: 5, // сколько пользователей на странице
    totalUsersCount: 0, // сколько всего пользователей
    currentPage: 1, // текущая страница
    isFetching: true, // прелоадер
    followingInProgress: [], // дизейбл кнопки
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true,
                        };
                    } else {
                        return user;
                    }
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false,
                        };
                    } else {
                        return user;
                    }
                }),
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };

        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };

        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(
                          (id) => id !== action.userId
                      ),
            };

        default:
            return state;
    }
};

// action creators
export const follow = (userId) => ({
    type: FOLLOW,
    userId,
});

export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users,
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USER_COUNT,
    totalUsersCount,
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});

export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId,
});

// thunk
export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
};

export const followUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    usersAPI.followUser(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(follow(userId));
        }

        dispatch(toggleFollowingProgress(false, userId));
    });
};

export const unfollowUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    usersAPI.unfollowUser(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(follow(userId));
        }

        dispatch(toggleFollowingProgress(false, userId));
    });
};

export default users;
