import { styled } from 'styled-components';

import logo from '../images/footerlogo.png';

const FooterWrapper = styled.footer`
  background-color: #232629;
  display: flex;
  align-items: center;
  padding: 30px;
  width: 100%;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 32px;
  height: 37px;
  margin-right: 1rem;
  margin-bottom: 13rem;
`;

const Nav = styled.nav`
  color: white;
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  margin-bottom: 1rem;
  flex: 1 0 auto;
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #babfc4;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 0.9rem;
  padding: 0.2rem 0;
  color: #9199a1; /* 9199A1 */
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

const SocialLink = styled.a`
  font-size: 0.7rem;
  margin-right: 0.5rem;
  color: #9199a1; /* 9199A1 */
`;

const CopyRight = styled.p`
  font-size: 0.6rem;
  color: #9199a1; /* 9199A1 */
  margin-top: 12rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <LogoImage src={logo} alt="Stack Overflow" />
      <Nav>
        <Section>
          <Title>STACK OVERFLOW</Title>
          <List>
            <ListItem>Questions</ListItem>
            <ListItem>Help</ListItem>
          </List>
        </Section>
        <Section>
          <Title>PRODUCTS</Title>
          <List>
            <ListItem>Teams</ListItem>
            <ListItem>Advertising</ListItem>
            <ListItem>Collectives</ListItem>
            <ListItem>Talent</ListItem>
          </List>
        </Section>
        <Section>
          <Title>COMPANY</Title>
          <List>
            <ListItem>About</ListItem>
            <ListItem>Press</ListItem>
            <ListItem>Work Here</ListItem>
            <ListItem>Legal</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Terms of Service</ListItem>
            <ListItem>Contact Us</ListItem>
            <ListItem>Cookie Settings</ListItem>
            <ListItem>Cookie Policy</ListItem>
          </List>
        </Section>
        <Section>
          <Title>STACK EXCHANGE NETWORK</Title>
          <List>
            <ListItem>Technology</ListItem>
            <ListItem>Culture & recreation</ListItem>
            <ListItem>Life & arts</ListItem>
            <ListItem>Science</ListItem>
            <ListItem>Professional</ListItem>
            <ListItem>Business</ListItem>
            <ListItem>API</ListItem>
            <ListItem>Data</ListItem>
          </List>
        </Section>
        <Section>
          <SocialLinks>
            <SocialLink href="#">Blog</SocialLink>
            <SocialLink href="#">Facebook</SocialLink>
            <SocialLink href="#">Twitter</SocialLink>
            <SocialLink href="#">LinkedIn</SocialLink>
            <SocialLink href="#">Instagram</SocialLink>
          </SocialLinks>
          <CopyRight>
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under CC BY-SA. rev 2023.6.16.43501
          </CopyRight>
        </Section>
      </Nav>
    </FooterWrapper>
  );
}
