import 'styles/shared.scss';
import { useState } from 'react';
import shortid from 'shortid';
import Header from 'components/Header';
import Section from 'components/Section';
import Form from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useLocalStorage } from 'hooks/useLocalStorage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = [
      {
        id: shortid.generate(),
        name,
        number,
      },
    ];

    const existContact = contacts.some(item => item.name === name);
    // console.log(existContact);

    !existContact
      ? setContacts(prev => [...prev, ...contact])
      : alert(`${name} is already in the contact`);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <div className="App">
      <Header title={'PhoneBook'}>
        <Filter value={filter} onChange={changeFilter} />
      </Header>
      <Section title={'Contacts'}>
        <Form onSubmit={addContact} />
        <ContactList contacts={getFilterContacts()} onDeleteContact={deleteContact} />
      </Section>
    </div>
  );
}

// const [contacts, setContacts] = useState(
//   JSON.parse(window.localStorage.getItem('contacts:')) ?? initialContacts,
// );
// const [filter, setFilter] = useState('');

// useEffect(() => {
//   window.localStorage.setItem('contacts:', JSON.stringify(contacts));
// }, [contacts]);
