import React from "react";

import classes from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs({
    dialogs: { dialogs, messages, newMessageText },
    addMessage,
    onChangeMessage,
}) {
    const newMessage = React.useRef();

    const sendMessage = () => addMessage();
    const updateNewMessage = () => onChangeMessage(newMessage.current.value);

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
                        onChange={updateNewMessage}
                        value={newMessageText}
                        placeholder={"Enter your message..."}
                    />
                </div>
                <button onClick={sendMessage}>Add</button>
            </div>
        </div>
    );
}

export default Dialogs;
