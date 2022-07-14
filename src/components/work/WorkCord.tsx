import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../Styled/Colors';
import Me from '../../assets/Images/profile.png';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import InfoDetail from './InfoDetail';
import WorkIcons from './WorkIcons';

export interface WorkProps {
  id?: number;
  title?: string;
  stack?: any[];
  Info?: string;
  projectImg?: string;
  TitleColor?: string;
}

const WorkCord = (props: WorkProps) => {
  //framer-motion에서 제공하는 hooks
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  // const Item = {
  //   hidden: {
  //     scale: 0,
  //   },
  //   show: {
  //     scale: 1,
  //     transition: {
  //       type: 'spring',
  //       duration: 1,
  //       delay: 1,
  //     },
  //   },
  // };

  return (
    <CardWrapper
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: 'grabbing' }}
    >
      <CardContainer>
        <TopContainer>
          {/* <CircleWrapper>
              <Circle />
            </CircleWrapper> */}
          <ImgWrapper>
            {/* <Imgs
                style={{
                  x: 80,
                  y: 44,s
                  rotateX,
                  rotateY,
                  rotate: '-20deg',
                  z: 100000,
                }}
                drag
                dragElastic={0.12}
                whileDrag={{ cursor: 'grabbing' }}
              >
                <img src={props.projectImg} alt='projcet-Title' />
              </Imgs> */}
          </ImgWrapper>
          <SmallText>Project</SmallText>
          <Text style={{ color: props.TitleColor }}>{props.title}</Text>
        </TopContainer>
        <BottomContainer>
          <InfoDetail stack={props.stack} Info={props.Info} />
          <WorkIcons />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
};

export default WorkCord;

const CardWrapper = styled(motion.div)`
  width: 100%;
  perspective: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px;
`;

const CardContainer = styled.div`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border: 25px;
  /* box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2); */
  background-color: #1d1f21;
  color: ${Colors.white};
  position: relative;
  cursor: grab;
  border-radius: 50px;
  /* overflow: hidden; */
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: ${Colors.yellow};
  border-radius: 50%;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: center;
  /* padding: 1em 15px; */
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.2;
  padding: 0 1em;
`;

const Text = styled.h2`
  color: ${Colors.white};
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 50px;
  font-weight: 900;
  padding: 1rem;
`;

const ImgWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  user-select: none;
`;

const Imgs = styled(motion.div)`
  width: auto;
  height: 190px;
  user-select: none;
  margin-right: 2em;
  margin-top: 2em;
  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;

const SmallText = styled.span`
  font-size: 11px;
  color: ${Colors.white};
  font-weight: 800;
  text-transform: uppercase;
  margin-right: auto;
  margin-left: 20px;
`;
