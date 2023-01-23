import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = function() {

  return (
    <>
    <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi. I'm Suresh kanna <br />
        Fullstack web developer
      </SectionTitle>
      <SectionText>
      Aspiring web developer with a flair for creating elegant solutions. Enthusiastic about learning new skills and implementing and launching new websites.
      </SectionText>
      <Button onClick={() => window.location = "mailto:sureshkanna.p1071@gmail.com"}>Contact me</Button>
    </LeftSection>
  </Section>
  </>
  )

};

export default Hero;