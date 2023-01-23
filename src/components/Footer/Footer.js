import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
       <LinkColumn>
        <LinkTitle>call</LinkTitle>
        <LinkItem href="tel:7397429428">+91 7397429428</LinkItem>
       </LinkColumn>
       <LinkColumn>
        <LinkTitle>E-mail</LinkTitle>
        <LinkItem href="mailto:sureshkanna.p1071@gmail.com">sureshkanna.p1071@gmail.com</LinkItem>
       </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Ready to work on amazing projects.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/sureshkanna1071?tab=repositories'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/suresh-kanna-403793227/'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
