import PartialItem from './PartialItem';
import { PartialListStyled } from './PartilList.styled';
const PartialList = ({ listData, toggleModal, modalState}) => {
    return (
        <PartialListStyled>{listData.map(item => <PartialItem key={item.id} rel={item.rel} id={item.id} text={item.text}
             toggleModal={toggleModal} 
              modalState={modalState}/>
        )}</PartialListStyled>
    )
}
export default PartialList;