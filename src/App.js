import 'styles/shared.scss';
import Header from 'components/Header';
import Section from 'components/Section';
import Form from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
// import { useLocalStorage } from 'hooks/useLocalStorage';

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);

  return (
    <div className="App">
      <Header title={'PhoneBook'}>
        <Filter />
      </Header>
      <Section title={'Contacts'}>
        <Form />
        <ContactList />
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
