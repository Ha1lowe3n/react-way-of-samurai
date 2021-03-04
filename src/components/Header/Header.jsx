import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.scss";

function Header({ isAuth, login }) {
    return (
        <header className={classes.header}>
            <img
                src="https://sun9-43.userapi.com/c624116/v624116060/250b7/WB6xXxDpBZA.jpg"
                alt={"logo"}
            />

            <div className={classes.loginBlock}>
                {isAuth ? login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
