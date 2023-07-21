import {useState} from 'react';
import {Link} from 'react-router-dom';
import {styled} from 'styled-components';

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
  line-height: calc(15/13);
`;

const Svg = styled.svg`
  left: 0.7em;
  vertical-align: bottom;
  right: auto;
  margin-top: -9px;
  pointer-events: none;
  position: absolute;
  top: 50%;
  path {
    fill: hsl(210, 8%, 55%);
  }
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

const NavLink = styled(Link)`
  padding-left: 12px !important;
  padding-right: 12px !important;
  margin: 0 !important;
`;

const AvatarContainer = styled.div`
  padding: 0;
  overflow: hidden;
`;

const NavSvg = styled.svg`
  vertical-align: text-top;
  path {
    fill: hsl(210,8%,35%);
  }
`;

const AchievSvg = styled.svg`
  vertical-align: text-top;
  path {
    fill: hsl(140,40%,40%);
  }
`;

const LoginLink = styled(Link)`
  background-color: hsl(205, 46%, 92%);
  color: hsl(205, 47%, 42%);
  align-self: center;
  padding-top: 8px;
  padding-bottom: 8px;
  border-color: hsl(205,41%,63%);
  box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,0.7);
  white-space: nowrap !important;

  &:hover {
    background-color: hsl(205,57%,81%);
    color: hsl(205, 47%, 42%);
  }
`;

const SignupLink = styled(Link)`
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  align-self: center;
  padding-top: 8px;
  padding-bottom: 8px;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  white-space: nowrap !important;
  margin-left: 4px !important;

  &:hover {
    background-color: hsl(209,100%,37.5%);
    color: hsl(0, 0%, 100%);
  }
`;

export default function Header() {
  const [keyword, setKeyword] = useState('');

  const isLoggedIn = !!localStorage.getItem('token');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <HeaderContainer className='header'>
      <InnerContainer>
      {isLoggedIn ? null : (
        <Link className='menu-button'>
          <img src={hamburger} alt="Hamburger"/>
        </Link>
      )}
        <Link className='header-logo' to="/">
          <LogoSpan>Vision 0verflow</LogoSpan>
        </Link>
        {isLoggedIn ? (
          <ol className='navigation'>
            <li><Link className='navigation-item'>Products</Link></li>
          </ol>
        ) : (
          <ol className='navigation'>
            <li><Link className='navigation-item'>About</Link></li>
            <li><Link className='navigation-item'>Products</Link></li>
            <li><Link className='navigation-item'>For Teams</Link></li>
          </ol>          
        )}
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Input className="input" name="q" type="text" role="combobox" autoComplete="off"
              maxLength="240" placeholder="Search..."
              value={keyword} onChange={(event) => setKeyword(event.target.value)}
            />
            <Svg width="18" height="18" viewBox="0 0 18 18">
              <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
            </Svg>
          </InputContainer>
        </Form>
        <Nav>
        {isLoggedIn ? (
          <ol className='header-content'>
            <NavLi role="none">
              <NavLink className="header-item user-card" to="/users/1">
                <AvatarContainer className='header-avatar'>
                  <img className='header-avatar-image' alt='Vision0'
                    src='https://s3.amazonaws.com/comicgeeks/characters/avatars/1616.jpg?t=1687973152'
                  />
                </AvatarContainer>       
              </NavLink>
            </NavLi>
            <NavLi role="none">
              <Link className="header-item">
                <NavSvg width="20" height="18" viewBox="0 0 20 18">
                  <path d="M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z"></path>
                </NavSvg>
              </Link>
            </NavLi>
            <NavLi role="none">
              <Link className="header-item">
                <AchievSvg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z"></path>
                </AchievSvg>
              </Link>
            </NavLi>
            <NavLi role="none">
              <NavLink className="header-item">
                <NavSvg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z"></path>
                </NavSvg>
              </NavLink>
            </NavLi>
            <NavLi role="none">
              <NavLink className="header-item" to='/users/logout'>
                <NavSvg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
                </NavSvg>
              </NavLink>
            </NavLi>
          </ol>
        ) : (
          <ol className='header-content'>
            <NavLi role="none"><LoginLink className="header-button" to="/users/login">Log in</LoginLink></NavLi>
            <NavLi role="none"><SignupLink className="header-button">Sign up</SignupLink></NavLi>
          </ol>
        )}
        </Nav>
      </InnerContainer>
    </HeaderContainer>
  );
}
