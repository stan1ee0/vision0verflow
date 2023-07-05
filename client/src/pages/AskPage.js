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
`;

const AskHeader = styled.div`
  padding: 24px;
  background-color: hsl(206, 100%, 97%);
  border-style: solid;
  border-radius: 3px;
  border-width: 1px;
`;

export default function AskPage() {
  return (
    <div>
      <Header />
      <AskContainer>
        <AskContent>
          <div>
            <div>
              <h1>Ask a public question</h1>
            </div>
            <AskHeader>
              <h2>Writing a good question</h2>
              <p>
                You’re ready to ask a programming-related question and this form
                will help guide you through the process.
              </p>
              <p>
                Looking to ask a non-programming question? See the topics here
                to find a relevant site.
              </p>
              <h5>Steps</h5>
              <ul>
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
              </ul>
            </AskHeader>
          </div>
          <AskInput />
        </AskContent>
      </AskContainer>
      <Footer />
    </div>
  );
}
