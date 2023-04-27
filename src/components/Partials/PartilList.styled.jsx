import s from "styled-components";
import { BsThreeDotsVertical } from 'react-icons/bs';
 export const PartialListStyled = s.ul `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`
export const PartialItemStyled = s.li `
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 5px;
`
export const ButtonStyled = s.button `
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #fff;
    heigth: 20px;
    cursor: pointer;
`
export const Dots = s(BsThreeDotsVertical) `
    fill: red;
`