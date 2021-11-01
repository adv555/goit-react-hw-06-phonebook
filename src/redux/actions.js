import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/filter');

export { addContact, deleteContact, changeFilter };

/** Without Redux Toolkit 
 
 const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});
  
const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
}); 

*/
