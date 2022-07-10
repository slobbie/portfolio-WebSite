import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors } from '../Styled/Colors';
import { ReactComponent as Logo } from '../assets/svg/EnterKey.svg';
import { useRecoilState } from 'recoil';
import { ClickValue } from '../atom';
import Intro from '../components/Home/Intro';
import { motion } from 'framer-motion';

const Home = () => {
  const [click, setClick] = useRecoilState(ClickValue);

  const animationHandler = () => {
    setClick(!click);
  };
  return (
    <Section>
      <DarkDiv click={click} />
      <Text click={click}>Log Into Joy</Text>
      <Center click={click} onClick={() => animationHandler()}>
        <Logo width={click ? 120 : 200} height={click ? 120 : 200} />
        <Span click={click}>Click me</Span>
      </Center>
      {click ? <Intro /> : null}
    </Section>
  );
};

export default Home;

const Section = styled.section`
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

const Text = styled.h2<{ click: boolean }>`
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

const Center = styled.button<{ click: boolean }>`
  position: absolute;
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '92%' : '50%')};
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

  /* &:hover {
    background-color: red;
  } */
`;

const Span = styled.span<{ click: boolean }>`
  display: ${(props) => (props.click ? 'none' : 'inline-block')};
  padding-top: 1rem;
`;

const DarkDiv = styled.div<{ click: boolean }>`
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
