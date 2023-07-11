import { styled } from 'styled-components';

import QuestionList from '../components/QuestionList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Lside from '../components/Lside';
import Aside from '../components/Aside';

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

const HomeContainer = styled.div`
  margin-top: 0;
  font-family: 'Source Sans Pro',sans-serif;
  font-weight: normal;
  max-width: 100% !important;
  width: 100% !important;
`;

const HomeContent = styled.div`
  border-left-width: 0;
  max-width: 100% !important;
  width: 100% !important;
  padding: 0 !important;
  background-color: hsl(210,8%,97.5%) !important;
`;

const HomeHeader = styled.header`
  max-width: 1950px;
  margin-left: auto;
  margin-right: auto;
  position: relative !important;
  text-align: center !important;
  padding: 48px !important;
  border-top-left-radius: 7px !important;
  border-top-right-radius: 7px !important;
`;

const HomeHeaderInnerContainer = styled.div`
  background: linear-gradient(180deg, hsl(210,8%,15%) 0%, hsl(210,8%,35%) 130%);
  z-index: 25 !important;
  position: relative !important;
  padding: 32px !important;
  padding-bottom: 128px !important;
  margin-bottom: -128px !important;
  color: hsl(210,8%,97.5%) !important;
  border-radius: 7px !important;
`;

const HomeHeaderItemContainer = styled.div`
  max-width: calc(97.2307692rem / 12 * 9) !important;
  display: flex !important;
  margin-left: auto !important;
  margin-right: auto !important;
`;

const HomeHeaderItemInnerContainer = styled.div`
  flex-basis: 50%;
  padding: 16px !important;
`;

const HomeHeaderLeftItemContainer = styled.div`
  height: 100% !important;
  position: relative !important;
  padding: 24px !important;
  background-color: hsl(27,95%,90%) !important;
  color: hsl(210,8%,15%) !important;
  border-bottom-left-radius: 7px !important;
  border-bottom-right-radius: 7px !important;
`;

const HomeHeaderLeftItemA = styled.a`
  font-family: 'Source Sans Pro Bold',sans-serif;
  font-weight: 700;
  max-width: calc(97.2307692rem / 12 * 2) !important;
  width: 100% !important;
  font-size: 1.15384615rem !important;
  padding-left: 32px !important;
  padding-right: 32px !important;
  margin-top: auto !important;
  color: hsl(0,0%,100%) !important;
  background-color: hsl(27,90%,50%) !important;
  border-radius: 5px !important;
  box-shadow: none;
`;

const HomeHeaderRightItemContainer = styled.div`
  height: 100% !important;
  position: relative !important;
  padding: 24px !important;
  background-color: hsl(206,96%,90%) !important;
  color: hsl(210,8%,15%) !important;
  border-bottom-left-radius: 7px !important;
  border-bottom-right-radius: 7px !important;
`;

const HomeHeaderRightItemA = styled.a`
  font-family: 'Source Sans Pro Bold',sans-serif;
  font-weight: 700;
  max-width: calc(97.2307692rem / 12 * 2) !important;
  width: 100% !important;
  font-size: 1.15384615rem !important;
  padding-left: 32px !important;
  padding-right: 32px !important;
  margin-top: auto !important;
  color: hsl(0,0%,100%) !important;
  background-color: hsl(206,100%,52%) !important;
  border-radius: 5px !important;
  box-shadow: none;
`;

const Svg = styled.svg`
  margin-bottom: 16px !important;
  color: hsl(27, 90%, 50%) !important;
  vertical-align: bottom;
`;

const HomeHeaderH1 = styled.h1`
  font-family: 'Roboto Slab Bold',serif;
  font-weight: 700;
  z-index: 30 !important;
  overflow: hidden !important;
  position: relative !important;
  font-size: 4.23076923rem !important;
  padding-bottom: 64px !important;
  padding-top: 64px !important;
  margin-bottom: 0 !important;
`;

const HomeHeaderH2 = styled.h2`
  font-size: 1.46153846rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  font-weight: normal;
`;


export default function HomePage() {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div>
      <Header />
      {isLoggedIn ? (
      <div className="body-container">
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
      </div>
      ) : (
      <HomeContainer className="body-container">
        <HomeContent className='content'>
          <HomeHeader>
            <HomeHeaderInnerContainer>
              <HomeHeaderItemContainer>
                <HomeHeaderItemInnerContainer>
                  <HomeHeaderLeftItemContainer>
                    <Svg width="48" height="48" viewBox="0 0 48 48">
                      <path d="M29.22 38.1a3.4 3.4 0 0 1 4.81-4.82l8.81 8.81a3.4 3.4 0 0 1-4.81 4.81l-8.81-8.8Z" opacity=".2"></path>
                      <path d="M18.5 5a1 1 0 1 0 0 2c.63 0 1.24.05 1.84.15a1 1 0 0 0 .32-1.98A13.6 13.6 0 0 0 18.5 5Zm7.02 1.97a1 1 0 1 0-1.04 1.7 11.5 11.5 0 0 1 5.44 8.45 1 1 0 0 0 1.98-.24 13.5 13.5 0 0 0-6.38-9.91ZM18.5 0a18.5 18.5 0 1 0 10.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1 0 44.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0 0 18.5 0ZM2 18.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0Zm29.58 15.2a1.5 1.5 0 1 1 2.12-2.12l9.83 9.83a1.5 1.5 0 1 1-2.12 2.12l-9.83-9.83Z"></path>
                    </Svg>
                    <HomeHeaderH2>
                      Find the best answer to your technical question, help others answer theirs
                    </HomeHeaderH2>
                    <HomeHeaderLeftItemA className='button' href="/users/signup">Join the community</HomeHeaderLeftItemA>
                  </HomeHeaderLeftItemContainer>
                </HomeHeaderItemInnerContainer>
                <HomeHeaderItemInnerContainer>
                  <HomeHeaderRightItemContainer>
                  <Svg width="48" height="48" viewBox="0 0 48 48">
                    <path d="M12 22a2 2 0 0 0-2 2v19a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V26a4 4 0 0 0-4-4H12Zm6 7a5 5 0 1 1 7.67 4.23l.05.35c.15.84.36 1.8.61 2.86A2.06 2.06 0 0 1 24.35 39h-2.7a2.06 2.06 0 0 1-1.98-2.56c.29-1.2.52-2.3.66-3.2l-.19-.14A5 5 0 0 1 18 29Z" opacity=".2"></path>
                    <path d="M23 24a5 5 0 0 0-2.86 9.1l.2.13c-.15.91-.38 2-.67 3.21A2.06 2.06 0 0 0 21.65 39h2.7c1.32 0 2.3-1.26 1.98-2.56a46.74 46.74 0 0 1-.6-2.86l-.06-.35A5 5 0 0 0 23 24Zm0 2a3 3 0 0 1 1.76 5.43l-.16.11a2 2 0 0 0-.91 2c.16.98.4 2.12.7 3.37.01.05-.02.09-.04.09h-2.7c-.02 0-.05-.04-.04-.09.3-1.25.54-2.4.7-3.36a2 2 0 0 0-.78-1.92l-.13-.09A3 3 0 0 1 23 26ZM12 12.44V18H9a3 3 0 0 0-3 3v21a3 3 0 0 0 3 3h28a3 3 0 0 0 3-3V21a3 3 0 0 0-3-3h-3v-5.56C34 6.2 29.36 1 23 1S12 6.19 12 12.44ZM23 3c5.14 0 9 4.18 9 9.44V18H14v-5.56C14 7.18 17.86 3 23 3ZM9 20h28a1 1 0 0 1 1 1v21a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V21a1 1 0 0 1 1-1Z"></path>
                  </Svg>
                  <HomeHeaderH2>
                    Want a secure, private space for your technical knowledge?
                  </HomeHeaderH2>
                  <HomeHeaderRightItemA className='button'>Discover Teams</HomeHeaderRightItemA>
                  </HomeHeaderRightItemContainer>
                </HomeHeaderItemInnerContainer>
              </HomeHeaderItemContainer>
              <HomeHeaderH1>
                {' '}Every developer has a{' '}
                <br />
                {' '}tab open to Stack Overflow{' '}
              </HomeHeaderH1>
            </HomeHeaderInnerContainer>
          </HomeHeader>
        </HomeContent>
      </HomeContainer>
      )}
      <Footer />
    </div>
  );
}
