import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors } from '../Styled/Colors';
import { ReactComponent as Logo } from '../assets/svg/EnterKey.svg';
import { useRecoilState } from 'recoil';
import { ClickValue, WorkValue, ToggleValue } from '../atom';
import Intro from '../components/Home/Intro';
import { motion } from 'framer-motion';
import { ClickProps } from '../layout/Header';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import BigTitle from '../components/BigTitle';
import { Link } from 'react-router-dom';

const Home = () => {
  const [click, setClick] = useRecoilState(ClickValue);
  const [work, setWork] = useRecoilState(WorkValue);

  const animationHandler = () => {
    setClick(!click);
  };

  useEffect(() => {
    setWork(false);
    setClick(false);
  }, []);

  const [active, setActive] = useRecoilState(ToggleValue);

  const onToggle = () => {
    setActive(!active);
  };

  return (
    <Section>
      {click && (
        <Toggle onClick={() => onToggle()}>
          {active ? (
            <AiOutlineClose className='closeIcon' />
          ) : (
            <AiOutlineMenu className='menuIcon' />
          )}
        </Toggle>
      )}
      {click && <BigTitle size='L' text='About' top={12} right={10} position />}

      <DarkDiv click={+click} />
      <Text click={+click}>Log Into Joy</Text>
      <Center
        click={+click}
        onClick={() => animationHandler()}
        initial={{ scale: 0, translateX: -120, translateY: -120 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1 }}
      >
        <Logo width={+click ? 120 : 200} height={+click ? 120 : 200} />
        <Span click={+click}>Click me</Span>
      </Center>
      {+click ? <Intro /> : null}
      {click && (
        <MoreTextBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Link to='/work'>more</Link>
        </MoreTextBox>
      )}
    </Section>
  );
};

export default Home;

const MoreTextBox = styled(motion.div)`
  width: 100%;
  position: absolute;
  text-align: center;
  bottom: 20px;
  z-index: 100;
  a {
    position: relative;
    font-size: calc(1rem + 1vw);
    font-weight: bold;
    color: #e5e8eb;
  }
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
