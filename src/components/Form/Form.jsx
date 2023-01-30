import { ButtonCreate } from 'components/Button/Button';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectedContacts } from 'redux/contacts/contacts-selectors';
import { CreateForm } from './Form.styled';
import { Input } from 'components/Input/Input';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectedContacts);
  const dispatch = useDispatch();

  const inputChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(c => c.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    if (number.toString() === true) {
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <CreateForm onSubmit={handleSubmit}>
      <label>
        <Input
          required
          id="outlined-required"
          label="Name"
          size="small"
          name="name"
          value={name}
          type="text"
          onChange={inputChange}
        />
      </label>

      <label>
        <Input
          required
          id="outlined-required"
          label="Number"
          size="small"
          name="number"
          value={number}
          type="number"
          onChange={inputChange}
        />
      </label>
      <ButtonCreate type="submit" text="Create contact" />
    </CreateForm>
  );
};
