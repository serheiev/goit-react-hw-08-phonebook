import { Section } from 'components/Section/Section';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

export const HomePage = () => {
  const token = useSelector(selectToken);
  return (
    <Section title="">
      {token ? (
        <h1>Welcome to Contacts App</h1>
      ) : (
        <>
          <h1>Welcome to Contacts App</h1> <p>Please register or login</p>
        </>
      )}
    </Section>
  );
};
