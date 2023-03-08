import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/filter/filter-selector';

import css from '../ContactList/ContactList.module.css';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {contacts.length === 0 && (
        <p className={css.text}>There is no such contact</p>
      )}
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    </>
  );
};
export default ContactList;
