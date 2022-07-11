import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ClickValue, ToggleValue, WorkValue } from '../atom';
import { Link } from 'react-router-dom';
import { Colors } from '../Styled/Colors';
import IconComponent from '../components/nav/IconComponent';
import { motion } from 'framer-motion';
import { MdDoubleArrow } from 'react-icons/md';

export interface Workprops {
  work: boolean | number;
  click: any;
}

export interface ClickProps {
  click: boolean | number;
}

const Header = () => {
  // const toggle = useRecoilValue(ToggleValue);
  // const [active, setActive] = useRecoilState(ToggleValue);
  const click = useRecoilValue(ClickValue);
  const [work, setWork] = useRecoilState(WorkValue);

  // const onToggle = () => {
  //   setActive(!active);
  // };

  const onWork = () => {
    setWork(!work);
  };

  return (
    <Container>
      <Content>
        <Logo click={+click}>
          <Link to='/'>HS</Link>
        </Logo>
        {/* <Toggle onClick={() => onToggle()}>
          {active ? (
            <AiOutlineClose className='closeIcon' />
          ) : (
            <AiOutlineMenu className='menuIcon' />
          )}
        </Toggle> */}
        <Work
          work={+work}
          click={+click}
          onClick={() => onWork()}
          // initial={{
          //   x: -100,
          //   rotate: -90,
          // }}
          // transition={{ type: 'spring', duration: 0.3 }}
          // animate={{
          //   x: -10,
          //   rotate: -90,
          //   transition: { type: 'spring', duration: 0.5 },
          // }}
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
        >
          <Link to='/work'>
            <Text click={+click}>Work</Text>
          </Link>
          <IconArrow click={+click}>
            <MdDoubleArrow className='arrow' />
          </IconArrow>
        </Work>
        <IconComponent />
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100%;
  z-index: 10;
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
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: auto;
  a {
    color: ${(props) => (props.click ? Colors.white : Colors.black)};
  }
`;

const Transform = css<ClickProps>`
  ${(props) =>
    props.click
      ? css`
          transform: rotate(0deg) translate(0%, 0%);
        `
      : css`
          transform: rotate(-90deg) translate(-50%, -50%);
        `}
`;

const Work = styled(motion.div)<Workprops>`
  left: 2rem;
  ${Transform}
  text-decoration: none;
  margin-left: 28px;
  transition: all 1s ease;
  margin-bottom: ${(props) => (props.click ? '200px' : '60px')};
  cursor: pointer;
  font-size: ${(props) => (props.click ? '32px' : '22px')};
  display: ${(props) => (props.work ? 'none' : 'flex')};
  &:hover {
    font-size: 26px;
  }
  /* a {
    color: ${(props) => props.click && Colors.black};
  } */
`;

const Text = styled.div<ClickProps>`
  margin-left: ${(props) => (props.click ? '50px' : '0')};
  color: ${(props) => (props.click ? Colors.white : Colors.black)};
  cursor: pointer;
`;

const animate = keyframes`
   0% {
    
      transform: rotate(180deg) translateX(0);
    }
    40% {
      
      transform: rotate(180deg)  translateX(-5px);
    }
    70% {
      transform:  rotate(180deg) translateX(5px);
    }
   100%{
    transform: rotate(180deg) translateX(0);
    }
`;

const IconArrow = styled.div<ClickProps>`
  position: relative;
  left: 30px;
  display: ${(props) => (props.click ? 'block' : 'none')};
  .arrow {
    margin: -5px;
    width: ${(props) => (props.click ? '50px' : '30px')};
    height: ${(props) => (props.click ? '50px' : '30px')};
    transform: rotate(180deg);
    animation: ${animate} 1.5s linear infinite;
  }
`;

const Toggle = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  .menuIcon,
  .closeIcon {
    transition: 0.3s ease-in-out;
    width: 25px;
    height: 25px;
    fill: ${Colors.black};
  }
`;
