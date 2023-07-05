import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import { rootUrl } from '../config';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const QuestionContainer = styled.div`
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

const QuestionContent = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  background-color: hsl(0, 0%, 100%);
  border-radius: 0;
  border: 1px solid hsl(210, 8%, 85%);
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding: 24px;
  box-sizing: border-box;
`;

const QuestionHeader = styled.div`
  flex-flow: row nowrap;
  justify-content: space-between;
  display: flex !important;
`;

const QuestionMain = styled.div`
  width: 100%;
  float: none;
  margin: 0;
  padding: 0;
  vertical-align: top;
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

export default function QuestionPage() {
  const { questionId } = useParams();
  const [question, setQuestion] = useState(null);

  const questionUrl = `${rootUrl}/questions/${questionId}`;

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(questionUrl);
        const data = await response.json();
        setQuestion(data);
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    fetchQuestion();
  }, [questionId]);

  return (
    <div>
      <Header />
      <QuestionContainer>
        <Nav />
        <QuestionContent>
          <QuestionHeader>
            <div>
              <h1>{question?.title}</h1>
            </div>
            <AskButton>
              <a href="/questions/ask"> Ask Question </a>
            </AskButton>
          </QuestionHeader>
          <QuestionMain>
            <div>
              <p>{question?.content}</p>
            </div>
          </QuestionMain>
        </QuestionContent>
      </QuestionContainer>
      <Footer />
    </div>
  );
}
