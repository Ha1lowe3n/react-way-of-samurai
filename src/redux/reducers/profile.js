// action types
import { profileAPI } from "../../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
    posts: [
        { id: 1, message: "Hello", likesCount: "9" },
        { id: 2, message: "Hi", likesCount: "7" },
    ],
    newPostText: "",
    profileInfo: null,
    status: "",
};

const profile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText,
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profileInfo: action.profileInfo,
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };

        default:
            return state;
    }
};

// action creators
export const addPost = () => ({
    type: ADD_POST,
});

export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    postText: text,
});

export const setUserProfile = (profileInfo) => ({
    type: SET_USER_PROFILE,
    profileInfo,
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
});

// thunk
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((res) => {
        dispatch(setStatus(res.data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profile;
