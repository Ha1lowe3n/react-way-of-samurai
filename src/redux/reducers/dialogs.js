// action types
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Oleg" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Valera" },
  ],

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "What's up?" },
  ],

  newMessageText: ""
};

const dialogs = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const newMessage = {
        id: 6,
        message: state.newMessageText
      }

      const newState = {
        ...state,
        messages: [...state.messages]
      }

      newState.messages.push(newMessage);
      newState.newMessageText = '';

      return newState;
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
      const newState = {
        ...state,
        newMessageText: action.messageText
      }

      return newState;
    }

    default:
      return state;
  }
}

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  messageText: text
});

export default dialogs;