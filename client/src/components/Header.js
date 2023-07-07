import { useState } from 'react';
import { styled } from 'styled-components';

import hamburger from '../images/hamburger.jpg';

const HeaderContainer = styled.header`
  position: fixed !important;
  left: 0 !important;
  top: 0 !important;
`;

const InnerContainer = styled.div`
  width: 97.2307692rem;
  max-width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

const LogoSpan = styled.span`
  margin-left: 0;
  width: 150px;
  height: 30px;
  margin-top: -4px;
  background-image: url(https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27);
  display: inline-block;
  text-indent: -9999em;
  background-position: 0 -500px;
`;

const A = styled.a`
`;

const Form = styled.form`
  padding: 0 8px;
  display: flex;
  align-items: center;
  flex-shrink: 10000;
  flex-grow: 1;
`;

const InputContainer = styled.div`
  position: relative;
  flex-grow: 1;
`;

const Input = styled.input`
  border-color: hsl(210, 8%, 75%);
  background-color: hsl(0, 0%, 100%);
  color: hsl(210, 8%, 25%);
  display: block;
  line-height: calc((13+2)/13);
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  cursor: unset;
  font-size: 13px;
  opacity: unset;
  padding: 0.6em 0.7em 0.6em 0.7em;
  font-family: inherit;
  margin: 0;
  width: 100%;
`;

const Nav = styled.nav`
  height: 100% !important;
  overflow-x: auto !important;
  padding-right: 12px !important;
  margin-left: auto !important;
`;

const NavLi = styled.li`
  display: inline-flex;
`;

const LoginA = styled.a`
  background-color: hsl(205, 46%, 92%);
  color: hsl(205, 47%, 42%);
  align-self: center;
  padding-top: 8px;
  padding-bottom: 8px;
  border-color: hsl(205,41%,63%);
  box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,0.7);
  white-space: nowrap !important;
`;

const SignupA = styled.a`
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  align-self: center;
  padding-top: 8px;
  padding-bottom: 8px;
  white-space: nowrap !important;
  margin-left: 4px !important;
`;

export default function Header() {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <HeaderContainer>
      <InnerContainer>
        <a className='header-button' href="/users/login">
          <img src={hamburger} alt="Hamburger"/>
        </a>
        <a className='header-logo' href="/">
          <LogoSpan>Stack Overflow</LogoSpan>
        </a>
        <ol className='navigation'>
          <li><A className='navigation-item'>About</A></li>
          <li><A className='navigation-item'>Products</A></li>
          <li><A className='navigation-item'>For Teams</A></li>
        </ol>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Input name="q" type="text" role="combobox" autocomplete="off" maxlength="240"
              placeholder="Search..."
              value={keyword} onChange={(event) => setKeyword(event.target.value)}
            />
          </InputContainer>
        </Form>
        <Nav>
          <ol className='header-content'>
            <NavLi role="none"><LoginA className="button" href="/users/login">Log in</LoginA></NavLi>
            <NavLi role="none"><SignupA className="button">Sign up</SignupA></NavLi>
          </ol>
        </Nav>
      </InnerContainer>
    </HeaderContainer>
  );
}
