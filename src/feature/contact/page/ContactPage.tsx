import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { isTopMenu } from '@atom/atom';

/**
 * 개인 연락망 소개 페이지
 * @returns JSX.Element
 */
const ContactPage = () => {
  /** 상단 햄버거 메뉴 노출 상태 */
  const [isShowTopMenu, setIsShowTopMenu] = useRecoilState(isTopMenu);

  /** 상단 햄버거 메뉴 토글 이벤트  */
  const showTopMenuToggle = () => {
    setIsShowTopMenu(!isShowTopMenu);
  };

  return (
    <Section
      initial={{ y: 10000 }}
      animate={{ y: 0 }}
      transition={{ type: 'tween', duration: 0.5 }}
    >
      <Toggle onClick={showTopMenuToggle}>
        {isShowTopMenu ? (
          <AiOutlineClose className='closeIcon' />
        ) : (
          <AiOutlineMenu className='menuIcon' />
        )}
      </Toggle>
      <Box>
        <TextBox
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [0, 1.2, 1] }}
          transition={{ type: 'tween', duration: 1, delay: 1 }}
        >
          <BigText>FrontEnd Engineer</BigText>
          <BigText>
            Email <SmallText>haeru9410@gmail.com</SmallText>
          </BigText>
          <BigText>
            Residence <SmallText>Seoul, South Korea</SmallText>
          </BigText>
        </TextBox>
        <LinkBar
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Li
            onClick={() => window.open('https://github.com/slobbie', '_blank')}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1.1, 1] }}
            transition={{ type: 'spring', duration: 1, delay: 1.4 }}
          >
            Github
          </Li>
          <Li
            onClick={() =>
              window.open(
                'https://bolder-frog-020.notion.site/a49391de51514d79bcf02316acc4deff',
                '_blank'
              )
            }
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1.1, 1] }}
            transition={{ type: 'spring', duration: 1, delay: 1.6 }}
          >
            Resume
          </Li>
          <Li
            onClick={() => window.open('https://velog.io/@slobber', '_blank')}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1.1, 1] }}
            transition={{ type: 'spring', duration: 1, delay: 1.8 }}
          >
            blog
          </Li>
        </LinkBar>
      </Box>
      <Copyright>Copyright @ 2022 Jung Haeseok</Copyright>
    </Section>
  );
};

export default ContactPage;

const Section = styled(motion.section)`
  background-color: ${({ theme }) => theme.gray000};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  color: ${({ theme }) => theme.black};
  max-width: 800px;
  width: 100%;
  max-height: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const BigText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.black_333};
`;
const SmallText = styled.span`
  font-weight: 300;
`;

const LinkBar = styled(motion.ul)`
  display: flex;
  margin-top: 30px;
`;

const Li = styled(motion.li)`
  margin: 0 10px;
  font-size: 1.5rem;
  &:hover {
    color: ${({ theme }) => theme.yellow};
  }
  border-right: 1px solid rgba(204, 204, 204, 0.5);
  padding-right: 15px;
  &:nth-child(1) {
    margin-left: 0;
  }
  &:nth-child(3) {
    border: none;
  }
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.black};
  position: absolute;
  bottom: 50px;
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
  .menuIcon,
  .closeIcon {
    transition: 0.3s ease-in-out;
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.black};
  }
`;
