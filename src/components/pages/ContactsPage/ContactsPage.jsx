import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selector';
import { useEffect } from 'react';
import css from '../ContactsPage/ContactsPage.module.css';

import { fetchContacts } from 'redux/contacts/contacts-operations';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Section from 'components/Section/Section';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // console.log(contacts);
  const isContacts = Boolean(contacts.length);
  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isContacts && <Filter />}
        {isContacts && <ContactList />}

        {!isContacts && (
          <p className={css.text}>
            Your phonebook is empty. Please add contact.
          </p>
        )}
      </Section>
    </div>
  );
};
export default ContactsPage;
