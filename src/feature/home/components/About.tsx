// =============================================================================
// File    :  About.tsx
// Class   :
// Purpose :  About
// Date    :
// Author  :  JHS
// History : 2024.03 수정 작업
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import styled from 'styled-components';
import Me from '@assets/Images/profile.png';
import { motion } from 'framer-motion';

/**
 * 자기소개 컴포넌트
 * @returns JSX.Element
 */
const About = () => {
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
          <img className='pic' src={Me} alt='profile pic' />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default About;

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
        ${({ theme }) => theme.gray000} 50%,
        ${({ theme }) => theme.black} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${({ theme }) => theme.gray000} 50%,
        ${({ theme }) => theme.black} 50%
      )
      top;
  z-index: 10;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${({ theme }) => theme.gray000};
  border-right: 2px solid ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.black};
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
  color: ${({ theme }) => theme.gray000};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span {
    font-size: 22px !important;
  }

  & > *:last-child {
    color: ${({ theme }) => theme.gray200};
    opacity: 0.6;
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;
