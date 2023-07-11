import { styled } from 'styled-components';

import QuestionList from '../components/QuestionList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Lside from '../components/Lside';
import Aside from '../components/Aside';

const HomeContainer = styled.div`
  margin-top: 0;
`;

const HomeMainHeader = styled.div`
  display: flex !important;
`;

const H1 = styled.h1`
  font-size: 2.07692308rem !important;
  flex: 1 auto !important;
  font-weight: unset;
`;

const AskButtonContainer = styled.div`
  margin-left: 12px !important;
`;

const AskButtonA = styled.a`
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  white-space: nowrap !important;
`;

const QuestionListContainer = styled.div`
  clear: both;
  margin-left: -24px;
  border-top: 1px solid hsl(210, 8%, 85%);
`;

const InnerContainer = styled.div`
  margin-bottom: 30px;
`;

const Br = styled.br`
  clear: both !important;
`;

const H2 = styled.h2`
  font-weight: 400;
`;

export default function HomePage() {
  return (
    <div>
      <Header />
      <HomeContainer className="body-container">
        <Lside />
        <div className="content">
          <div className="mainbar">
            <HomeMainHeader>
              <H1>Top Questions</H1>
              <AskButtonContainer>
                <AskButtonA className="ask-button" href="/questions/ask">
                  {' '}Ask Question{' '}
                </AskButtonA>
              </AskButtonContainer>
            </HomeMainHeader>
            <QuestionListContainer>
              <InnerContainer>
                <QuestionList />
              </InnerContainer>
            </QuestionListContainer>
            <Br />
            <H2 className="bottom-notice">
              Looking for more? Browse the{' '}
              <a href='/questions'>complete list of questions</a>
              , or{' '}
              <a href='/tags'>popular tags</a>
              . Help us answer unanswered questions.
            </H2>
          </div>
          <Aside />
        </div>
      </HomeContainer>
      <Footer />
    </div>
  );
}
