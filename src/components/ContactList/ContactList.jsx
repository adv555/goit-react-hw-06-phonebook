import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import getFilterContacts from 'utils/filter-normalize';

import s from './ContactList.module.scss';

export default function ContactList() {
  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getFilterContacts(items, filter),
  );
  const dispatch = useDispatch();

  return (
    <div>
      <ul className={s.contactList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={s.contactListItem} id={id} key={id}>
              <p className={s.text}>{name}</p>
              <p className={s.text}>{number}</p>
              <button className={s.btn} type="button" onClick={() => dispatch(deleteContact(id))}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// With import { connect } from 'react-redux';

/**
  const getFilterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilterContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

 */
