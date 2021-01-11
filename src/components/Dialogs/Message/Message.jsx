import React from "react";

import classes from "./Message.module.scss";

function Message({ message }) {
  return <div className={classes.message}>{message}</div>;
}

export default Message;
