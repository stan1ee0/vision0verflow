import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';

import { rootUrl } from '../index';

const Div = styled.div`
  opacity: unset;
  color: hsl(210, 8% 5%);
`;

const Span = styled.span`
  font-weight: 500;
`;

const QuestionContent = styled.div`
  flex-grow: 1;
  max-width: 100%;
`;

const H3 = styled.h3`
  font-weight: 400;
  opacity: unset;
`;

const TagsDiv = styled.div`
  line-height: 18px;
  float: left;
  display: inline-block !important;
`;

const TagsUl = styled.ul`
  display: inline !important;
  list-style: none !important;
  margin-left: 0 !important;
`;

const TagsLi = styled.li`
  display: inline !important;
  margin-right: 4px !important;
`;

const TagsA = styled.a`
  opacity: unset;
  font-size: 12px;
  color: hsl(205,47%,42%);
  background-color: hsl(205,46%,92%);
  border-color: transparent;
`;

const UserCardDiv = styled.div`
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-left: auto;
`;

const UserCardA = styled.a`
  opacity: unset;
`;

const AvatarContainer = styled.div`
  padding: 0;
  overflow: hidden;
`;

const UserCardLinkDiv = styled.div`
  display: flex !important;
  margin: -2px;
`;

const UserCardLinkA = styled.a`
  margin: 2px;
`;

function QuestionsBox({ question }) {
  return (
    <div className='question-box'>
      <div className='question-stats'>
        <Div className='question-stats-item'>
          <Span>0</Span>
          <span>votes</span>
        </Div>
        <Div className='question-stats-item'>
          <Span>0</Span>
          <span>answers</span>
        </Div>
        <Div className='question-stats-item'>
          <Span>0</Span>
          <span>views</span>
        </Div>
      </div>
      <QuestionContent>
        <H3 className='question-content-title'>
          <Link to={`/questions/${question.id}`}>{question.title}</Link>
        </H3>
        <div className="question-meta">
          <TagsDiv>
            <TagsUl>
              <TagsLi><TagsA className='tag'>vision0</TagsA></TagsLi>
              <TagsLi><TagsA className='tag'>vision0verflow</TagsA></TagsLi>
            </TagsUl>
          </TagsDiv>
          <UserCardDiv className='user-card'>
            <UserCardA className='avatar'>
              <AvatarContainer>
                <img className='avatar-image' alt='Vision0'
                  src='https://s3.amazonaws.com/comicgeeks/characters/avatars/1616.jpg?t=1687973152'
                />
              </AvatarContainer>
            </UserCardA>
            <div className='user-card-info'>
                  <UserCardLinkDiv className='user-card-link'>
                    <UserCardLinkA href="/users/1">Vision0</UserCardLinkA>
                  </UserCardLinkDiv>
            </div>
            <time className='user-card-time'>
            </time>
          </UserCardDiv>
        </div>
      </QuestionContent>
    </div>
  );
}

export default function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const questionsUrl = `${rootUrl}/questions`;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(questionsUrl);
        const data = await response.json();
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {questions.map((question) => (
        <QuestionsBox key={question.id} question={question} />
      ))}
    </div>
  );
}

QuestionsBox.propTypes = {
  question: PropTypes.object.isRequired,
};
