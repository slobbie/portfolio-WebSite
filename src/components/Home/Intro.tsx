import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../Styled/Colors';
import Me from '../../assets/Images/profile.png';
import { motion } from 'framer-motion';
// import Spline from '@splinetool/react-spline';
const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h3>FrontEnd Engineer</h3>
          <h4>정해석</h4>
          <span>
            좋은 코드는 누구나 읽기 쉬운 코드다. <br /> 라는 모토를 바탕으로,{' '}
            <br />더 나은 코드를 작성하기 위해 노력합니다.{' '}
          </span>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {/* <Spline scene='https://prod.spline.design/esWyGoN7gZytzQ1z/scene.splinecode' /> */}
          {/* <Spline scene='https://prod.spline.design/esWyGoN7gZytzQ1z/scene.splinecode' /> */}
          {/* <Spline scene='https://prod.spline.design/esWyGoN7gZytzQ1z/scene.splinecode' /> */}
          {/* <Spline scene='https://prod.spline.design/SzgIYyTZuyKUJhPF/scene.splinecode' /> */}
          {/* 로봇 */}
          {/* <Spline scene='https://prod.spline.design/SzgIYyTZuyKUJhPF/scene.splinecode' /> */}
          {/* <Spline scene='https://prod.spline.design/ekeJFYMz2N6za9Kf/scene.splinecode' /> */}
          <img className='pic' src={Me} alt='profile pic' />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;

const Box = styled(motion.div)`
  width: 65vw;
  height: 55vh;
  display: flex;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  position: absolute;
  background: linear-gradient(
        to right,
        ${Colors.white} 50%,
        ${Colors.black} 50%
      )
      bottom,
    linear-gradient(to right, ${Colors.white} 50%, ${Colors.black} 50%) top;
  z-index: 10;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${Colors.white};
  border-right: 2px solid ${Colors.black};
  color: black;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;
const Text = styled(motion.div)`
  font-size: calc(1em + 1.5vw);
  color: ${Colors.white};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span {
    font-size: 22px !important;
  }

  & > *:last-child {
    color: ${Colors.gray200};
    opacity: 0.6;
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;
