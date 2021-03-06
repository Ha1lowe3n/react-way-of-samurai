// action types
import { authAPI } from "../../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };

        default:
            return state;
    }
};

// action creators
export const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login,
    },
});

// thunk
export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then((res) => {
        if (res.data.resultCode === 0) {
            const { id, email, login } = res.data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
};

export default auth;
