import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImBin } from 'react-icons/im';
import { deleteContact } from 'redux/actions';
import { getVisibleContacts } from 'redux/selectors';

import s from './ContactList.module.scss';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <table className={s.contactList}>
      <tbody>
        {contacts.map(({ id, name, number }) => {
          return (
            <tr className={s.contactListItem} id={id} key={id}>
              <td className={s.name}>{name}</td>
              <td className={s.number}>{number}</td>
              <td className={s.contactBtn}>
                <button className={s.btn} type="button" onClick={() => dispatch(deleteContact(id))}>
                  <ImBin />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
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
