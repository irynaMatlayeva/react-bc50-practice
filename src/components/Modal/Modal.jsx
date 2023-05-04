import { useEffect } from 'react';
import { OverlayStyled, ModalContentStyled } from './Modal.styled';
import { createPortal } from 'react-dom';

const modal = document.getElementById('modal');

const Modal = ({ title, children, actions, toggleModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') toggleModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) toggleModal();
  };
  return createPortal(
    <OverlayStyled onClick={handleBackdropClick}>
      <ModalContentStyled>
        <h1>{title}</h1>
        <div>{children}</div>
        {actions && <div>{actions}</div>}
      </ModalContentStyled>
    </OverlayStyled>,
    modal
  );
};
export default Modal;
