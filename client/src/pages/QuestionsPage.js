import { styled } from 'styled-components';

import QuestionList from '../components/QuestionList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LSide from '../components/LSide';
import ASide from '../components/ASide';

const QuestionsContainer = styled.div`
  margin-top: 0;
  max-width: 1264px;
  width: 100%;
  background: none;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  flex: 1 0 auto;
  text-align: left;
`;

const QuestionsContent = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  background-color: hsl(0,0%,100%);
  border-radius: 0;
  border: 1px solid hsl(210,8%,85%);
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding: 24px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const QuestionsMain = styled.div`
  width: calc(100% - 300px - 24px);
  float: left;
  margin: 0;
  padding: 0;
`;

const QuestionsHeader = styled.div`
  display: flex !important;
  margin-bottom: 12 !important;
  flex-wrap: wrap !important;
`;

const H1 = styled.h1`
  font-size: 2.07692308rem !important;
  margin-bottom: 12 !important;
  margin-right: 12 !important;
  flex: 1 auto !important;
  line-height: 1.3;
  margin: 0 0 1em;
`;

const AskButtonContainer = styled.div`
  margin-bottom: 12px !important;
`;

const A = styled.a`
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

const QuestionListContainer = styled.div`
  width: auto;
  float: none;
  margin-bottom: 20px;
  clear: both;
  margin-left: -16px;
  margin-right: -16px;
  border-top: 1px solid hsl(210,8%,85%);
`;

export default function QuestionsPage() {
  return (
    <div>
      <Header />
      <QuestionsContainer>
        <LSide />
        <QuestionsContent>
          <QuestionsMain>
            <QuestionsHeader>
              <H1>All Qeustions</H1>
              <AskButtonContainer>
                <A href="/questions/ask"> Ask Question </A>
              </AskButtonContainer>
            </QuestionsHeader>
            <QuestionListContainer>
              <QuestionList />
            </QuestionListContainer>
          </QuestionsMain>
          <ASide />
        </QuestionsContent>
      </QuestionsContainer>
      <Footer />
    </div>
  );
}
