import {styled} from 'styled-components';

import Header from '../components/Header';
import LeftSide from '../components/LeftSide';
import Footer from '../components/Footer';
import UsersBoard from '../components/UsersBoard';

const MainContainer = styled.div`
  width: 100%;
  padding: 0;
`;

const H1 = styled.h1`
  font-size: 2.07692308rem !important;
  margin-bottom: 24px !important;
  font-weight: unset;
`;

export default function UsersPage() {
  return (
    <div>
      <Header />
      <div className="body-container">
        <LeftSide />
        <div className="content">
          <MainContainer>
            <H1>{' '}Users{' '}</H1>
            <div>
              <UsersBoard />
            </div>
          </MainContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
