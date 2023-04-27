import { BsThreeDotsVertical } from 'react-icons/bs';
import { PartialItemStyled, ButtonStyled, Dots } from './PartilList.styled';
const PartialItem = ({text, isOpenDropdown}) => {
    return (
        <PartialItemStyled>
            <span>{text}</span>
            <ButtonStyled onClick={isOpenDropdown}><Dots /></ButtonStyled>
        </PartialItemStyled>
    )
}
export default PartialItem;