import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

export const ButtonCreate = ({ text, type, onDelete }) => {
  return (
    <Button variant="contained" size="small" type={type} onClick={onDelete}>
      {text}
    </Button>
  );
};

ButtonCreate.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
