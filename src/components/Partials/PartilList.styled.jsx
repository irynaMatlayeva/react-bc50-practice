import s from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';
export const PartialListStyled = s.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 25px;
`;
export const PartialItemStyled = s.li`
    display: flex;
    position: relative;
    justify-content: space-between;
    background-color: #fff;
    margin-bottom: 10px;
    padding: 12px 24px;
`;
export const ButtonStyled = s.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #fff;
    heigth: 20px;
    cursor: pointer;
`;
export const Dots = s(BsThreeDotsVertical)`
    fill: red;
`;
export const ButtonsContainerStyled = s.div`
  z-index: 3;
  position: absolute;
  bottom: -105px;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;
export const ActionButtonStyled = s.button`
    padding: 10px;
    display: flex;
    align-items: center;
  border: none;
  background-color: white;
  padding: 12px 31px;
  svg {
    margin-right: 20px;
    width: 19px;
    heigth: 19px;
  }
`;
export const ActionContainerStyled = s.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;

`;
