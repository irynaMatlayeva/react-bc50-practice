import {
  ButtonsContainerStyled,
  ActionButtonStyled,
  ActionContainerStyled,
} from './PartilList.styled';
import { ReactComponent as DeleteIcon } from '../../assets/images/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/images/edit.svg';
import { PartialForm, Modal } from 'components';
import {
  deleteCitiesOperation,
  updateCitiesOperation,
} from 'store/cities/citiesOperations';
import {
  deleteDepartmentOperation,
  updateDepartmentOperation,
} from '../../store/departments/departmentsOperations';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Dropdown = ({ toggleModal, modalState, rel, id, text, open }) => {
  const dispatch = useDispatch();
  const deleteItem = (rel, idItem) => {
    return rel === 'cities'
      ? dispatch(deleteCitiesOperation(idItem))
      : dispatch(deleteDepartmentOperation(idItem));
  };
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
              onSubmit={
                rel === 'cities'
                  ? updateCitiesOperation
                  : updateDepartmentOperation
              }
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
        <Dialog
          open={open}
          onClose={toggleModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {`Delete ${rel === 'cities' ? 'city' : 'department'} `}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {`All material and information about ${
                rel === 'cities' ? 'city' : 'department'
              } will be discarded`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleModal}>No</Button>
            <Button onClick={() => deleteItem(rel, id)}>Yes</Button>
          </DialogActions>
        </Dialog>

        // <Modal
        //   toggleModal={toggleModal}
        //   title={`Delete ${rel === 'cities' ? 'city' : 'department'} `}
        //   children={`All material and information about ${
        //     rel === 'cities' ? 'city' : 'department'
        //   } will be discarded`}
        //   actions={
        //     <ActionContainerStyled>
        //       <Button text="No" action={toggleModal} />
        //       <Button
        //         text="Yes"
        //         action={() => {
        //           rel === 'cities'
        //             ? dispatch(deleteCitiesOperation(id))
        //             : dispatch(deleteDepartmentOperation(id));
        //         }}
        //       />
        //     </ActionContainerStyled>
        //   }
        // />
      )}
    </ButtonsContainerStyled>
  );
};
export default Dropdown;
