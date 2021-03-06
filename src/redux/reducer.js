import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteContact, changeFilter } from 'redux/actions';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function getNewContact(state, { payload }) {
  const existContact = state.some(({ name }) => name === payload.name);
  return !existContact ? [...state, payload] : alert(`${payload.name} is already in the contact`);
}

const items = createReducer(initialContacts, {
  [addContact]: (state, action) => getNewContact(state, action),
  [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

/** Without Redux Toolkit 
 
  const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case types.ADD:
      const existContact = state.some(({ name }) => name === payload.name);

      return !existContact
        ? [...state, payload]
        : alert(`${payload.name} is already in the contact`);

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};
*/
