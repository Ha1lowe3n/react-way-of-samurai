// reducers
import profile from '../redux/reducers/profile';
import dialogs from '../redux/reducers/dialogs';

// action types
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

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

      newMessageText: ""
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
    profile(this._state.profilePage, action);
    dialogs(this._state.dialogsPage, action);

    this._callSubsriber(this._state);
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

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  messageText: text
});

window.store = store;

export default store;