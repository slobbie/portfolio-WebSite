import styled, { keyframes } from 'styled-components';
import { Colors } from '@common/styles/theme/Colors';
import { ReactComponent as Logo } from '@assets/svg/EnterKey.svg';
import { useRecoilState } from 'recoil';
import { isShowMain, isTopMenu } from '@atom/atom';
import About from '@feature/home/components/About';
import { motion } from 'framer-motion';
import { ClickProps } from '@src/common/layout/navigation/NavigationBar';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import BigTitle from '@common/components/title/BigTitle';
import { useNavigate } from 'react-router-dom';
import routes from '@src/common/constants/path.constants';

/**
 * 홈 메인 페이지
 * @returns JSX.Element
 */
const HomePage = () => {
  const path = routes.path;
  const navigate = useNavigate();
  /** 메인 페이지 노출 여부 상태 */
  const [isShowMainToggle, setIsShowMainToggle] = useRecoilState(isShowMain);
  /** 상단 햄버거 메뉴 노출 상태 */
  const [isShowTopMenu, setIsShowTopMenu] = useRecoilState(isTopMenu);

  /** 메인페이지 노출 핸들러  */
  const showMainPageHandler = () => {
    setIsShowMainToggle(!isShowMainToggle);
  };

  /** 상단 햄버거 메뉴 토글 이벤트  */
  const showTopMenuToggle = () => {
    setIsShowTopMenu(!isShowTopMenu);
  };

  /** work 페이지 이동 */
  const moveWorkPageHandler = (pPath: string) => {
    setIsShowMainToggle(false);
    navigate(pPath);
  };

  return (
    <Section>
      {isShowMainToggle && (
        <Toggle onClick={showTopMenuToggle}>
          {isShowTopMenu ? (
            <AiOutlineClose className='closeIcon' />
          ) : (
            <AiOutlineMenu className='menuIcon' />
          )}
        </Toggle>
      )}
      {isShowMainToggle && (
        <BigTitle size='L' text='About' top={12} right={10} position />
      )}

      <DarkDiv click={isShowMainToggle} />
      <Text click={isShowMainToggle}>Log Into Joy</Text>
      <Center
        click={isShowMainToggle}
        onClick={showMainPageHandler}
        initial={{ scale: 0, translateX: -120, translateY: -120 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1 }}
      >
        <Logo
          width={isShowMainToggle ? 120 : 200}
          height={isShowMainToggle ? 120 : 200}
        />
        <Span click={isShowMainToggle}>Click me</Span>
      </Center>
      {isShowMainToggle ? <About /> : null}
      {isShowMainToggle && (
        <MoreTextBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          onClick={() => moveWorkPageHandler(path.work)}
        >
          More
        </MoreTextBox>
      )}
    </Section>
  );
};

export default HomePage;

const MoreTextBox = styled(motion.div)`
  width: 100%;
  position: absolute;
  text-align: center;
  bottom: 20px;
  z-index: 100;
  position: absolute;
  font-size: calc(1rem + 1vw);
  font-weight: bold;
  /* color: #e5e8eb; */
  color: #bec1c4;
`;

const Section = styled(motion.section)`
  width: 100%;
  height: 100vh;
  background: ${Colors.white};
  transition: all 1s ease;
`;

const TextAni = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.3;
  }
  80%{
    opacity: 0.8;
  }
  100%{
    opacity: 1;
  }
`;

const Text = styled(motion.h2)<ClickProps>`
  color: ${Colors.black};
  position: absolute;
  display: ${(props) => (props.click ? 'none' : 'block')};
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: 400;
  transition: all 1s ease;
  font-family: 'Poor Story';
  animation: ${TextAni} 0.5s;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Center = styled(motion.button)<ClickProps>`
  position: absolute;
  top: ${(props) => (props.click ? '95%' : '50%')};
  left: ${(props) => (props.click ? '95%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  &:active {
    position: absolute;
    top: 83%;
    border: none;
  }
`;

const Span = styled.span<ClickProps>`
  display: ${(props) => (props.click ? 'none' : 'inline-block')};
  font-size: 18px;
  padding-top: 1rem;
`;

const DarkDiv = styled.div<ClickProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? '50%' : '0%')};
  height: ${(props) => (props.click ? '100%' : '0%')};
  z-index: 10;
  background-color: #1e1e1e;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Toggle = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
  margin-right: 25px;
  z-index: 1000;
  .menuIcon,
  .closeIcon {
    transition: 0.3s ease-in-out;
    width: 25px;
    height: 25px;
    fill: ${Colors.black};
  }
`;
