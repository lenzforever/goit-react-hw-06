import { FaUserCircle } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import styles from './Contact.module.css';

const Contact = ({ contactId, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={styles.contactItem}>
      <div className={styles.profile}>
        <FaUserCircle className={styles.icon} />
        <p className={styles.name}>{name}</p>
        <a href={`tel:${phone}`} className={styles.phone}>
          <AiFillPhone className={styles.icon} />
          {phone}
        </a>
      </div>

      <button onClick={handleDelete} className={styles.deleteButton}>
        Remove
      </button>
    </div>
  );
};

export default Contact;
