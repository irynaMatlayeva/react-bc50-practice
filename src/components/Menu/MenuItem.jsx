import { ItemStyled, LinkStyled } from './MenuItem.styled';
import PropTypes from 'prop-types';

const MenuItem = ({ title, link, image }) => {
  return (
    <ItemStyled>
      <LinkStyled to={link}>
        {image} {title}
      </LinkStyled>
    </ItemStyled>
  );
};
MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};
export default MenuItem;
