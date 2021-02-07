import React from 'react';

import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/reducers/dialogs';

import Dialogs from './Dialogs';

function DialogsContainer({ dialogs, messages, newMessageText, dispatch }) {
  const addMessage = () => {
    dispatch(sendMessageActionCreator());
  };

  const onChangeMessage = (text) => {
    dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      dialogs={dialogs}
      messages={messages}
      newMessageText={newMessageText}
      addMessage={addMessage}
      onChangeMessage={onChangeMessage}
    />
  );
}

export default DialogsContainer;
