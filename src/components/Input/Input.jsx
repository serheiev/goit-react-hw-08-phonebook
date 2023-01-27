import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

export const Input = ({
  id,
  label,
  size,
  type,
  title,
  onChange,
  name,
  pattern,
  value,
}) => {
  return (
    <TextField
      id={id}
      label={label}
      size={size}
      onChange={onChange}
      value={value}
      type={type}
      name={name}
      required
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
