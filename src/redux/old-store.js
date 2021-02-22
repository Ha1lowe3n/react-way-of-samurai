// reducers
import profile from './reducers/profile';
import dialogs from './reducers/dialogs';

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

window.store = store;

export default store;