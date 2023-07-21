import {Link} from 'react-router-dom';
import {styled} from 'styled-components';

import QuestionsList from '../components/QuestionsList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftSide from '../components/LeftSide';
import Aside from '../components/Aside';

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
  font-weight: unset;
`;

const AskButtonContainer = styled.div`
  margin-bottom: 12px !important;
`;

const AskButtonLink = styled(Link)`
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  white-space: nowrap !important;

  &:hover {
    background-color: hsl(209,100%,37.5%);
    color: hsl(0, 0%, 100%);
  }
`;

const QuestionListContainer = styled.div`
  clear: both;
  margin-left: -24px;
  border-top: 1px solid hsl(210, 8%, 85%);
`;

export default function QuestionsPage() {
  return (
    <div>
      <Header />
      <div className='body-container'>
        <LeftSide />
        <div className="content">
          <div className="mainbar">
            <QuestionsHeader>
              <H1>All Questions</H1>
              <AskButtonContainer>
                <AskButtonLink className="button" to="/questions/ask">
                  {' '}Ask Question{' '}
                </AskButtonLink>
              </AskButtonContainer>
            </QuestionsHeader>
            <QuestionListContainer>
              <QuestionsList />
            </QuestionListContainer>
          </div>
          <Aside />
        </div>
      </div>
      <Footer />
    </div>
  );
}
