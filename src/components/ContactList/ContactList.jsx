import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import styles from '../ContactList/ContactsList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li key={contact.id} className={styles.contactItem}>
            <Contact
              name={contact.name}
              phone={contact.number}
              contactId={contact.id}
            />
          </li>
        ))
      ) : (
        <li className={styles.noContacts}>No contacts found</li>
      )}
    </ul>
  );
};

export default ContactList;
