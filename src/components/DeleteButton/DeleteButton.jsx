import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteButton = ({ text, type, onDelete }) => {
  return (
    <IconButton aria-label="delete" size="small" type={type} onClick={onDelete}>
      <DeleteIcon fontSize="inherit" />
      {text}
    </IconButton>
  );
};

DeleteButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
