import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ToggleValue } from '../../atom';

const Menu = () => {
  const active = useRecoilValue(ToggleValue);
  const [toggle, setToggle] = useRecoilState(ToggleValue);
  const Navigate = useNavigate();
  useEffect(() => {
    setToggle(false);
  }, [Navigate]);
  return (
    <Container className={active ? 'active' : ''}>
      <Li onClick={() => Navigate('/')}>Home</Li>
      <Li>
        <Link to='/work'>Work</Link>
      </Li>
      <Li>
        <Link to='/contact'>Contact</Link>
      </Li>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 25%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  transform: translateX(100px);
  transition: 0.5s ease-in-out;
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
  @media screen and (max-width: 768px) {
    bottom: 0;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
  }
`;

const Li = styled.div`
  font-size: 1.5rem;
  position: relative;
  transition: 0.3s ease-in-out;
  margin-top: 1rem;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 5px;
    width: 0;
    background-color: #fff;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    padding-left: 24px;
    color: yellow;
  }
  &:hover::before {
    width: 15px;
  }
  @media screen and (max-width: 768px) {
    margin: 10px;
  }
`;
