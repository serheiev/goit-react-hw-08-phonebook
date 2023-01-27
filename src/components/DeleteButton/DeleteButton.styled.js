import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const Btn = styled(Button)`
  font-size: 16;
  width: 120px;
  padding: 2px 4px;
  border: 1px solid;
  line-height: 1.5;
  background-color: #2d14cc;
  border-color: #9164cc;
  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
    box-shadow: none;
  }
  &:active {
    background-color: #0062cc;
    border-color: #005cbf;
  }
  &:focus {
    background-color: #0062cc;
    border-color: #005cbf;
  }
`;
