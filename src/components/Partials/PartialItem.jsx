import { PartialItemStyled, ButtonStyled, Dots } from './PartilList.styled';
import Dropdown from './Dropdown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PartialItem = ({ text, id, rel, modalState, toggleModal }) => {
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
          modalState={modalState}
          toggleModal={toggleModal}
          open={isOpenDropdown}
          rel={rel}
          id={id}
          text={text}
        />
      )}
    </PartialItemStyled>
  );
};
export default PartialItem;
