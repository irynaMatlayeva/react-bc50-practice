import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  background: #ff6b0a;
  border: none;
  color: white;
  text-transform: uppercase;
  &:hover {
    background-color: #c05209;
  }
`;
