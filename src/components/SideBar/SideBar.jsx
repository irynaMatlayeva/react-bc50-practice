import MenuList from 'components/Menu/MenuList';
import userImage from '../../assets/images/mock-user-ava.svg';
import { LogoStyled, InnerContainer, UserContainer } from './SideBar.styled';

const SideBar = () => {
  return (
    <aside>
      <LogoStyled>logo</LogoStyled>
      <InnerContainer>
        <MenuList />

        <UserContainer>
          <img src={userImage} alt="user" />
          Bill Gates
        </UserContainer>
      </InnerContainer>
    </aside>
  );
};
export default SideBar;
