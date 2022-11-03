import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import Header from '../components/Header';
import MaxWidthWrapper from '../components/MaxWidthWrapper';

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
        </TextContainer>
      </MaxWidthWrapper>
    </>
  );
};

const ImageContainer = styled.div`
  height: 350px;
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
  padding: 0 1rem;
`;

const Name = styled.h1`
  font-size: 64px;
  color: var(--color-accentPink);
  font-family: var(--font-primary);
  font-weight: 400;
  line-height: 1.3;
  &:last-of-type {
    margin-bottom: 1rem;
  }
`;

const Title = styled.div`
  font-family: var(--font-secondary);
  color: var(--color-textPrimary);
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const Band = styled.h4`
  font-family: var(--font-primary);
  color: var(--color-textPrimary);
  font-weight: normal;
`;
const Color = styled.span`
  color: var(--color-accentPink);
  font-weight: bolder;
`;

export default Home;
