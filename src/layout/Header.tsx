import React, { Dispatch, SetStateAction } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ClickValue, ToggleValue } from '../atom';
import { Link } from 'react-router-dom';
import { Colors } from '../Styled/Colors';
import IconComponent from '../components/nav/IconComponent';
import { motion } from 'framer-motion';
import { MdDoubleArrow } from 'react-icons/md';

export interface props {
  onToggle: () => void;
  active?: boolean;
  setActive?: Dispatch<SetStateAction<boolean>>;
}

const Header = () => {
  // const toggle = useRecoilValue(ToggleValue);
  const [active, setActive] = useRecoilState(ToggleValue);
  const click = useRecoilValue(ClickValue);

  const onToggle = () => {
    setActive(!active);
  };
  return (
    <Container>
      <Content>
        <Logo click={click}>
          <Link to='/'>HS</Link>
        </Logo>
        {/* <Toggle onClick={() => onToggle()}>
          {active ? (
            <AiOutlineClose className='closeIcon' />
          ) : (
            <AiOutlineMenu className='menuIcon' />
          )}
        </Toggle> */}
        <Work click={click}>
          <Link to='/work'>
            <Text click={click}>Work</Text>
          </Link>
          <IconArrow click={click}>
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

const Logo = styled.div<{ click: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: auto;
  a {
    color: ${(props) => (props.click ? Colors.white : Colors.black)};
  }
`;

const Transform = css<{ click: boolean }>`
  ${(props) =>
    props.click
      ? css`
          transform: rotate(0deg) translate(0%, 0%);
        `
      : css`
          transform: rotate(-90deg) translate(-50%, -50%);
        `}
`;

const Work = styled(motion.div)<{ click: boolean }>`
  color: ${(props) => (props.click ? Colors.white : Colors.black)};
  left: 2rem;
  ${Transform}
  /* transform: rotate(-90deg) translate(-50%, -50%); */
  text-decoration: none;
  margin-left: 28px;
  transition: all 1s ease;
  margin-bottom: ${(props) => (props.click ? '200px' : '60px')};
  cursor: pointer;
  font-size: ${(props) => (props.click ? '32px' : '22px')};
  display: flex;
  &:hover {
    font-size: 26px;
  }
`;

const Text = styled.div<{ click: boolean }>`
  margin-left: ${(props) => (props.click ? '50px' : '0')}; ;
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

const IconArrow = styled.div<{ click: boolean }>`
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
