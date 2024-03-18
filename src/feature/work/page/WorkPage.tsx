import { useMemo } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isTopMenu } from '@atom/atom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import BigTitle from '@common/components/title/BigTitle';
import Line from '@common/components/line/Line';
import routes from '@src/common/constants/path.constants';
import { useNavigate } from 'react-router-dom';

/**
 *  work 페이지
 * @returns JSX.Element
 */
const WorkPage = () => {
  const url = routes.url;
  const navigate = useNavigate();
  /** 상단 햄버거 메뉴 노출 상태 */
  const [isShowTopMenu, setIsShowTopMenu] = useRecoilState(isTopMenu);

  /** 상단 햄버거 메뉴 토글 이벤트  */
  const showTopMenuToggle = () => {
    setIsShowTopMenu(!isShowTopMenu);
  };

  /** work 페이지 애니메이션 */
  const containerAnimation = useMemo(
    () => ({
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
    }),
    []
  );

  /** portfolio wind open 함수 */
  const routeWindowOpen = (pPath: string) => {
    window.open(pPath, '_blank');
  };

  /** contact 페이지 이동  */
  const showContactPage = () => {
    navigate(routes.path.contact);
  };

  return (
    <Section
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ type: 'tween', duration: 0.8 }}
    >
      <Toggle onClick={showTopMenuToggle}>
        {isShowTopMenu ? (
          <AiOutlineClose className='closeIcon' />
        ) : (
          <AiOutlineMenu className='menuIcon' />
        )}
      </Toggle>
      <BigTitle size='L' text='Work' top={12} right={10} position />
      <Wrapper
        className='page'
        variants={containerAnimation}
        initial='hidden'
        animate='show'
        style={{}}
      >
        <UserInfo>
          <CareerTitle>FrontEnd Engineer</CareerTitle>
          <h3>정해석</h3>
          <CareerTextBox>
            <span>
              - 좋은 코드는 누구나 읽기 쉬운 코드라는 모토를 바탕으로, 더 나은
              코드를 작성하기 위해 노력합니다.
            </span>
            <span>
              - 함께라는 가치의 중요성을 느끼며, 원활한 소통을 위해 좋은
              의사소통에 대해 지속적으로 고민하고 있습니다.
            </span>
            <span>
              - 사용자에게 좋은 경험을 전달하는 일에 큰 보람을 느끼며, 기술의
              성숙도와 서비스에 대한 깊이 있는 이해를 높이기 위해 디테일한
              경험을 쌓고 싶습니다.
            </span>
            <h3>연락처</h3>
            <EmailSpan>Email : haeru9410@gmail.com</EmailSpan>
          </CareerTextBox>
          <MarginModelBottom />
          <Line />
        </UserInfo>

        <MarginModelBottom />
        <CareerInfo>
          <CareerTitle>경력</CareerTitle>
          <CareerInfoBox>
            <CareerTextBox>
              <span> 이로운 소프트 - 주임</span>
              <span> FrontEnd Engineer</span>
              <span>2022.08.23 ~ 2024.03.29 ( 1년 6개월 | 정규직)</span>
            </CareerTextBox>
            <CareerInfoTextBox>
              <span>
                - 이로운 소프트 SI 프로젝트의 FrontEnd 업무 담당하여 사용자와
                고객요구에 맞는 개발을 진행하였습니다.{' '}
              </span>
              <span>
                - 이로운 소프트 자사 솔루션 서비스의 유지 보수 및 고도화 업무
                담당하여 진행하였습니다.
              </span>
            </CareerInfoTextBox>
          </CareerInfoBox>
          <MarginModelBottom />
          <Line />
        </CareerInfo>
        <ProjectContent>
          <CareerTitle>프로젝트</CareerTitle>
          <ProjectTextInfoBox>
            <ProjectTextBox>
              <h4>ZCAR (2022.08.23 ~ 2023.09.31)</h4>
              <span> - 차량 상태 모니터링 앱 </span>
              <span>
                - 차량에 연결된 OBDII 기기를 통해 받은 실시간 차량 데이터 분석
                및 데이터 시각화 앱 개발
              </span>
              <span> - cross-platform app 개발</span>
              <span>
                - 사용기술 : React Native cli , TypeScript, redux-toolkit,
                styled-components, axios, codepush, i18
              </span>
            </ProjectTextBox>
            <MarginModelBottom />
            <ProjectTextBox>
              <h4>
                예천양수 지능형 상태감시 및 예측진단 시스템 구축 (2023.10.01~
                2024.03)
              </h4>
              <span> - 예천 양수 수력 발전 모니터링 시스템 웹 개발 </span>
              <span>
                - 기존 cs로 개발된 모니터링 시스템을 웹 서비스로 마이그레이션
                작업
              </span>
              <span>
                - 양수원의 양수 상태에따른 모니터링 상태 데이터 시각화
              </span>
              <span>
                - 사용기술 : TypeScript, React, redux-toolkit, axios,
                styled-components, websocket
              </span>
            </ProjectTextBox>
          </ProjectTextInfoBox>
          <MarginModelBottom />
          <Line />
        </ProjectContent>
        <MarginModelBottom />
        <ProjectContent>
          <CareerTitle>개인 프로젝트</CareerTitle>
          <ToyProjectContent>
            <ProjectTextBox>
              <h4>PORTFOLIO WEBSITE</h4>
              <span>- 개인 작업물들을 정리하기 위한 website</span>
              <span>
                - 사용기술 : TypeScript, React styled-components, recoil
              </span>
              <span>
                - 방문하기:{' '}
                <span onClick={() => routeWindowOpen(url.portfolio)}>
                  {' '}
                  {url.portfolio}
                </span>
              </span>
            </ProjectTextBox>
            <MarginModelBottom />
            <ProjectTextBox>
              <h4>REACT-CANVAS PROJECT</h4>
              <span>- canvas 를 이용한 다양한 작업물 모음</span>
              <span>
                - 사용기술 : TypeScript, React, styled-components, canvas
              </span>
              <span>
                - 방문하기:{' '}
                <span onClick={() => routeWindowOpen(url.canvas)}>
                  {' '}
                  {url.canvas}
                </span>
              </span>
            </ProjectTextBox>
            <MarginModelBottom />
            <ProjectTextBox>
              <h4>POKEMON CARD BOOK</h4>
              <span>- pokemon open api를 이용하여 포켓몬 카드북 제작</span>
              <span>
                - 사용기술 : TypeScript, React, styled-components, recoil, axios
              </span>
              <span>
                - 방문하기:{' '}
                <span onClick={() => routeWindowOpen(url.pokemon)}>
                  {' '}
                  {url.pokemon}
                </span>
              </span>
            </ProjectTextBox>
            <MarginModelBottom />
            <ProjectTextBox>
              <h4>MovieFlex</h4>
              <span>
                - themoviedb API 를 이용하여 상영중잉 영화 및 Tv Show 정보 웹
                제작
              </span>
              <span>
                - 사용기술 : Typescript, React, Styled-Components, react-query
              </span>
              <span>
                - 방문하기:{' '}
                <span onClick={() => routeWindowOpen(url.movieFlex)}>
                  {' '}
                  {url.movieFlex}
                </span>
              </span>
            </ProjectTextBox>
            <MarginModelBottom />
            <MarginModelBottom />
          </ToyProjectContent>
          <Line />
        </ProjectContent>
        <SpaceBox />
        <More onClick={showContactPage}>More</More>
      </Wrapper>
    </Section>
  );
};

export default WorkPage;

const More = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  z-index: 1000;
  text-align: center;
  left: -100px;
  font-size: calc(1rem + 1vw);
  font-weight: bold;
  color: ${({ theme }) => theme.gray300};
`;

const SpaceBox = styled.div`
  width: 100%;
  height: 200px;
`;

const Section = styled(motion.section)`
  background-color: ${({ theme }) => theme.gray000};
  width: 100%;
  min-height: 100vh;
  height: auto;
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
  /* align-items: center; */
  justify-content: flex-start;
  width: 100%;
  position: relative;
  left: 100px;
  min-height: 100vh;
  height: auto;
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
  z-index: 1000;
  .menuIcon,
  .closeIcon {
    transition: 0.3s ease-in-out;
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.black};
  }
`;

const CareerInfo = styled.div`
  position: relative;
  top: 80px;
  padding: 0px 40px;
  width: calc(100% - 80px);
  min-height: calc(200px);
  height: auto;
`;

const CareerInfoBox = styled.div`
  display: flex;
`;

const CareerTitle = styled.h2`
  color: ${({ theme }) => theme.black_333};
  font-weight: 500;
`;

const CareerTextBox = styled.div`
  margin-top: 10px;
  color: ${({ theme }) => theme.black_333};
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  span {
    display: inline-block;
    margin-bottom: 5px;
  }
`;

const CareerInfoTextBox = styled(CareerTextBox)`
  margin-left: 40px;
  display: flex;
  span {
    margin-bottom: 10px;
  }
`;

const ProjectContent = styled(CareerInfo)`
  width: 100%;
  min-height: 200px;
  height: auto;
  padding: 0px 40px;
  width: calc(100% - 80px);
`;

const ProjectTextInfoBox = styled(CareerInfoBox)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const ProjectTextBox = styled(CareerTextBox)`
  h4 {
    margin-bottom: 10px;
  }
  span {
    display: inline-block;
    margin-left: 5px;
    span {
      color: ${({ theme }) => theme.blue_4593fc};
    }
  }
`;

const MarginModelBottom = styled.div`
  margin-bottom: 40px;
`;

const UserInfo = styled(CareerInfo)`
  display: flex;
  flex-direction: column;
  h3 {
    color: ${({ theme }) => theme.black_333};
    margin-top: 20px;
  }
`;

const ToyProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const EmailSpan = styled.span`
  display: inline-block;
  margin-top: 20px;
`;
