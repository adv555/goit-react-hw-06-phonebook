import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from 'redux/store';

// import { myAction, myAction2 } from 'redux/action';

import './index.css';
import App from './App';

console.log(store.getState());
// store.dispatch(myAction);
// store.dispatch(myAction2(5));
// store.dispatch(myAction2(15));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
