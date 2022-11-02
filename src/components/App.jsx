import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contact/Contact';
import { ContactsFilter } from './Filter/Filter';
import { Loader } from './Loader/Loader';

export const App = () => {
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
