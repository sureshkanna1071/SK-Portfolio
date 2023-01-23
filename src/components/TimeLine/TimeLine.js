import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {

  return (
    <Section id='about'>
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      MERN stack developer, motivated and eager to work in tech-based companies. Love to learn new skills and implement them. Interested in building interactive, real-life projects and contributing to the tech community.
      </SectionText>
    </Section>
  );
};

export default Timeline;
