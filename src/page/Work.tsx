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
import { ReactComponent as Logo } from '../assets/svg/yin-yang-solid.svg';
const Work = () => {
  const WorkData = [
    {
      id: 1,
      title: 'NETFLIX Clone',
      stack: ['React', 'JS', 'Style-Component'],
      Info: '메인페이지 넷플릭스 클론 코딩',
      projectImg: `${Me}`,
      TitleColor: 'red',
    },
    {
      id: 2,
      title: 'Kanban board',
      stack: ['React', 'JS', 'Style-Component'],
      Info: 'Todo 관리 앱',
      projectImg: `${Netflix}`,

      TitleColor: '#2ed573',
    },
    {
      id: 3,
      title: 'Kanban board',
      stack: ['React', 'JS', 'Style-Component'],
      Info: 'Todo 관리 앱',
      projectImg: `${Netflix}`,

      TitleColor: '#2ed573',
    },
    {
      id: 4,
      title: 'Kanban board',
      stack: ['React', 'JS', 'Style-Component'],
      Info: 'Todo 관리 앱',
      projectImg: `${Netflix}`,

      TitleColor: '#2ed573',
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
      <BigTitle text='Work' top={8} left={10} />
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
            />
          );
        })}
      </Wrapper>
      <Rotate>
        <Logo width={75} height={75} />
      </Rotate>
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
  /* margin: 50px; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
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

const rotateAnimation = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
  animation: ${rotateAnimation} infinite 1.5s linear;
  transition: all 1s ease;

  &:active {
    right: 850px;
  }
`;
