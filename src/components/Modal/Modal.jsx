import { Component } from 'react';
import { OverlayStyled, ModalContentStyled } from './Modal.styled'
import { createPortal } from 'react-dom';

const modal = document.getElementById('modal');
class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = e => {
        if (e.code === 'Escape') this.props.toggleModal();
    }
    handleBackdropClick = e => {
        if (e.currentTarget === e.target) this.props.toggleModal()
    }
    render() {
            const { title, children, actions } = this.props;
        return createPortal(
        <OverlayStyled onClick={this.handleBackdropClick}>
            <ModalContentStyled>
                <h1>{title}</h1>
                <div>
                    {children}
                </div>
                {actions && <div>
                    {actions}
                </div>}
            </ModalContentStyled>
        </OverlayStyled>, modal
    )
    }


}
export default Modal;