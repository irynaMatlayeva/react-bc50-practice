import {ItemStyled, LinkStyled} from './MenuItem.styled';

const MenuItem = ({title, link, image}) => {
    return (
        <ItemStyled><LinkStyled href={link}>
                    <img src={image} alt={title} />{title}</LinkStyled></ItemStyled>
    )
}
export default MenuItem;