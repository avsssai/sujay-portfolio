import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import Header from '../components/Header';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { Twitter, Facebook, Linkedin, Instagram } from 'react-feather';
import Footer from '../components/Footer/Footer';
import Intro from '../components/Intro';
import { motion } from 'framer-motion';

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
        <ImageContainer>
          <Image src="/baba-bust.svg" alt="An image of Sujay" layout="fill" />
        </ImageContainer>
        <TextContainer>
          <Name>Sujayendra</Name>
          <Name>Krishna N</Name>
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

const IntroWrapper = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 10;
  background-color: var(--color-primary);
  opacity: 0;
`;

const ImageContainer = styled.div`
  height: 375px;
  width: 350px;
  position: relative;
  display: block;
  margin: auto;
  margin-bottom: 1.5rem;

  & > img {
    margin-left: -100px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 0.1rem 1rem;
  margin-bottom: 1.5rem;
`;

const Name = styled.h1`
  font-size: clamp(2vw, 84px, 128px);

  color: var(--color-textPrimary);
  font-family: var(--font-primary);
  font-weight: 400;
  line-height: 0.8;
  &:last-of-type {
    margin-bottom: 0.5rem;
    color: var(--color-accentPink);
    text-align: center;
  }
`;

const Title = styled.div`
  font-family: var(--font-secondary);
  color: var(--color-textPrimary);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Band = styled.h4`
  font-family: var(--font-secondary);
  color: var(--color-textPrimary);
  font-weight: normal;
  margin-bottom: 1.5rem;
  font-size: 12px;
  text-align: center;
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
`;

export default Home;
