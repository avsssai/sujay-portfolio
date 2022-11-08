import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import Header from '../components/Header';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { Twitter, Facebook, Linkedin, Instagram } from 'react-feather';
import Footer from '../components/Footer/Footer';
import Intro from '../components/Intro';
import { motion } from 'framer-motion';
import { QUERIES } from '../styles/styleUtils';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <IntroWrapper
        animate={{ opacity: 0, translateY: -10000 }}
        initial={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 3, delay: 2.5 }}
      >
        <Intro />
      </IntroWrapper>
      <Header />
      <MaxWidthWrapper>
        <ContentWrapper>
          <ImageContainer>
            <Image src="/baba-bust.svg" alt="An image of Sujay" layout="fill" />
          </ImageContainer>
          <TextContainer>
            <Name
              initial={{ opacity: 0, translateY: -50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 3.2 }}
            >
              Sujayendra
            </Name>
            <Name
              initial={{ opacity: 0, translateY: -50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
            >
              Krishna N
            </Name>
            <Title>Content Management Expert.</Title>
            <Band>
              Your brand might talk, I can make it <Color>sing.</Color>
            </Band>
            <ActionButton>Get in touch</ActionButton>
            <SocialLinks>
              <SocialMedia>
                <Image
                  src="/twitter.svg"
                  alt="twitter social link"
                  layout="fill"
                />
              </SocialMedia>
              <SocialMedia>
                <Image
                  src="/Facebook.svg"
                  alt="facebook social link"
                  layout="fill"
                />
              </SocialMedia>
              <SocialMedia>
                <Image
                  src="/instagram.svg"
                  alt="instagram social link"
                  layout="fill"
                />
              </SocialMedia>
              <SocialMedia>
                <Image
                  src="/linkedin.svg"
                  alt="linkedin social link"
                  layout="fill"
                />
              </SocialMedia>
            </SocialLinks>
          </TextContainer>
        </ContentWrapper>
      </MaxWidthWrapper>

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  isolation: isolate;
`;

const MaxWidthWrapperStyled = styled.div`
  min-height: min(90vh, 800px);
`;

const IntroWrapper = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 10;
  background-color: var(--color-primary);
  opacity: 0;
`;

const ImageContainer = styled.div`
  min-height: 375px;
  min-width: 250px;
  width: 100%;
  position: relative;
  display: block;
  margin: auto;
  margin-bottom: 1.5rem;

  & > img {
    margin-left: -100px;
  }
  @media ${QUERIES.laptopAndUp} {
    margin: 0;
    /* flex: 1; */
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
  /* align-items: center; */
  min-height: min(90vh, 1200px);

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row-reverse;
  }
`;

const TextContainer = styled(motion.div)`
  width: 100%;
  margin: auto;
  padding: 0.1rem 1rem;
  margin-bottom: 1.5rem;
  @media ${QUERIES.laptopAndUp} {
    margin: 0;

    /* padding-top: 15rem; */
    /* flex: 1; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;
  }
`;

const Name = styled(motion.h1)`
  font-size: clamp(32px, 84px, 148px);
  /* font-size: 96px; */
  color: var(--color-textPrimary);
  font-family: var(--font-primary);
  font-weight: 400;
  line-height: 0.8;
  text-align: center;
  &:last-of-type {
    margin-bottom: 0.5rem;
    color: var(--color-accentPink);
  }

  @media ${QUERIES.laptopAndUp} {
    text-align: revert;
    font-size: clamp(96px, 10vw, 148px);
  }
`;

const Title = styled.div`
  font-family: var(--font-secondary);
  color: var(--color-textPrimary);
  font-size: clamp(24px, 1.5vw, 32px);
  margin-bottom: 0.5rem;
  text-align: center;
  @media ${QUERIES.laptopAndUp} {
    text-align: revert;
    margin-bottom: 1rem;
    /* width: 200px; */
  }
`;

const Band = styled.h4`
  font-family: var(--font-secondary);
  color: var(--color-textPrimary);
  font-weight: normal;
  margin-bottom: 1.5rem;
  font-size: clamp(16px, 0.75vw, 20px);
  text-align: center;
  @media ${QUERIES.laptopAndUp} {
    text-align: revert;
    /* width: 200px; */
  }
`;
const Color = styled.span`
  color: var(--color-accentPink);
  font-weight: bolder;
`;

const SocialLinks = styled.div`
  display: flex;
  position: relative;
  height: 40px;
  justify-content: space-between;
  @media ${QUERIES.laptopAndUp} {
    width: 200px;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  margin-bottom: 1.5rem;
  & img {
    display: block;
    width: 40px;
  }
`;

const ActionButton = styled.button`
  width: 100%;
  margin: 0 auto;
  background-color: var(--color-primary);
  outline: none;
  border: 3px solid var(--color-accentPink);
  padding: 0.5rem 0;
  color: var(--color-textPrimary);
  font-size: 1.5rem;
  font-family: var(--font-primary);
  font-weight: 500;
  margin-bottom: 1.5rem;
  @media ${QUERIES.tabletAndUp} {
    padding-left: 1rem;
  }
  @media ${QUERIES.laptopAndUp} {
    width: 200px;
  }
`;

export default Home;
