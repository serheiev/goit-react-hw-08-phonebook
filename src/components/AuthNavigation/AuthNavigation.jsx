// import { Link } from 'react-router-dom';
import { AuthNavItem, AuthNavList, AuthLink } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <AuthNavList>
      <AuthNavItem>
        <AuthLink to="/register">Registaration</AuthLink>
      </AuthNavItem>
      <AuthNavItem>
        <AuthLink to="/login">Login</AuthLink>
      </AuthNavItem>
    </AuthNavList>
  );
};
