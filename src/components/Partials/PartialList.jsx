import PartialItem from './PartialItem';
import { PartialListStyled } from './PartilList.styled';
const PartialList = ({ listData, handleDeleteCard}) => {
    return (
        <PartialListStyled>{listData.map(item => <PartialItem key={item.text} rel={item.rel} id={item.text} text={item.text}
             handleDeleteCard={handleDeleteCard}/>
        )}</PartialListStyled>
    )
}
export default PartialList;