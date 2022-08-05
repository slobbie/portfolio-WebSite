import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../Styled/Colors';
import Me from '../../assets/Images/profile.png';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <>
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
            <h2>HI,</h2>
            <h3>I'm Jeong Haeseok</h3>
            <h6>I design and Code simple yet Interaction Design websites.</h6>
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
    </>
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
  & > *:last-child {
    color: ${Colors.gray200};
    opacity: 0.6;
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;
