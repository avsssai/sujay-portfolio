import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroText = styled(motion.h1)`
  font-size: 20px;
  color: var(--color-textPrimary);
  font-family: var(--font-secondary);
`;

const PinkIntroText = styled(IntroText)`
  color: var(--color-accentPink);
  margin-left: 2px;
`;

export default function Intro() {
  return (
    <Wrapper>
      <IntroText>Content management.</IntroText>
      <PinkIntroText
        animate={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0, translateY: -10 }}
        transition={{ duration: 1 }}
      >
        {' '}
        Done Right.
      </PinkIntroText>
    </Wrapper>
  );
}
