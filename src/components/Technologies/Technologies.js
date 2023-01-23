import React from 'react';
import { DiFirebase, DiReact, DiHtml5, DiCss3, DiJavascript1, DiBootstrap, DiJqueryLogo, DiNodejsSmall, DiMongodb, DiMysql } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My key skills are
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>HTML</ListTitle>
        </ListContainer>
      </ListItem>
        <ListItem>
        <DiCss3 size="3rem" />
        <ListContainer>
          <ListTitle>CSS</ListTitle>
        </ListContainer>
      </ListItem>
        <ListItem>
        <DiJavascript1 size="3rem" />
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
        </ListContainer>
      </ListItem>
        <ListItem>
        <DiJqueryLogo size="3rem" />
        <ListContainer>
          <ListTitle>Jquery</ListTitle>
        </ListContainer>
      </ListItem>
        <ListItem>
        <DiBootstrap size="3rem" />
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
        </ListContainer>
      </ListItem>
        <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Node.js</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>MongoDB</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMysql size="3rem" />
        <ListContainer>
          <ListTitle>MySQL</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React.js</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
