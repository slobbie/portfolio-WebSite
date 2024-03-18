import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as GithubIcon } from '@assets/svg/github-brands.svg';
import { ReactComponent as Blog } from '@assets/svg/laptop-code-solid.svg';
import { ReactComponent as Notion } from '@assets/svg/notion-logo.svg';
import { isShowMain } from '@atom/atom';
import { Colors } from '@common/styles/theme/Colors';
import { motion } from 'framer-motion';
import routes from '@src/common/constants/path.constants';

/** 네비게이션바 아이콘 버튼 컴포넌트 */
const IconComponent = () => {
  const showIsMain = useRecoilValue(isShowMain);
  const url = routes.url;

  /** 새로운 윈도우 호출 */
  const openBlankWindow = (pUrl: string) => {
    window.open(pUrl, '_blank');
  };

  /** svg color */
  const svgColor = useMemo(() => {
    return showIsMain ? Colors.white : Colors.black;
  }, [showIsMain]);

  return (
    <>
      <Container>
        <Button
          onClick={() => openBlankWindow(url.github)}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: 'spring', duration: 1, delay: 1.2 }}
        >
          <GithubIcon fill={svgColor} width={30} className='icon' />
        </Button>
        <Button
          onClick={() => openBlankWindow(url.velog)}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: 'spring', duration: 1, delay: 1.4 }}
        >
          <Blog fill={svgColor} width={30} className='icon' />
        </Button>
        <Button
          onClick={() => openBlankWindow(url.notion)}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: 'spring', duration: 1, delay: 1.6 }}
        >
          <Notion
            fill={svgColor}
            width={30}
            height={30}
            className='icon notion'
          />
        </Button>
      </Container>
      <Line
        $showIsMain={showIsMain}
        initial={{
          height: 0,
        }}
        animate={{
          height: '8rem',
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.3,
        }}
      />
    </>
  );
};

export default IconComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  .icon {
    margin: 5px;
  }
  .notion {
    margin-bottom: 0;
  }
`;
const Button = styled(motion.button)`
  border: none;
  background: transparent;
  cursor: pointer;
`;
const Line = styled(motion.div)<{ $showIsMain: boolean }>`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.$showIsMain ? props.theme.gray000 : props.theme.black};
`;
