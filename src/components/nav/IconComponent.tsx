import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as GithubIcon } from '../../assets/svg/github-brands.svg';
import { ReactComponent as Blog } from '../../assets/svg/laptop-code-solid.svg';
import { ReactComponent as Notion } from '../../assets/svg/notion-logo.svg';
import { Colors } from '../../Styled/Colors';

const IconComponent = () => {
  return (
    <>
      <Container>
        {/* <Work>work</Work> */}
        <Button
          onClick={() => window.open('https://github.com/slobbie', '_blank')}
        >
          <GithubIcon fill='#000' width={30} className='icon' />
        </Button>
        <Button
          onClick={() => window.open('https://github.com/slobbie', '_blank')}
        >
          <Blog fill='#000' width={30} className='icon' />
        </Button>
        <Button
          onClick={() => window.open('https://github.com/slobbie', '_blank')}
        >
          <Notion fill='#000' width={30} height={30} className='icon notion' />
        </Button>
      </Container>
      <Line />
    </>
  );
};

export default IconComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 150px;
  /* margin-top: auto; */
  .icon {
    margin: 5px;
  }
  .notion {
    margin-bottom: 0;
  }
`;
const Button = styled.button`
  border: none;
  background: transparent;
`;
const Line = styled.div`
  width: 2px;
  height: 8rem;
  background-color: ${Colors.black};
`;
