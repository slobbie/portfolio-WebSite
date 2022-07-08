import React from 'react';
import styled from 'styled-components';
import { Colors } from '../Styled/Colors';
import { ReactComponent as Logo } from '../assets/svg/EnterKey.svg';

const Home = () => {
  return (
    <Section>
      <Center>
        <Logo width={150} height={150} />
        <span>Click me</span>
      </Center>
    </Section>
  );
};

export default Home;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: ${Colors.white};
`;

const Center = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
