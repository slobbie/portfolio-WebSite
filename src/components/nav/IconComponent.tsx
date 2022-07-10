import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as GithubIcon } from '../../assets/svg/github-brands.svg';
import { ReactComponent as Blog } from '../../assets/svg/laptop-code-solid.svg';
import { ReactComponent as Notion } from '../../assets/svg/notion-logo.svg';
import { ClickValue } from '../../atom';
import { Colors } from '../../Styled/Colors';

const IconComponent = () => {
  const click = useRecoilValue(ClickValue);

  return (
    <>
      <Container>
        {/* <Work>work</Work> */}
        <Button
          onClick={() => window.open('https://github.com/slobbie', '_blank')}
        >
          <GithubIcon
            fill={click ? Colors.white : Colors.black}
            width={30}
            className='icon'
          />
        </Button>
        <Button
          onClick={() => window.open('https://github.com/slobbie', '_blank')}
        >
          <Blog
            fill={click ? Colors.white : Colors.black}
            width={30}
            className='icon'
          />
        </Button>
        <Button
          onClick={() => window.open('https://github.com/slobbie', '_blank')}
        >
          <Notion
            fill={click ? Colors.white : Colors.black}
            width={30}
            height={30}
            className='icon notion'
          />
        </Button>
      </Container>
      <Line click={click} />
    </>
  );
};

export default IconComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
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
const Line = styled.div<{ click: boolean }>`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => (props.click ? Colors.white : Colors.black)};
`;
