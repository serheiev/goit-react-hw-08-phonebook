import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';
import Button from '@mui/material/Button';
import { AuthWrap, AuthPar, AuthSpan } from './UserAuthMenu.styled';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <AuthWrap>
      <AuthPar>
        Welcome <AuthSpan>{` ${name}`}</AuthSpan>
      </AuthPar>
      <Button
        variant="outlined"
        color="success"
        size="small"
        onClick={() => dispatch(logout())}
      >
        Log Out
      </Button>
    </AuthWrap>
  );
};
