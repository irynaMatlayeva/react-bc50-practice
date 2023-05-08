import { PartialItemStyled, ButtonStyled, Dots } from './PartilList.styled';
import Dropdown from './Dropdown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PartialItem = ({
  text,
  handleDeleteCard,
  id,
  rel,
  modalState,
  toggleModal,
  onEditCard,
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const navigate = useNavigate();

  const pathTo = () => {
    if (rel !== 'departments') return;

    navigate(`/departments/${id}`);
  };

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <PartialItemStyled>
      <span onClick={pathTo}>{text}</span>
      <ButtonStyled onClick={toggleDropdown}>
        <Dots />
      </ButtonStyled>
      {isOpenDropdown && (
        <Dropdown
          deleteItem={() => handleDeleteCard(id, rel)}
          modalState={modalState}
          toggleModal={toggleModal}
          rel={rel}
          onEditCard={onEditCard}
          id={id}
          text={text}
        />
      )}
    </PartialItemStyled>
  );
};
export default PartialItem;
