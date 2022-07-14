import React from 'react';
import styled from 'styled-components';
import { Colors } from '../Styled/Colors';

interface BigTitleProps {
  top?: number;
  left?: number;
  right?: number;
  text: string;
}

const BigTitle = (props: BigTitleProps) => {
  return <Text {...props}>{props.text}</Text>;
};

export default BigTitle;

const Text = styled.h2<BigTitleProps>`
  position: fixed;
  top: ${(props) => props.top + '%'};
  left: ${(props) => props.left + '%'};
  right: ${(props) => props.right + '%'};
  color: ${Colors.gray200};
  font-size: calc(5rem + 5vw);
  z-index: 0;
`;
