import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import contactsReducer from 'redux/reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});

export default store;

/* without toolkit */

// const rootReduser = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReduser, composeWithDevTools());
