import css from './Paper.module.css'
import PropTypes from 'prop-types';

const Paper = ({ children, classes }) => <div className={`${css.paper} ${classes}`}>{children}</div>

Paper.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.string,
}
export default Paper;
