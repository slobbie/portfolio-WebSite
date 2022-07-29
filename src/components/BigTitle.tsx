import React from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../Styled/Colors';

interface BigTitleProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  text: string;
  size: string;
  position?: boolean;
}

const BigTitle = (props: BigTitleProps) => {
  return <Text {...props}>{props.text}</Text>;
};

export default BigTitle;

const Fontsize = css<BigTitleProps>`
  ${(props) =>
    props.size === 'L' &&
    css`
      font-size: calc(5rem + 5vw);
    `}

  ${(props) =>
    props.size === 'M' &&
    css`
      font-size: calc(4rem + 3vw);
    `}

    ${(props) =>
    props.size === 'S' &&
    css`
      font-size: calc(3rem + 1vw);
    `}
`;

const Text = styled.h2<BigTitleProps>`
  position: ${(props) => (props.position ? 'fixed' : 'absolute')};
  top: ${(props) => props.top + '%'};
  left: ${(props) => props.left + '%'};
  right: ${(props) => props.right + '%'};
  bottom: ${(props) => props.bottom + '%'};
  color: ${Colors.gray200};
  /* font-size: calc(5rem + 5vw); */
  ${Fontsize}
  z-index: 0;
`;
