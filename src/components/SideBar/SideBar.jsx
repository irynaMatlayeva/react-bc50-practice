import MenuList from 'components/Menu/MenuList';
import { LogoStyled, InnerContainer, UserContainer } from './SideBar.styled';
import { BsPersonCircle } from 'react-icons/bs';

const SideBar = () => {
  return (
    <aside>
      <LogoStyled>logo</LogoStyled>
      <InnerContainer>
        <MenuList />

        <UserContainer>
          <BsPersonCircle color="#FF6B0A" size={24}  />
          Bill Gates
        </UserContainer>
      </InnerContainer>
    </aside>
  );
};


export default SideBar;
