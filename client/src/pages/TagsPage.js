import {styled} from 'styled-components';

import Header from '../components/Header';
import LeftSide from '../components/LeftSide';
import Footer from '../components/Footer';
import TagsBoard from '../components/TagsBoard';

const MainContainer = styled.div`
  width: 100%;
  padding: 0;
`;

const H1 = styled.h1`
  font-size: 2.07692308rem !important;
  margin-bottom: 16px !important;
  font-weight: unset;
`;

const P = styled.p`
  max-width: calc(97.2307692rem / 2) !important;
  font-size: 1.15384615rem !important;
  margin-bottom: 16px !important;
`;

export default function TagsPage() {
  return (
    <div>
      <Header />
      <div className="body-container">
        <LeftSide />
        <div className="content">
          <MainContainer>
            <H1>{' '}Tags{' '}</H1>
            <P>
              {' '}A tag is a keyword or label that categorizes your question with other,{' '}
              similar questions. Using the right tags makes it easier for others to find{' '}
              and answer your question.{' '}
            </P>
            <div>
              <TagsBoard />
            </div>
          </MainContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
