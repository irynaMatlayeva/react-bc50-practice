import { BsFillPlusCircleFill } from 'react-icons/bs';
import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({
  type = 'button',
  action,
  styles,
  isIcon,
  text,
  ...restProps
}) => {
  return (
    <ButtonStyled
      className={styles}
      onClick={action}
      type={type}
      {...restProps}
    >
      {isIcon && <BsFillPlusCircleFill />}
      {text}
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  action: PropTypes.func,
  styles: PropTypes.string,
  isIcon: PropTypes.bool,
  text: PropTypes.string.isRequired,
  restProps: PropTypes.any,
};
