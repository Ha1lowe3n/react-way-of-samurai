// action types
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
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
          ...action.users
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

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users
});


export default users;