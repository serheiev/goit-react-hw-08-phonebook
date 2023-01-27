import { Section } from '../../components/Section/Section';
import { Form } from '../../components/Form/Form';
import { Contacts } from '../../components/Contact/Contact';
import { ContactsFilter } from '../../components/Filter/Filter';
import { Loader } from '../../components/Loader/Loader';
import { useState } from 'react';
import { Btn } from './UserPage.styled';

export const UserPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* <Section title="Create contact">
        <Btn variant="contained" size="small" onClick={handleClick}>
          add contact
        </Btn>
        {isVisible && <Form />}
         <Form />
      </Section> */}

      <Section title="Contacts">
        <Btn variant="contained" size="small" onClick={handleClick}>
          {isVisible ? 'close' : 'add contact'}
        </Btn>
        {isVisible && <Form />}
        <Loader />
        <ContactsFilter />
        <Contacts />
      </Section>
    </>
  );
};
