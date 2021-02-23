// action types
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  users: [], // пользователи
  pageSize: 5, // сколько пользователей на странице
  totalUsersCount: 0, // сколько всего пользователей
  currentPage: 1, // текущая страница
  isFetching: true // прелоадер
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true
            }
          } else {
            return user;
          }
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false
            }
          } else {
            return user;
          }
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    default:
      return state;
  }
}

// action creators
export const followAC = (userId) => ({
  type: FOLLOW,
  userId
});

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users
});

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USER_COUNT,
  totalUsersCount
});

export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export default users;