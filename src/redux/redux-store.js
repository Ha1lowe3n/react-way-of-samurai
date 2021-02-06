import { createStore, combineReducers } from 'redux';

import profile from './reducers/profile';
import dialogs from './reducers/dialogs';

const reducers = combineReducers({
  profile,
  dialogs
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;