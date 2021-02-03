import React from 'react';

import classes from './Dialogs.module.scss';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/store';

function Dialogs({ dialogs, messages, newMessageText, dispatch }) {
  const newMessage = React.useRef();

  const addMessage = () => {
    dispatch(sendMessageActionCreator());
  };

  const onChangeMessage = () => {
    dispatch(updateNewMessageTextActionCreator(newMessage.current.value));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        {dialogs.map((d, i) => (
          <DialogItem key={`${d}_${i}`} name={d.name} id={d.id} />
        ))}
      </div>

      <div className={classes.messages}>
        {messages.map((m, i) => (
          <Message key={`${m}_${i}`} message={m.message} />
        ))}

        <div className={classes.textarea}>
          <textarea
            ref={newMessage}
            onChange={onChangeMessage}
            value={newMessageText}
            placeholder="Enter your message"></textarea>
        </div>
        <button onClick={addMessage}>Add</button>
      </div>
    </div>
  );
}

export default Dialogs;
