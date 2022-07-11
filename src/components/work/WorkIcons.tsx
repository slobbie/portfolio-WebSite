import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../Styled/Colors';
import { WorkProps } from './WorkCord';
import { ReactComponent as GithubIcon } from '../../assets/svg/github-brands.svg';
import { ReactComponent as Blog } from '../../assets/svg/laptop-code-solid.svg';
const WorkIcons = (props: WorkProps) => {
  return (
    <Container>
      <Visit>Visit</Visit>
      <IconBox>
        <Button>
          {/* <img src={props.stackImg} alt='button-icon' /> */}
          <GithubIcon
            fill={Colors.white}
            width={30}
            height={30}
            className='icon'
          />
        </Button>
        <Button>
          <Blog fill={Colors.white} width={30} className='icon' />
        </Button>
      </IconBox>
    </Container>
  );
};

export default WorkIcons;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Visit = styled.button`
  width: 85px;
  height: 40px;
  border: none;
  border-radius: 15px;
  font-weight: 800;
  font-size: 17px;
  background-color: ${Colors.yellow};
  color: ${Colors.white};
  margin: 5px;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 7px;
  width: 100%;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;
