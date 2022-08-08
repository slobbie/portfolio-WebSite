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
      title: 'Tem-Sellbar',
      stack: ['Next.js,', 'Ts,', 'Sass'],
      Info: '중고 의류 플랫폼 서비스',
      visit:
        'https://www.notion.so/Team-sellbar-5c4e9b57c3134aaca75d06464d612b18',
      TitleColor: '#5352ed',
      githubLink: 'https://github.com/beaever/team-project',
    },
    {
      id: 2,
      title: 'Wanted ON BOARDING',
      stack: ['React,', 'vue,', 'JS,', 'Style-Component'],
      Info: 'Wanted 주최 onboarding 프로그램 ',
      visit: 'https://team4-nexon-kartrider.netlify.app/rank',
      TitleColor: '#fff',
      githubLink: 'https://github.com/wanted-Team4',
    },
    {
      id: 3,
      title: 'CATCHER-UIKIT',
      stack: ['React,', 'TS,', 'Style-Component'],
      Info: 'SIDE-PROJECT에서 사용되는 UIKit 제작',
      visit: 'https://www.npmjs.com/package/react-uikit-catcher',
      TitleColor: '#97511E',
      githubLink: 'https://github.com/94-s/catcher-storybook',
    },
    {
      id: 4,
      title: 'TvMOVIE',
      stack: ['React,', 'TS,', 'Style-Component'],
      Info: '상영중인 영화 및 TV SHOW 를 알수있는 페이지',
      visit: 'https://slobbie.github.io/TvMovie/',
      TitleColor: 'red',
      notionLink: '',
      githubLink: 'https://github.com/slobbie/TvMovie',
    },
    {
      id: 5,
      title: 'PoKemon Card book',
      stack: ['React,', 'TS,', 'Style-Component'],
      Info: 'PoKemon API 를 이용한 Card Book',
      visit: 'https://slobbie.github.io/PokemonCardBooks/',
      TitleColor: 'yellow',
      notionLink: '',
      githubLink: 'https://github.com/slobbie/PokemonCardBooks',
    },
    {
      id: 6,
      title: 'REACT-CANVAS',
      stack: ['React,', 'TS,', 'Style-Component'],
      Info: 'REACT-CANVAS',
      visit: 'https://slobbie.github.io/React-canvas/',
      TitleColor: '#1E5DF7',
      notionLink: '',
      githubLink: 'https://github.com/slobbie/React-canvas',
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

  const ref: any = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let scrollPosition = window.pageYOffset;
  //     let windowSize = window.innerHeight;
  //     let bodyHeight = document.body.offsetHeight;

  //     let diff = Math.max(bodyHeight - (scrollPosition + windowSize));

  //     let diffp = (diff * 100) / (bodyHeight - windowSize);

  //     hiddenRef.current.style.transform = `translateY(${-diffp}%`;

  //     if (window.pageYOffset > 5) {
  //       hiddenRef.current.style.display = 'none';
  //     } else {
  //       hiddenRef.current.style.display = 'block';
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // });

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translatex(${-window.pageYOffset}px)`;
    };
    window.addEventListener('scroll', rotate);
    return () => window.removeEventListener('scroll', rotate);
  });

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
        ref={ref}
        style={{}}
      >
        {WorkData.map((item: WorkProps) => {
          return (
            <WorkCord
              key={item.id}
              title={item.title}
              stack={item.stack}
              Info={item.Info}
              TitleColor={item.TitleColor}
              visit={item.visit}
              githubLink={item.githubLink}
            />
          );
        })}
      </Wrapper>
      <BottomTitle>
        <BigTitle size='S' text='Scroll' bottom={0} right={10} />
        {/* <MdDoubleArrow className='arrow' /> */}
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
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  left: 100px;
  height: 100vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
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
