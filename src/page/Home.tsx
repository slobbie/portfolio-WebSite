import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors } from '../Styled/Colors';
import { ReactComponent as Logo } from '../assets/svg/EnterKey.svg';
import { useRecoilState } from 'recoil';
import { ClickValue, WorkValue } from '../atom';
import Intro from '../components/Home/Intro';
import { motion } from 'framer-motion';
import { ClickProps, Workprops } from '../layout/Header';

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

  return (
    <Section>
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
    </Section>
  );
};

export default Home;

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
  background-color: ${Colors.black};
  transition: height 0.5s ease, width 1s ease 0.5s;
`;
