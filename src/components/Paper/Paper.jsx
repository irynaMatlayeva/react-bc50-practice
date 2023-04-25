import css from './Paper.module.css'

const Paper = ({children, classes}) => <div className={`${css.paper} ${classes}`}>{children}</div>
export default Paper;
