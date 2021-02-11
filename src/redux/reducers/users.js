// action types
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   fullName: 'Ilya',
    //   status: 'student',
    //   location: {
    //     city: 'Krasnoyarsk',
    //     country: 'Russia'
    //   }
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   fullName: 'Egor',
    //   status: 'rabotyaga',
    //   location: {
    //     city: 'Kamchatka',
    //     country: 'Russia'
    //   }
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   fullName: 'Sasha',
    //   status: 'bomj',
    //   location: {
    //     city: 'kolodec',
    //     country: 'Russia'
    //   }
    // }
  ],
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
        users: [
          ...state.users,
          action.users
        ]
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

export const setUsersAC = (userId) => ({
  type: SET_USERS,
  userId
});


export default users;