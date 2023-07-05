import { styled } from 'styled-components';

import QuestionList from '../components/QuestionList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Aside from '../components/Aside';

const HomeContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const HomeContent = styled.div`
  display: flex;
`;

const HomeMain = styled.div`
  width: 720px;
  flex: 1;
`;

const HomeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AskButton = styled.div`
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  font-size: 13px;
  padding: 0.8em;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-weight: normal;
  line-height: calc((13+2) / 13);
  position: relative;
  outline: none;
  text-align: center;
  text-decoration: none;
  user-select: none;
`;

export default function HomePage() {
  return (
    <div>
      <Header />
      <HomeContainer>
        <Nav />
        <HomeContent>
          <HomeMain>
            <HomeHeader>
              <h1>Top Questions</h1>
              <AskButton>
                <a href="/questions/ask"> Ask Question </a>
              </AskButton>
            </HomeHeader>
            <QuestionList />
            <br />
            <h2>
              Looking for more? Browse the complete list of questions, or
              popular tags. Help us answer unanswered questions.
            </h2>
          </HomeMain>
          <Aside />
        </HomeContent>
      </HomeContainer>
      <Footer />
    </div>
  );
}
