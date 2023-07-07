import { styled } from 'styled-components';

const HeaderContainer = styled.div`
  position: fixed !important;
  left: 0 !important;
  top: 0 !important;
  min-width: auto;
  width: 100%;
  z-index: 5050;
  background-color: hsl(0,0%,100%);
  height: 56px;
  display: flex;
  border-top: 3px solid hsl(27, 90%, 55%);
  border-bottom: 1px solid hsl(210,8%,85%);
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 97.2307692rem;
  max-width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

const LogoA = styled.a`
  padding: 0 8px;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: hsl(206,100%,40%);
  text-decoration: none;
  cursor: pointer;
`;

const Span = styled.span`
  margin-left: 0;
  width: 150px;
  height: 30px;
  margin-top: -4px;
  background-image: url(https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27);
  display: inline-block;
  text-indent: -9999em;
  background-position: 0 -500px;
`;

const Ol = styled.ol`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  padding: 2px 0;
  display: flex;
  list-style: none;
  margin: 0;
`;

const Li = styled.li`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
`;

const A = styled.a`
  color: hsl(210,8%,35%);
  background-color: none;
  font: unset;
  font-size: unset;
  padding: 6px 12px;
  white-space: nowrap
  align-items: center;
  border: none;
  border-radius: 1000px;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  position: relative;
  user-select: auto;
  text-decoration: none;
`;

const Form = styled.form`
  padding: 0 var(--su8);
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
  border-color: hsl(210,8%,75%);
  background-color: hsl(0,0%,100%);
  color: hsl(210,8%,25%);
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
  display: block;
`;

const NavOl = styled.ol`
  display: flex;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  margin-left: auto;
`;

const NavLi = styled.li`
  display: inline-flex;
`;

const LoginA = styled.a`
  background-color: hsl(205,46%,92%);
  color: hsl(205,47%,42%);
  align-self: center;
  padding-top: 8px;
  padding-bottom: 8px
  border-color: hsl(205,41%,63%);
  box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,0.7);
  white-space: nowrap !important;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 13px;
  padding: 0.8em;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-weight: normal;
  line-height: calc(15 / 13);
  position: relative;
  outline: none;
  text-align: center;
  text-decoratin: none;
  user-select: none;
`;

const SignupA = styled.a`
  background-color: hsl(206,100%,52%);
  color: hsl(0,0%,100%);
  align-self: center;
  padding-top: 8px;
  padding-bottom: 8px
  white-space: 4px !important;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,0.4);
  font-size: 13px;
  padding: 0.8em;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-weight: normal;
  line-height: calc(15 / 13);
  position: relative;
  outline: none;
  text-align: center;
  text-decoratin: none;
  user-select: none;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <InnerContainer>
        <LogoA href="/">
          <Span>Stack Overflow</Span>
        </LogoA>
        <Ol>
          <Li><A>About</A></Li>
          <Li><A>Products</A></Li>
          <Li><A>For Teams</A></Li>
        </Ol>
        <Form id="search" role="search" action="/search" autocomplete="off">
          <InputContainer>
            <Input name="q" type="text" role="combobox" placeholder="Search..." autocomplete="off" maxlength="240">
            </Input>
          </InputContainer>
        </Form>
        <Nav>
          <NavOl>
            <NavLi role="none"><LoginA href="/users/login">Log in</LoginA></NavLi>
            <NavLi role="none"><SignupA>Sign up</SignupA></NavLi>
          </NavOl>
        </Nav>
      </InnerContainer>
    </HeaderContainer>
  );
}
