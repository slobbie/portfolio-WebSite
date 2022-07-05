import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../components/Menu';
import Header from './Header';

const Mainlayout = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Container>
      <Header />
      <MainContainer>
        <Main>
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

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #161616;
  overflow-x: hidden;
  transform-style: preserve-3d;
`;

const MainContainer = styled.div``;

const Main = styled.div``;

const Content = styled.div``;

const OverLay = styled.div``;
