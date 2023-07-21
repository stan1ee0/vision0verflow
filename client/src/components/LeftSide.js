import {Link, useLocation} from 'react-router-dom';
import {styled, css} from 'styled-components';

const LeftSideContainer = styled.div`
  position: relative !important;
`;

const NavOl = styled.ol`
  padding: 0;
  margin: 0 0 12px;
  list-style: none;
`;

const NavLi = styled.li`
  position: relative !important;
`;

const HomeLink = styled(Link)`
  display: block;
  padding: 4px;
  line-height: 2;
  font-size: 13px;
  padding-left: 8px !important;
  color: hsl(210, 8%, 35%);

  &:hover {
    color: hsl(210, 8%, 5%);
  }

  ${props =>
    props.highlight && css`
      font-weight: bold;
      background: hsl(210, 8%, 95%);
      color: hsl(210, 8%, 5%);
      border-right: 3px solid hsl(27, 90%, 55%);
    `}
`;

const PublicLi = styled.li`
  text-transform: uppercase !important;
  color: hsl(210, 8%, 45%) !important;
  font-size: 11px !important;
  margin-left: 8px !important;
  margin-bottom: 4px !important;
  margin-top: 16px !important;
`;

const QuestionsLink = styled(Link)`
  display: flex;
  padding: 8px 6px 8px 0;
  line-height: 2;
  font-size: 13px;
  padding-left: 8px !important;
  color: hsl(210, 8%, 35%);

  &:hover {
    color: hsl(210, 8%, 5%);
    path {
      fill: hsl(210, 8%, 5%);
    }
  }

  ${props =>
    props.highlight && css`
      font-weight: bold;
      background: hsl(210, 8%, 95%);
      color: hsl(210, 8%, 5%);
      border-right: 3px solid hsl(27, 90%, 55%);
    `}
`;

const Svg = styled.svg`
  flex-shrink: 0;
  margin-top: -1px;
  margin-right: 4px;
  vertical-align: bottom;
  path {
    fill: hsl(210, 8%, 55%);
  }
`;

const QuestionsSpan = styled.span`
  line-height: calc(17 / 13);
`;

const NavLink = styled(Link)`
  display: block;
  padding: 4px;
  padding-left: 30px;
  line-height: 2;
  font-size: 13px;
  color: hsl(210, 8%, 35%);

  &:hover {
    color: hsl(210, 8%, 5%);
  }
`;

export default function LeftSide() {
  const activePath = useLocation().pathname;

  return (
    <LeftSideContainer className="left-sidebar">
      <div className='sticky-container'>
        <nav role="navigation">
          <NavOl>
            <NavLi>
              <HomeLink to="/" highlight={activePath === '/'}>Home</HomeLink>
            </NavLi>
            <li>
              <NavOl>
                <PublicLi>Public</PublicLi>
                <NavLi>
                  <QuestionsLink to="/questions" highlight={activePath === '/questions'}>
                    <Svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
                      <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path>
                    </Svg>
                    <QuestionsSpan>Questions</QuestionsSpan>
                  </QuestionsLink>
                </NavLi>
                <NavLi><NavLink>Tags</NavLink></NavLi>
                <NavLi><NavLink>Users</NavLink></NavLi>
              </NavOl>
            </li>
          </NavOl>
        </nav>
      </div>
    </LeftSideContainer>
  );
}
