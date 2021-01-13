import React from "react";

import classes from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs({ dialogs, messages }) {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        {dialogs.map((d) => (
          <DialogItem name={d.name} id={d.id} />
        ))}
      </div>

      <div className={classes.messages}>
        {messages.map((m) => (
          <Message message={m.message} />
        ))}
      </div>
    </div>
  );
}

export default Dialogs;
