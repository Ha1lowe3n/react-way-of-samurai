import React from "react";
import { Route } from "react-router-dom";

import {
    DialogsContainer,
    HeaderContainer,
    Navbar,
    ProfileContainer,
    News,
    Music,
    Settings,
    UsersContainer,
    Login,
} from "./components";

import "./app.scss";

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper--content">
                <Route
                    path="/profile/:userId?"
                    render={() => <ProfileContainer />}
                />
                <Route path="/dialogs" component={DialogsContainer} />
                <Route path="/users" component={UsersContainer} />
                <Route path="/login" component={Login} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default App;
