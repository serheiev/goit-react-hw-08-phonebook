import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

import { Navigation } from '../Navigation/Navigation';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';
import { UserAuthMenu } from '../UserAuthMenu/UserAuthMenu';
import { Container } from './AppBar.styled';

export const AppBar = () => {
  const token = useSelector(selectToken);

  return (
    <Container>
      <Navigation />
      {token ? <UserAuthMenu /> : <AuthNavigation />}
    </Container>
  );
};
