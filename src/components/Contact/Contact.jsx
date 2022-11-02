import { ContactsItem } from 'components/ContactItem/ContactsItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';

import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';

export const Contacts = () => {
  const contacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(contact => (
        <ContactsItem
          name={contact.name}
          number={contact.phone}
          id={contact.id}
          key={contact.id}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};
