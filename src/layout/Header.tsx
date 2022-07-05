import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ToggleValue } from '../atom';
import { Link } from 'react-router-dom';

export interface props {
  onToggle: () => void;
  active?: boolean;
  setActive?: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ onToggle }: props) => {
  const toggle = useRecoilValue(ToggleValue);
  return (
    <Container>
      <Content>
        <Logo>
          <Link to='/'>Logo</Link>
        </Logo>
        <Toggle onClick={() => onToggle()}>
          {toggle ? (
            <AiOutlineClose className='closeIcon' />
          ) : (
            <AiOutlineMenu className='menuIcon' />
          )}
        </Toggle>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 5rem;
`;

const Content = styled.div`
  max-width: 1120px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
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
  }
`;
