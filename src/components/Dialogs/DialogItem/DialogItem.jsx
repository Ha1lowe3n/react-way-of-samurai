import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./DialogItem.module.scss";

function DialogItem({ name, id }) {
  return (
    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
}

export default DialogItem;
