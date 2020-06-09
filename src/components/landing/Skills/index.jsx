import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Mitch and I’m a junior full-stack web developer from beautiful Vancouver, BC" />
      </Thumbnail>
      <Details>
        <h2>About</h2>
        <p>I am a full stack developer with a background in digital design obsessed with creating beautiful web applications. My design knowledge helps me code and problem solve with a more holistic approach to user experience. I'm passionate about advocating for accessibility best practices ad exposing gender bias in the industry.</p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
