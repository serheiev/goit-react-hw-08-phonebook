import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filter-slice';
import TextField from '@mui/material/TextField';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const handleInput = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  return (
    <TextField
      id="standard-search"
      variant="standard"
      label="Search by name"
      size="small"
      placeholder=""
      type="text"
      onChange={handleInput}
      title=""
      name="search"
      pattern=""
    />
  );
};
