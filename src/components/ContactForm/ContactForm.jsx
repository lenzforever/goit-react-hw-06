import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { ErrorMessage } from 'formik';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

import styles from './ContactForm.module.css';

const initialValues = {
  username: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),

  number: Yup.string()
    .matches(/^\d+$/, 'Must be a number')
    .min(7, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { username, number } = values;
    
    const newContact = {
      id: nanoid(),
      name: username,
      number,
    };
    
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.contactForm}>
        <label className={styles.label}>
          <span className={styles.labelName}>Name</span>
          <Field
            name="username"
            type="text"
            placeholder="Enter name"
            className={styles.field}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={styles.error}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.labelName}>Phone</span>
          <Field
            name="number"
            type="tel"
            placeholder="Enter phone"
            className={styles.field}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={styles.error}
          />
        </label>

        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
