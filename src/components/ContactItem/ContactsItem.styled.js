import styled from 'styled-components';

export const ContItem = styled.li`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
export const NameWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
