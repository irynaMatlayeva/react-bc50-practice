import { ButtonsContainerStyled, ActionButtonStyled } from './PartilList.styled';
import { ReactComponent as DeleteIcon } from '../../assets/images/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/images/edit.svg';
const Dropdown = ({deleteItem}) => {
    return (
            <ButtonsContainerStyled >
                <ActionButtonStyled>
                    <EditIcon/>Edit</ActionButtonStyled>
                <ActionButtonStyled onClick={deleteItem} >
                    <DeleteIcon />Delete</ActionButtonStyled>
            </ButtonsContainerStyled>
    )
} 
export default Dropdown;