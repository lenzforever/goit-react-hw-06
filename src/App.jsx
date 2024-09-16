import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { addContact, removeContact, setContacts } from './redux/contactsSlice';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filterValue = useSelector((state) => state.contacts.filterValue);

  useEffect(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    if (savedContacts) {
      dispatch(setContacts(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleDeleteContact = (id) => {
    dispatch(removeContact(id));
  };

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
