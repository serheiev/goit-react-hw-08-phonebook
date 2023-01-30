import { Input } from 'components/Input/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import Button from '@mui/material/Button';
import { Form } from './LoginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        {/* <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        /> */}
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
        {/* <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        /> */}
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
      {/* <button>Login</button> */}
      <Button variant="outlined" color="success" type="submit">
        Login
      </Button>
    </Form>
  );
};
