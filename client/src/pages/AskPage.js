import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AskInput from '../components/AskInput';

const AskContainer = styled.div`
  max-width: 100%;
  justify-content: center;
  margin: 0;
  background-color: hsl(210,8%,97.5%) !important;
`;

const AskContent = styled.div`
  min-height: 750px;
  overflow: visible;
  width: 100%;
  max-width: 1264px;
  margin: 0;
  background-color: transparent;
  border-left: 0;
  border-right: 0;
  padding-top: 0 !important;
`;

const AskTopContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
`;

const AskHeadline = styled.div`
  height: 130px;
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
`;

const H1 = styled.h1`
  font-weight: 600 !important;
  font-size: 2.07692308rem; !important;
  margin-top: 24px !important;
`;

const AskDescriptionContainer = styled.div`
  width: 100% !important;
  margin-top: 16px;
`;

const AskDescriptionInnerContainer = styled.div`
  width: 100% !important;
  display: flex !important;
  margin-bottom: 16px;
  align-items: center !important;
`;

const AskDescriptionDiv = styled.div`
  width: 70% !important;
  padding: 24px;
  background-color: hsl(206, 100%, 97%);
  border-style: solid;
  border-radius: 3px;
  border-width: 1px;
`;

const H2 = styled.h2`
  font-weight: 400 !important;
  font-size: 1.61538462rem; !important;
  margin-bottom: 8px !important;
`;

const P = styled.p`
  font-size: 1.15384615rem; !important;
  margin-bottom: 0 !important;
`;

const P2 = styled.p`
  font-size: 1.15384615rem; !important;
  margin-top: 0 !important;
`;

const H5 = styled.h5`
  font-weight: 600 !important;
  margin-bottom: 8px !important;
  font-size: 100%;
`;

const Ul = styled.ul`
  margin-bottom: 0 !important;
`;

export default function AskPage() {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/users/login');
    }
  }, [navigate]);

  return !isLoggedIn ? null : (
    <div>
      <Header />
      <AskContainer className='body-container'>
        <AskContent className='content'>
          <div>
            <AskTopContainer>
              <AskHeadline>
                <H1>Ask a public question</H1>
              </AskHeadline>
              <AskDescriptionContainer>
                <AskDescriptionInnerContainer>
                  <AskDescriptionDiv className='notice'>
                    <H2>Writing a good question</H2>
                    <P>
                      You’re ready to ask a programming-related question and this form
                      will help guide you through the process.
                    </P>
                    <P2>
                      Looking to ask a non-programming question? See the topics here
                      to find a relevant site.
                    </P2>
                    <H5>Steps</H5>
                    <Ul>
                      <li>Summarize your problem in a one-line title.</li>
                      <li>Describe your problem in more detail.</li>
                      <li>
                        Describe what you tried and what you expected to happen.
                      </li>
                      <li>
                        Add “tags” which help surface your question to members of the
                        community.
                      </li>
                      <li>Review your question and post it to the site.</li>
                    </Ul>
                  </AskDescriptionDiv>
                </AskDescriptionInnerContainer>
              </AskDescriptionContainer>
            </AskTopContainer>
            <AskInput />
          </div>
        </AskContent>
      </AskContainer>
      <Footer />
    </div>
  );
}
