// action types
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  postsData: [
    { id: 1, message: "Hello", likesCount: "9" },
    { id: 2, message: "Hi", likesCount: "7" },
  ],
  newPostText: ""
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };

      state.postsData.push(newPost);
      state.newPostText = '';

      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.postText;
      return state;

    default:
      return state;
  }
}

// action creators
export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  postText: text,
});

export default profile;