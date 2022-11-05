import { Section } from '../../components/Section/Section';
import { Form } from '../../components/Form/Form';
import { Contacts } from '../../components/Contact/Contact';
import { ContactsFilter } from '../../components/Filter/Filter';
import { Loader } from '../../components/Loader/Loader';

export const UserPage = () => {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <ContactsFilter />
        <Loader />
        <Contacts />
      </Section>
    </>
  );
};
