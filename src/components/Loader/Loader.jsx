import { ThreeDots } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';
import style from './Loader.module.css';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className={style.loaderWrapper}>
      <ThreeDots
        height="40"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={isLoading}
      />
    </div>
  );
};
