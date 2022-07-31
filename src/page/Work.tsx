import React, { RefObject, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import WorkCord, { WorkProps } from '../components/work/WorkCord';
import Me from '../assets/Images/profile.png';
import Netflix from '../assets/Images/netflix-logo.png';
import { useRecoilState } from 'recoil';
import { ClickValue, ToggleValue, WorkValue } from '../atom';
import { Colors } from '../Styled/Colors';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import BigTitle from '../components/BigTitle';
import { MdDoubleArrow } from 'react-icons/md';
const Work = () => {
  const WorkData = [
    {
      id: 1,
      title: 'Wanted ON BOARDING',
      stack: ['React', 'JS', 'Style-Component'],
      Info: 'Wanted 에서 주최한  onboarding 프로그램 참여',
      projectImg: `${Netflix}`,
      visit: 'https://slobbie.github.io/React-canvas/',
      TitleColor: '#fff',
      notionLink: '',
      githubLink: '',
    },
    {
      id: 2,
      title: 'MOVIEFLIX',
      stack: ['React', 'JS', 'Style-Component'],
      Info: '상영중인 영화 및 TV SHOW 를 알수있는 페이지',
      projectImg: `${Me}`,
      visit: 'https://slobbie.github.io/React-canvas/',
      TitleColor: 'red',
      notionLink: '',
      githubLink: '',
    },
    {
      id: 3,
      title: 'Kanban board',
      stack: ['React', 'JS', 'Style-Component'],
      Info: 'Todo 관리 앱',
      projectImg: `${Netflix}`,
      visit: 'https://slobbie.github.io/React-canvas/',
      TitleColor: '#2ed573',
      notionLink: '',
      githubLink: '',
    },
    {
      id: 4,
      title: 'REACT-CANVAS',
      stack: ['React', 'JS', 'Style-Component'],
      Info: 'REACT-CANVAS',
      projectImg: `${Netflix}`,
      visit: 'https://slobbie.github.io/React-canvas/',
      TitleColor: '#1E5DF7',
      notionLink: '',
      githubLink: '',
    },
    {
      id: 5,
      title: 'CATCHER-UIKIT',
      stack: ['React', 'JS', 'Style-Component'],
      Info: 'SIDE-PROJECT에서 사용되는 UIKit',
      projectImg: `${Netflix}`,
      visit: 'https://slobbie.github.io/React-canvas/',
      TitleColor: '#97511E',
      notionLink: '',
      githubLink: '',
    },
    {
      id: 6,
      title: 'PoKemon Card book',
      stack: ['React', 'JS', 'Style-Component'],
      Info: 'PoKemon API 를 이용한 Card Book',
      projectImg: `${Netflix}`,
      visit: 'https://slobbie.github.io/PokemonCardBooks/',
      TitleColor: 'yellow',
      notionLink: '',
      githubLink: 'https://github.com/slobbie/PokemonCardBooks',
    },
  ];
  const [click, setClick] = useRecoilState(ClickValue);
  const [work, setWork] = useRecoilState(WorkValue);
  const [active, setActive] = useRecoilState(ToggleValue);

  useEffect(() => {
    setClick(false);
  }, []);

  const onToggle = () => {
    setActive(!active);
  };

  const Container = {
    hidden: { scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.7,
        duration: 2,
        type: 'spring',
      },
    },
  };

  return (
    <Section
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ type: 'tween', duration: 1 }}
    >
      <Toggle onClick={() => onToggle()}>
        {active ? (
          <AiOutlineClose className='closeIcon' />
        ) : (
          <AiOutlineMenu className='menuIcon' />
        )}
      </Toggle>
      <BigTitle size='L' text='Work' top={8} left={10} position />
      <Wrapper
        className='page'
        variants={Container}
        initial='hidden'
        animate='show'
      >
        {WorkData.map((item: WorkProps) => {
          return (
            <WorkCord
              key={item.id}
              title={item.title}
              stack={item.stack}
              Info={item.Info}
              projectImg={item.projectImg}
              TitleColor={item.TitleColor}
              visit={item.visit}
            />
          );
        })}
      </Wrapper>
      <BottomTitle>
        <BigTitle size='S' text='Scroll' bottom={0} right={10} />
        <MdDoubleArrow className='arrow' />
      </BottomTitle>
    </Section>
  );
};

export default Work;

const Section = styled(motion.section)`
  background-color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  position: relative;
  left: 100px;
  /* margin: 50px; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    top: 150px;
    left: 0;
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
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
  margin-right: 25px;
  .menuIcon,
  .closeIcon {
    transition: 0.3s ease-in-out;
    width: 25px;
    height: 25px;
    fill: ${Colors.black};
  }
`;

const animate = keyframes`
   0% {
    
      transform: translateX(0);
    }
    40% {
      
      transform:  translateX(-5px);
    }
    70% {
      transform:   translateX(5px);
    }
   100%{
    transform: translateX(0);
    }
`;

const BottomTitle = styled.div`
  position: absolute;
  bottom: 3px;
  right: 90px;
  display: flex;
  align-items: center;
  height: 100%;
  .arrow {
    position: absolute;
    fill: ${Colors.gray200};
    width: calc(3rem + 1vw);
    height: calc(3rem + 1vw);
    bottom: 6px;
    left: 10px;
    animation: ${animate} 3s linear infinite;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
