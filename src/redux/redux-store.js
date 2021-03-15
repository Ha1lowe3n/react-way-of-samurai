import { createStore, compose, combineReducers, applyMiddleware } from "redux";

import { profile, dialogs, users, auth } from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
    profile,
    dialogs,
    users,
    auth,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
