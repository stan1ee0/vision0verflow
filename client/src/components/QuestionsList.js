import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {styled} from 'styled-components';
import PropTypes from 'prop-types';

import {serverUrl} from '../index';

const ListContainer = styled.div`
  margin-bottom: 30px;
`;

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

const TagsLink = styled(Link)`
  opacity: unset;
  font-size: 12px;
  color: hsl(205,47%,42%);
  background-color: hsl(205,46%,92%);
  border-color: transparent;

  &:hover {
    background-color: hsl(205,46%,88%);
    color: hsl(205,47%,42%);
  }
`;

const UserCardDiv = styled.div`
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-left: auto;
`;

const AvatarLink = styled(Link)`
  opacity: unset;
`;

const AvatarContainer = styled.div`
  padding: 0;
  overflow: hidden;
`;

const UserNameContainer = styled.div`
  display: flex !important;
  margin: -2px;
`;

const UserNameLink = styled(Link)`
  margin: 2px;
`;

export default function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const questionsUrl = `${serverUrl}/questions`;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(questionsUrl);
        if (response.ok) {
          const data = await response.json();
          setQuestions(data);
          setLoading(false);
        } else {
          const error = new Error('Error getting questions');
          error.status = response.status;
          throw error;
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return loading ? (
    <ListContainer>Loading...</ListContainer>
  ) : (
    <ListContainer>
      {questions.map((question) => (
        <QuestionsBox key={question.id} question={question} />
      ))}
    </ListContainer>
  );
}

function QuestionsBox({question}) {
  const questionId = question.id;
  const questionTitle = question.title;
  const scoreOfVotes = question.scoreOfVotes;
  const numOfFollowups = question.numOfAnswers;
  const numOfViews = question.numOfViews;

  return (
    <div className='question-box'>
      <div className='question-stats'>
        <Div className='question-stats-item'>
          <Span>{scoreOfVotes}</Span>
          <span>votes</span>
        </Div>
        <Div className='question-stats-item'>
          <Span>{numOfFollowups}</Span>
          <span>follow-ups</span>
        </Div>
        <Div className='question-stats-item'>
          <Span>{numOfViews}</Span>
          <span>views</span>
        </Div>
      </div>
      <QuestionContent>
        <H3 className='question-content-title'>
          <Link to={`/questions/${questionId}`}>{questionTitle}</Link>
        </H3>
        <div className="question-meta">
          <TagsDiv>
            <TagsUl>
              <TagsLi><TagsLink className='tag'>vision</TagsLink></TagsLi>
              <TagsLi><TagsLink className='tag'>marvel</TagsLink></TagsLi>
            </TagsUl>
          </TagsDiv>
          <UserCardDiv className='user-card'>
            <AvatarLink className='avatar' to='users/1'>
              <AvatarContainer>
                <img className='avatar-image' alt='Vision0'
                  src='https://s3.amazonaws.com/comicgeeks/characters/avatars/1616.jpg?t=1687973152'
                />
              </AvatarContainer>
            </AvatarLink>
            <div className='user-card-info'>
              <UserNameContainer className='user-card-link'>
                <UserNameLink to="/users/1">Vision0</UserNameLink>
              </UserNameContainer>
            </div>
            <time className='user-card-time'>
            </time>
          </UserCardDiv>
        </div>
      </QuestionContent>
    </div>
  );
}

QuestionsBox.propTypes = {
  question: PropTypes.object.isRequired,
};
