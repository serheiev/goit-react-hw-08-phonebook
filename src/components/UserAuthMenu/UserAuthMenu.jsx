import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';
import s from './UserAuthMenu.module.css';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <div className={s.authWrap}>
      <p className={s.authPar}>{`Welcome ${name}!`}</p>
      <button
        className={s.authBtn}
        variant="outlined"
        onClick={() => dispatch(logout())}
      >
        Log Out
      </button>
    </div>
  );
};
