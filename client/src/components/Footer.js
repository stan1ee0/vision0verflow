import {Link} from 'react-router-dom';
import {styled} from 'styled-components';

const LogoContainer = styled.div`
  flex: 0 0 64px;
  margin: -12px 0 32px 0;
`;

const Svg = styled.svg`
  vertical-align: bottom;
`;

const ColumnContainer = styled.div`
  padding: 0 12px 24px 0;
  flex: 1 0 auto;
`;

const H5 = styled.h5`
  margin-top: 0;
  font-size: 100%;
`;

const TitleLink = styled(Link)`
  color: hsl(210,8%,75%);
  text-decoration: none;

  &:hover {
    color: hsl(210,8%,75%);
  }
`;

const Ul = styled.ul`
  margin: 0;
  list-style: none;
`;

const Li = styled.li`
  margin-top: 16px;
`;

const FooterLink = styled(Link)`
  &:hover {
    color: hsl(210,8%,65%);
  }
`;

const CopyrightContainer = styled.div`
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
  font-size: 11px !important;
`;

const CopyrightLi = styled.li`
  margin-left: 12px;
`;

const P = styled.p`
  margin-top: auto;
  margin-bottom: 24px;
`;

const Span = styled.span`
  text-decoration: underline !important;
`;

const CopyrightLink = styled(Link)`
  line-height: inherit;
  color: hsl(210,8%,60%);
  padding: 0;

  &:hover {
    color: hsl(210,8%,60%);
  }
`;

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <LogoContainer>
          <Link to='/'>
            <Svg width="32" height="37" viewBox="0 0 32 37">
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
              <path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="#F48024"></path>
            </Svg>
          </Link>
        </LogoContainer>
        <nav className='footer-nav'>
          <ColumnContainer>
            <H5 className='footer-title'>
              <TitleLink to='/'>Stack Overflow</TitleLink>
            </H5>
            <Ul>
              <li><FooterLink className='footer-link' to='/questions'>Questions</FooterLink></li>
              <li><FooterLink className='footer-link'>Help</FooterLink></li>
            </Ul>
          </ColumnContainer>
          <ColumnContainer>
            <H5 className='footer-title'>
              <TitleLink>Products</TitleLink>
            </H5>
            <Ul>
              <li><FooterLink className='footer-link'>Teams</FooterLink></li>
              <li><FooterLink className='footer-link'>Advertising</FooterLink></li>
              <li><FooterLink className='footer-link'>Collectives</FooterLink></li>
              <li><FooterLink className='footer-link'>Talent</FooterLink></li>
            </Ul>
          </ColumnContainer>
          <ColumnContainer>
            <H5 className='footer-title'>
              <TitleLink>Company</TitleLink>
            </H5>
            <Ul>
              <li><FooterLink className='footer-link'>About</FooterLink></li>
              <li><FooterLink className='footer-link'>Press</FooterLink></li>
              <li><FooterLink className='footer-link'>Work Here</FooterLink></li>
              <li><FooterLink className='footer-link'>Legal</FooterLink></li>
              <li><FooterLink className='footer-link'>Privacy Policy</FooterLink></li>
              <li><FooterLink className='footer-link'>Terms of Service</FooterLink></li>
              <li><FooterLink className='footer-link'>Contact Us</FooterLink></li>
              <li><FooterLink className='footer-link'>Cookie Settings</FooterLink></li>
              <li><FooterLink className='footer-link'>Cookie Policy</FooterLink></li>
            </Ul>
          </ColumnContainer>
          <ColumnContainer>
            <div>
              <H5 className='footer-title'>
                <TitleLink>Stack Exchange Network</TitleLink>
              </H5>
              <Ul>
                <li><FooterLink className='footer-link'>Technology</FooterLink></li>
                <li><FooterLink className='footer-link'>Culture & recreation</FooterLink></li>
                <li><FooterLink className='footer-link'>Life & arts</FooterLink></li>
                <li><FooterLink className='footer-link'>Science</FooterLink></li>
                <li><FooterLink className='footer-link'>Professional</FooterLink></li>
                <li><FooterLink className='footer-link'>Business</FooterLink></li>
                <Li><FooterLink className='footer-link'>API</FooterLink></Li>
                <li><FooterLink className='footer-link'>Data</FooterLink></li>
              </Ul>
            </div>
          </ColumnContainer>
        </nav>
        <CopyrightContainer>
          <ul className='footer-copyright'>
            <li><FooterLink className='footer-link'>Blog</FooterLink></li>
            <CopyrightLi><FooterLink className='footer-link'>Facebook</FooterLink></CopyrightLi>
            <CopyrightLi><FooterLink className='footer-link'>Twitter</FooterLink></CopyrightLi>
            <CopyrightLi><FooterLink className='footer-link'>LinkedIn</FooterLink></CopyrightLi>
            <CopyrightLi><FooterLink className='footer-link'>Instagram</FooterLink></CopyrightLi>
          </ul>
          <P>
            {' '}Site design / logo © 2023 Stack Exchange Inc; user contributions licensed under{' '}
            <Span><CopyrightLink>CC BY-SA</CopyrightLink></Span>
            .{' '}
            <span>rev&nbsp;2023.7.20.43540</span>
          </P>
        </CopyrightContainer>
      </div>
    </div>
  );
}
