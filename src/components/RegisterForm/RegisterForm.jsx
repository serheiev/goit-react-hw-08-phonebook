import { Input } from 'components/Input/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import Button from '@mui/material/Button';
import { Form } from './RegisterForm.styled';
export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Input
          required
          id="outlined-required"
          label="Name"
          size="small"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <Input
          required
          id="outlined-required"
          label="Email"
          size="small"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        <Input
          required
          id="outlined-required"
          label="Password"
          size="small"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <Button variant="outlined" color="success" type="submit">
        Register
      </Button>
    </Form>
  );
};
