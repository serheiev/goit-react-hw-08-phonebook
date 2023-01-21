import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import { ContItem, NameWrap } from './ContactsItem.styled';

function stringToColor(string) {
  let color = '#' + Math.random().toString(16).substring(2, 8).toUpperCase();
  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  };
}
export const ContactsItem = ({ name, number, onDelete, id }) => {
  return (
    <ContItem key={id}>
      <NameWrap>
        <Avatar {...stringAvatar(`${name}`)} />
        <div>
          <span>{name}</span>
          <span>{number}</span>
        </div>
      </NameWrap>
      <Button type="button" text="Delete" onDelete={onDelete} />
    </ContItem>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
