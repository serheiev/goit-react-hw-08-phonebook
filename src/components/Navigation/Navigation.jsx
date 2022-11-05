import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Link, NavMenuList, NavMenuItem } from './Navigation.styled';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <NavMenuList>
        <NavMenuItem>
          <Link to="/" end>
            Home
          </Link>
        </NavMenuItem>
        {token && (
          <NavMenuItem>
            <Link to="/contacts">Contacts</Link>
          </NavMenuItem>
        )}
      </NavMenuList>
    </nav>
  );
};
