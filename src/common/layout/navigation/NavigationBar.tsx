import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isShowMain } from '@atom/atom';
import { Link } from 'react-router-dom';
import IconComponent from '@src/common/layout/navigation/IconComponent';

export interface ClickProps {
  click: boolean | number;
}

/** NavigationBar 컴포넌트  */
const NavigationBar = () => {
  const showIsMain = useRecoilValue(isShowMain);

  return (
    <Container>
      <Content>
        <Logo click={showIsMain}>
          <Link to='/'>HS</Link>
        </Logo>
        <IconComponent />
      </Content>
    </Container>
  );
};

export default NavigationBar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100%;
  z-index: 1000;
  /* height: 5rem; */
`;

const Content = styled.div`
  max-width: 1120px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  /* padding: 0 2rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.div<ClickProps>`
  font-size: 2rem;
  margin-top: 15px;
  margin-bottom: auto;
  font-weight: 700;
  a {
    color: ${(props) =>
      props.click ? props.theme.gray000 : props.theme.black};
  }
  img {
    width: 45px;
    height: 45px;
  }
`;
