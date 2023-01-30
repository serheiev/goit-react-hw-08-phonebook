import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavList = styled.ul``;
export const AuthNavItem = styled.li`
  list-style: none;
`;

export const AuthLink = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  &.active {
    color: tomato;
  }
`;
