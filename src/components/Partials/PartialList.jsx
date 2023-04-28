import PartialItem from './PartialItem';
import { PartialListStyled } from './PartilList.styled';
const PartialList = ({ listData, isOpenDropdown}) => {
    return (
        <PartialListStyled>{listData.map(item => <PartialItem key={item.text} text={item.text} isOpenDropdown={isOpenDropdown} />
        )}</PartialListStyled>
    )
}
export default PartialList;