import { styled } from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AskInput from '../components/AskInput';

const AskContainer = styled.div`
  max-width: 100%;
  justify-content: center;
  margin: 0;
  width: 100%;
  background: none;
  display: flex;
  position: relative;
  flex: 1 0 auto;
  text-align: left;
  background-color: hsl(210, 8%, 97.5%);
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
  border-radius: 0;
  border: 1px solid sl(210, 8%, 85%);
  border-top-width: 0;
  border-bottom-width: 0;
  padding: 24px;
  box-sizing: border-box;
  padding-top: 0 !important;
`;

const AskHeader = styled.div`
  display: flex !important;
  flex-direction: column !important;
`;

const AskTitle = styled.div`
  height: 130px;
  background-image: url(../../Img/ask/background.svg?v=2e9a8205b368);
  width: 100% !important;
  background-repeat: no-repeat !important;
  background-position: right bottom !important;
  display: flex !important;
  align-items: center !important;
`;

const H1 = styled.h1`
  font-weight: 600 !important;
  font-size: 2.07692308rem; !important;
  margin-top: 24px !important;
  line-height: 1.3;
  margin: 0 0 1em;
`;

const AskDescriptionContainer = styled.div`
  margin-top: 16px;
  width: 100% !important;
  display: flex !important;
  margin-bottom: 16px;
  align-items: center !important;
`;

const AskDescription = styled.div`
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
  line-height: 1.3;
  margin: 0 0 1em;
`;

const P = styled.p`
  font-size: 1.15384615rem; !important;
  margin-bottom: 0 !important;
  clear: both;
  margin-top: 0;
`;

const H5 = styled.h5`
  font-weight: 600 !important;
  margin-bottom: 8px !important;
  margin-top: 0;
`;

const Ul = styled.ul`
  margin-bottom: 0 !important;
  list-style-type: disc;
  margin-left: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default function AskPage() {
  return (
    <div>
      <Header />
      <AskContainer>
        <AskContent>
          <AskHeader>
            <AskTitle>
              <H1>Ask a public question</H1>
            </AskTitle>
            <AskDescriptionContainer>
              <AskDescription>
                <H2>Writing a good question</H2>
                <P>
                  You’re ready to ask a programming-related question and this form
                  will help guide you through the process.
                </P>
                <P>
                  Looking to ask a non-programming question? See the topics here
                  to find a relevant site.
                </P>
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
              </AskDescription>
            </AskDescriptionContainer>
          </AskHeader>
          <AskInput />
        </AskContent>
      </AskContainer>
      <Footer />
    </div>
  );
}
