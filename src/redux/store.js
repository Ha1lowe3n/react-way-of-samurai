// action types
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hello", likesCount: "9" },
        { id: 2, message: "Hi", likesCount: "7" },
      ],
      newPostText: ""
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Oleg" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Valera" },
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "What's up?" },
      ],
    }
  },

  getState() {
    return this._state;
  },

  _callSubsriber() {
    console.log('state changed');
  },

  subscribe(observer) {
    this._callSubsriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD_POST") {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubsriber(this._state);

    } else if (action.type === "UPDATE_NEW_POST_TEXT") {
      this._state.profilePage.newPostText = action.postText;
      this._callSubsriber(this._state);
    }
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

window.store = store;

export default store;