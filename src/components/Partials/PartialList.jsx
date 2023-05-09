import PartialItem from './PartialItem';
import { PartialListStyled } from './PartilList.styled';
const PartialList = ({ listData, handleDeleteCard, toggleModal, modalState, onEditCard}) => {
    return (
        <PartialListStyled>{listData.map(item => <PartialItem key={item.id} rel={item.rel} id={item.id} text={item.text}
             handleDeleteCard={handleDeleteCard}  toggleModal={toggleModal} onEditCard={onEditCard}
              modalState={modalState}/>
        )}</PartialListStyled>
    )
}
export default PartialList;