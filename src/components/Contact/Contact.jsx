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
    <>
      <ul>
        {contacts
          .sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
          })
          .map(contact => (
            <ContactsItem
              name={contact.name}
              number={contact.number}
              id={contact.id}
              key={contact.id}
              onDelete={() => dispatch(deleteContact(contact.id))}
            />
          ))}
      </ul>
    </>
  );
};
