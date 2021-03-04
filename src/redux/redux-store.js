import { createStore, combineReducers } from "redux";

import { profile, dialogs, users, auth } from "./reducers";

const reducers = combineReducers({
    profile,
    dialogs,
    users,
    auth,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
