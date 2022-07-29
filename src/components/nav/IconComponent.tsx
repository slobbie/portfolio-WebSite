import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as GithubIcon } from '../../assets/svg/github-brands.svg';
import { ReactComponent as Blog } from '../../assets/svg/laptop-code-solid.svg';
import { ReactComponent as Notion } from '../../assets/svg/notion-logo.svg';
import { ClickValue } from '../../atom';
import { Colors } from '../../Styled/Colors';
import { motion } from 'framer-motion';
import { ClickProps } from '../../layout/Header';

const IconComponent = () => {
  const click = useRecoilValue(ClickValue);

  return (
    <>
      <Container>
        {/* <Work>work</Work> */}
        <Button
          onClick={() => window.open('https://github.com/slobbie', '_blank')}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: 'spring', duration: 1, delay: 1.2 }}
        >
          <GithubIcon
            fill={+click ? Colors.white : Colors.black}
            width={30}
            className='icon'
          />
        </Button>
        <Button
          onClick={() => window.open('https://velog.io/@slobber/', '_blank')}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: 'spring', duration: 1, delay: 1.4 }}
        >
          <Blog
            fill={+click ? Colors.white : Colors.black}
            width={30}
            className='icon'
          />
        </Button>
        <Button
          onClick={() =>
            window.open(
              'https://bolder-frog-020.notion.site/76dc1d0ebd64400ba4a9eb6229eddea2',
              '_blank'
            )
          }
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: 'spring', duration: 1, delay: 1.6 }}
        >
          <Notion
            fill={+click ? Colors.white : Colors.black}
            width={30}
            height={30}
            className='icon notion'
          />
        </Button>
      </Container>
      <Line
        click={+click}
        initial={{
          height: 0,
        }}
        animate={{
          height: '8rem',
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.3,
        }}
      />
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
const Button = styled(motion.button)`
  border: none;
  background: transparent;
  cursor: pointer;
`;
const Line = styled(motion.div)<ClickProps>`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => (props.click ? Colors.white : Colors.black)};
`;
