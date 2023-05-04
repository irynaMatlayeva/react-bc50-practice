import { ButtonsContainerStyled, ActionButtonStyled, ActionContainerStyled } from './PartilList.styled';
import { ReactComponent as DeleteIcon } from '../../assets/images/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/images/edit.svg';
import { PartialForm, Button, Modal } from 'components';
const Dropdown = ({ deleteItem, toggleModal, modalState, rel, onEditCard, id }) => {
    console.log(modalState)
    return (
            <ButtonsContainerStyled >
                <ActionButtonStyled onClick={() => toggleModal('edit')}>
                <EditIcon />Edit</ActionButtonStyled>
            {
                modalState === 'edit' && <Modal toggleModal={toggleModal} title='Edit information about a city'
                    children={<PartialForm title={rel === 'cities' ? 'city' : 'department'} onSubmit={onEditCard} rel={rel} id={id} />} />
                }
                <ActionButtonStyled onClick={() => toggleModal('delete')} >
                <DeleteIcon />Delete</ActionButtonStyled>
            {
                modalState === 'delete' && <Modal toggleModal={toggleModal} title={`Delete ${rel === 'cities' ? 'city' : 'department'} `}
                    children={`All material and information about ${rel === 'cities' ? 'city' : 'department'} will be discarded`}
                    actions={<ActionContainerStyled>
                        <Button text='No' action={toggleModal}/>
                        <Button text='Yes' action={deleteItem}/>
                    </ActionContainerStyled>} />
            }
            </ButtonsContainerStyled>
    )
} 
export default Dropdown;