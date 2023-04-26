import { Paper } from "components";
import universityIcon from '../../assets/images/mock-university.svg';
import editIcon from '../../assets/images/edit.svg';
import deleteIcon from '../../assets/images/delete.svg';
import s from './Card.module.css';
import { ImageStyled, TextStyled, ControlsStyled, ButtonStyled } from './Card.styled';
import PropTypes from 'prop-types';

const Card = ({ onEdit, onDelete, name }) => {
    return (
        <Paper classes={s.container}>
            <ImageStyled src={universityIcon} alt="university" />
            <TextStyled>University</TextStyled>
            <h3>{name}</h3>
            <ControlsStyled>
                <ButtonStyled onClick={onEdit} type="button">
                    <img src={editIcon} alt="edit" />
                </ButtonStyled>
                <ButtonStyled onClick={onDelete} type="button">
                    <img src={deleteIcon} alt="delete" />
                </ButtonStyled>
            </ControlsStyled>
        </Paper>
    )
}
Card.propTypes = {
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default Card;