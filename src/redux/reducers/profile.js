// action types
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profile = (state, action) => {
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

export default profile;