import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ItemStyled = styled.li`
  padding: 10px 0;
`;
export const LinkStyled = styled(NavLink)`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #010101;
  :hover {
    color: #ff6b0a;
  }
`;
