import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled, { keyframes } from 'styled-components';
import { ToggleValue } from '../atom';
import Menu from '../components/nav/Menu';
import Header from './Header';

const Mainlayout = () => {
  const [active, setActive] = useRecoilState(ToggleValue);

  const onToggle = () => {
    setActive(!active);
  };

  return (
    <Container className={active ? 'active' : 'noneActive'}>
      <Header onToggle={onToggle} />
      <MainContainer className='main-container'>
        <Main className='main'>
          <Content>
            <OverLay>
              <Outlet />
            </OverLay>
          </Content>
        </Main>
      </MainContainer>
      <Menu />
    </Container>
  );
};

export default Mainlayout;

const mainAnimation = keyframes`
   from {
    transform: rotate(0);
   }
   to {
    transform: perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5);
   }
`;
const noneAnimation = keyframes`
   from {
    transform: perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5);

   }
   to {
    transform: rotate(0);
   }
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #161616;
  overflow-x: hidden;
  transform-style: preserve-3d;
  transform: rotate(0);
  &.active .main {
    animation: ${mainAnimation} 0.5s ease-in-out;
    cursor: pointer;
    transform: perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5);
  }
  &.noneActive .main {
    animation: ${noneAnimation} 0.5s ease-in-out;
    cursor: pointer;
    transform: rotate(0);
  }

  &.active .main-container::before {
    transform: perspective(1300px) rotateY(20deg) translateZ(215px) scale(0.5);
  }
  &.active .main-container::after {
    transform: perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5);
  }
`;

const MainContainer = styled.div`
  &.main-container {
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform-style: preserve-3d;
      transform-origin: left;
      transition: 0.5s ease-in-out;
      background-color: #fff;
    }
    &::before {
      z-index: -1;
      opacity: 0.15;
    }
    &::after {
      z-index: -2;
      opacity: 0.1;
    }
  }
`;
const Main = styled.div`
  position: relative;
  z-index: 5;
  overflow: hidden;
  transform-origin: left;
  transform-style: preserve-3d;
  transition: 0.5s ease-in-out;
`;

const Content = styled.div`
  min-height: 100vh;
  position: relative;
`;

const OverLay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(43, 51, 59, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
