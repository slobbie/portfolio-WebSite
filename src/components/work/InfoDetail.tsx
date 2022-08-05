import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../Styled/Colors';
import { WorkProps } from './WorkCord';

const InfoDetail = (props: WorkProps) => {
  console.log(props.stack);
  return (
    <Container>
      <BottomWrapper>
        <LargeText>Stack</LargeText>
      </BottomWrapper>
      <SmallText>{props.stack}</SmallText>
      <MediumText>{props.Info}</MediumText>
    </Container>
  );
};

export default InfoDetail;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5em 6px 0 6px;
  line-height: 1.4;
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: ${Colors.white};
  font-weight: 800;
  text-transform: uppercase;
  margin: 2px;
  letter-spacing: 2px;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: ${Colors.white};
  font-weight: 800;
  text-transform: uppercase;
  margin: 5px 2px;
`;

const LargeText = styled.span`
  font-size: 24px;
  color: ${Colors.white};
  font-weight: 800;
  text-transform: uppercase;
  margin: 0 0 5px 0;
`;
