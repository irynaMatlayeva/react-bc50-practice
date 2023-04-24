import MenuList from 'components/Menu/MenuList';
import userImage from '../../assets/images/mock-user-ava.svg'
const SideBar = () => {
    return (
        <aside>
            <div>logo</div>
           <MenuList/>
            <div><img src={userImage} alt='user' />Bill Gates</div>
        </aside>
    );
}
export default SideBar;