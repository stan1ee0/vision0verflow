import { styled } from 'styled-components';

const NavContainer = styled.div`
  width: 164px;
  flex-shrink: 0;
  z-index: 1000;
  box-shadow: 0 0 0 hsla(210,8%,5%,0.05);
  transition: box-shadow ease-in-out .1s,transform ease-in-out .1s;
  transform: translateZ(0);
  position: relative !important;
`;

const StickyContainer = styled.div`
  position: sticky;
  width: auto;
  margin-bottom: 8px;
  overflow-y: auto;
  top: 56px;
  max-height: calc(100vh - 56px);
  padding-top: 24px;
`;

const Nav = styled.nav`
  display: block;
`;

const NavOl = styled.ol`
  padding: 0;
  margin: 0 0 12px;
  list-style: none;
`;

const NavLi = styled.li`
  position: relative !important;
`;

const HomeA = styled.a`
  font-weight: bold;
  background: hsl(210,8%,95%);
  color: hsl(210,8%,5%);
  border-right: 3px solid hsl(27, 90%, 55%);
  display: block;
  padding: 4px;
  line-height: 2;
  font-size: 13px;
  padding-left: 8px !important;
`;

const PublicLi = styled.li`
  text-transform: uppercase !important;
  color: hsl(210,8%,45%) !important;
  font-size: 11px !important;
  margin-left: 8px !important;
  margin-bottom: 4px !important;
  margin-top: 16px !important;
`;

const NavA = styled.a`
  color: hsl(210,8%,35%);
  display: block;
  padding: 4px;
  padding-left: 30px;
  line-height: 2;
  font-size: 13px;
`;

export default function LSide() {
  return (
    <NavContainer>
      <StickyContainer>
        <Nav role="navigation">
          <NavOl>
            <NavLi><HomeA href="/">Home</HomeA></NavLi>
            <li>
              <NavOl>
                <PublicLi>Pubclic</PublicLi>
                <NavLi><NavA href="/questions">Questions</NavA></NavLi>
                <NavLi><NavA>Tags</NavA></NavLi>
                <NavLi><NavA>Users</NavA></NavLi>
              </NavOl>
            </li>
          </NavOl>
        </Nav>
      </StickyContainer>
    </NavContainer>
  );
}
