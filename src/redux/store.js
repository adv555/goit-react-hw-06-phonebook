import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from 'redux/reducer';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

const rootReduser = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReduser, composeWithDevTools());

export default store;
