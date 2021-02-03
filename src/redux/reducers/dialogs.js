// action types
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogs = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 6,
        message: state.newMessageText
      }

      state.messagesData.push(newMessage);
      state.newMessageText = '';

      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.messageText;
      return state;

    default:
      return state;
  }
}

export default dialogs;