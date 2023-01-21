import PropTypes from 'prop-types';
import { Wrap } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <Wrap>
      <h2>{title}</h2>
      {children}
    </Wrap>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
