import { Paper } from 'components';
import { TutorContainerStyled, ColumnStyled } from './TutorItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTutorActions } from 'store/tutors/actions';

const TutorItem = ({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
  id,
}) => {
  const dispatch = useDispatch();

  return (
    <Paper>
      <TutorContainerStyled>
        <ColumnStyled>
          <span>{firstName}</span>
          <span>{lastName}</span>
          <span>{patronymic}</span>
        </ColumnStyled>
        <ColumnStyled>
          <span>{phone}</span>
          <span>{email}</span>
          <span>{city}</span>
        </ColumnStyled>
        <ColumnStyled>
          <p>{options}</p>
        </ColumnStyled>
        <ColumnStyled>
          <button type="button" onClick={() => dispatch(deleteTutorActions(id))}>
            delete
          </button>
        </ColumnStyled>
      </TutorContainerStyled>
    </Paper>
  );
};
TutorItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  patronymic: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  options: PropTypes.string,
};
export default TutorItem;
