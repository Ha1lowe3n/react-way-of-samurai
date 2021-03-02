import { createStore, combineReducers } from "redux";

import { profile, dialogs, users } from "./reducers";

const reducers = combineReducers({
    profile,
    dialogs,
    users,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
