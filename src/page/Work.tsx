import React, { RefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import WorkCord, { WorkProps } from '../components/work/WorkCord';
import Me from '../assets/Images/profile.png';
import { useRecoilState } from 'recoil';
import { ClickValue, WorkValue } from '../atom';

const Work = () => {
  const WorkData = [
    {
      id: 1,
      title: 'NETFLIX Clone',
      stack: ['React', 'JS', 'Style-Component'],
      Info: '넷플릭스 클론 코딩입니다.',
      projectImg: `${Me}`,
      stackImg: `${Me}`,
    },
    {
      id: 2,
      title: 'TodoList web ',
      stack: ['React', 'JS', 'Style-Component'],
      Info: '넷플릭스 클론 코딩입니다.',
      projectImg: `${Me}`,
      stackImg: `${Me}`,
    },
    {
      id: 3,
      title: 'TodoList web ',
      stack: ['React', 'JS', 'Style-Component'],
      Info: '넷플릭스 클론 코딩입니다.',
      projectImg: `${Me}`,
      stackImg: `${Me}`,
    },
    {
      id: 4,
      title: 'TodoList web ',
      stack: ['React', 'JS', 'Style-Component'],
      Info: '넷플릭스 클론 코딩입니다.',
      projectImg: `${Me}`,
      stackImg: `${Me}`,
    },
    {
      id: 5,
      title: 'TodoList web ',
      stack: ['React', 'JS', 'Style-Component'],
      Info: '넷플릭스 클론 코딩입니다.',
      projectImg: `${Me}`,
      stackImg: `${Me}`,
    },
  ];
  const [click, setClick] = useRecoilState(ClickValue);
  const [work, setWork] = useRecoilState(WorkValue);
  useEffect(() => {
    setClick(!click);
    console.log('Work');
  }, []);

  // const WorkPageRef = useRef(null);

  // useEffect(() => {
  //   let El = WorkPageRef.current;

  //   const rotate = () => {
  //     El.style.transform = `translateX(${-window.pageYOffset}px)`;
  //   };

  //   window.addEventListener('scroll', rotate);
  //   return () => window.removeEventListener('scroll', rotate);
  // }, []);
  return (
    <Section>
      <Wrapper className='page'>
        {WorkData.map((item: WorkProps) => {
          return (
            <WorkCord
              key={item.id}
              title={item.title}
              stack={item.stack}
              Info={item.Info}
              projectImg={item.projectImg}
              stackImg={item.stackImg}
            />
          );
        })}
      </Wrapper>
    </Section>
  );
};

export default Work;

const Section = styled.section`
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  margin: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
