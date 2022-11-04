import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import Header from '../components/Header';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { Twitter, Facebook, Linkedin, Instagram } from 'react-feather';
import Footer from '../components/Footer/Footer';

const Home: NextPage = () => {
  return (
    <>
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
          <ActionButton>Hire Me</ActionButton>
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
    </>
  );
};

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
  font-size: clamp(1.5vw, 54px, 64px);
  color: var(--color-accentPink);
  font-family: var(--font-secondary);
  font-weight: 400;
  line-height: 1.3;
  &:last-of-type {
    margin-bottom: 0.5rem;
  }
`;

const Title = styled.div`
  font-family: var(--font-primary);
  color: var(--color-textPrimary);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Band = styled.h4`
  font-family: var(--font-primary);
  color: var(--color-textPrimary);
  font-weight: normal;
  margin-bottom: 1.5rem;
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
  font-family: var(--font-secondary);
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export default Home;
