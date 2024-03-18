import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { isTopMenu } from '@atom/atom';
import routes from '@src/common/constants/path.constants';

/**
 *  3D 레이아웃 메뉴 레이아웃 컴포넌트
 * @returns JSX.Element
 */
const LayoutContainerMenu = () => {
  const navigate = useNavigate();
  const path = routes.path;

  /** 상단 햄버거 메뉴 노출 상태 */
  const [isShowTopMenu, setIsShowTopMenu] = useRecoilState(isTopMenu);

  /** router handler */
  const onClickRoute = (pPath: string) => {
    setIsShowTopMenu(false);
    navigate(pPath);
  };

  return (
    <Container $isShowTopMenu={isShowTopMenu}>
      <Li onClick={() => onClickRoute(path.home)}>Home</Li>
      <Li onClick={() => onClickRoute(path.work)}>Work</Li>
      <Li onClick={() => onClickRoute(path.contact)}>Contact</Li>
    </Container>
  );
};

export default LayoutContainerMenu;

const Container = styled.div<{ $isShowTopMenu: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 25%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  opacity: ${(props) => (props.$isShowTopMenu ? 1 : 0)};
  visibility: ${(props) => (props.$isShowTopMenu ? 'visible' : 'hidden')};
  transform: ${(props) =>
    props.$isShowTopMenu ? 'translateX(0)' : 'translateX(100px)'};
  transition: 0.5s ease-in-out;
  @media screen and (max-width: 768px) {
    bottom: 0;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
  }
`;

const Li = styled.div`
  font-size: 1.5rem;
  position: relative;
  transition: 0.3s ease-in-out;
  margin-top: 1rem;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 5px;
    width: 0;
    background-color: #fff;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    padding-left: 24px;
    color: yellow;
  }
  &:hover::before {
    width: 15px;
  }
  @media screen and (max-width: 768px) {
    margin: 10px;
  }
`;
