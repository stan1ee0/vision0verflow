import { styled } from 'styled-components';

import QuestionList from '../components/QuestionList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Aside from '../components/Aside';

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
`;

const Main = styled.div`
  width: 720px;
  flex: 1;
`;

export default function HomePage() {
  return (
    <div>
      <Header />
      <Container>
        <Nav />
        <Content>
          <Main>
            <h1>Top Questions</h1>
            <QuestionList />
            <br />
            <h2>
              Looking for more? Browse the complete list of questions, or
              popular tags. Help us answer unanswered questions.
            </h2>
          </Main>
          <Aside />
        </Content>
      </Container>
      <Footer />
    </div>
  );
}
