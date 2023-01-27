import styled from 'styled-components';

export const ContItem = styled.li`
  width: 350px;
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
    p {
      margin: 0;
      padding: 3px 0;
      font-size: 16px;
      font-weight: 500;
    }
    span {
      font-size: 18px;
      font-weight: 600;
      color: #797979;
    }
  }
`;
