import {
  ButtonsContainerStyled,
  ActionButtonStyled,
  ActionContainerStyled,
} from './PartilList.styled';
import { ReactComponent as DeleteIcon } from '../../assets/images/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/images/edit.svg';
import { PartialForm, Button, Modal } from 'components';
import {
  deleteCitiesOperation,
  updateCitiesOperation,
} from 'store/cities/citiesOperations';
import { useDispatch } from 'react-redux';

const Dropdown = ({ toggleModal, modalState, rel, id, text }) => {
  const dispatch = useDispatch();

  return (
    <ButtonsContainerStyled>
      <ActionButtonStyled onClick={() => toggleModal('edit')}>
        <EditIcon />
        Edit
      </ActionButtonStyled>
      {modalState === 'edit' && (
        <Modal
          toggleModal={toggleModal}
          title="Edit information about a city"
          children={
            <PartialForm
              title={rel === 'cities' ? 'city' : 'department'}
              onSubmit={updateCitiesOperation}
              rel={rel}
              id={id}
              text={text}
              toggleModal={toggleModal}
            />
          }
        />
      )}
      <ActionButtonStyled onClick={() => toggleModal('delete')}>
        <DeleteIcon />
        Delete
      </ActionButtonStyled>
      {modalState === 'delete' && (
        <Modal
          toggleModal={toggleModal}
          title={`Delete ${rel === 'cities' ? 'city' : 'department'} `}
          children={`All material and information about ${
            rel === 'cities' ? 'city' : 'department'
          } will be discarded`}
          actions={
            <ActionContainerStyled>
              <Button text="No" action={toggleModal} />
              <Button
                text="Yes"
                action={() => {
                  rel === 'cities'
                    ? dispatch(deleteCitiesOperation(id))
                    : console.log('departmentDel');
                }}
              />
            </ActionContainerStyled>
          }
        />
      )}
    </ButtonsContainerStyled>
  );
};
export default Dropdown;
