import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const AnswerContainer = styled.div`
  border-bottom: 1px solid hsl(210,8%,90%);
  width: 100%;
  padding-bottom: 16px;
  padding-top: 16px;
`;

const AnswerPostContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const AnswerVoteDiv = styled.div`
  width: auto;
  padding-right: 16px;
  vertical-align: top;
  grid-column: 1;
`;

const AnswerVoteContainer = styled.div`
  display: flex !important;
  align-items: stretch !important;
  justify-content: center !important;
  flex-direction: column !important;
  margin: -2px;
  color: hsl(210,8%,75%) !important;
`;

const VoteButton = styled.button`
  margin: 2px;
  cursor: pointer !important;
  align-self: center !important;
  color: hsl(210,8%,25%) !important;
  border-color: hsl(210,8%,85%) !important;
  border-radius: 1000px !important;
  border-style: solid !important;
  border-width: 1px !important;
`;

const VoteDownButton = styled(VoteButton)`
  margin-bottom: 8px !important;
`;

const Svg = styled.svg`
  vertical-align: bottom;
`;

const VoteCountDiv = styled.div`
  margin: 2px;
  color: hsl(210,8%,15%) !important;
  display: flex !important;
  font-weight: 600 !important;
  font-size: 1.46153846rem !important;
  padding-top: 4px !important;
  padding-bottom: 4px !important;
  align-items: center !important;
  flex-direction: column !important;
`;

const AnswerPostDiv = styled.div`
  padding-right: 16px;
  grid-column: 2;
  width: auto;
  min-width: 0;
`;

const PostBodyDiv = styled.div`
  width: 100%;
`;

const P = styled.p`
  margin-bottom: 1.1em;
`;

const PostBottomContainer = styled.div`
  margin-bottom: 0 !important;
`;

const PostBottomInnerContainer = styled.div`
  display: flex !important;
  padding-top: 4px !important;
  margin-bottom: 16px !important;
  margin-top: 16px !important;
  align-items: flex-start !important;
  justify-content: flex-end !important;
  flex-wrap: wrap !important;
  margin-right: 0;
  margin-left: 0;
`;

const UserItemsContainer = styled.div`
  margin-left: 0;
  margin: 4px;
  width: 96px !important;
  margin-right: 16px !important;
  flex: 1 auto !important;
`;

const UserItemsInnerContainer = styled.div`
  padding-top: 2px !important;
`;

const UserItemsDiv = styled.div`
  display: flex !important;
  flex-wrap: wrap !important;
  margin: -4px;
`;

const UserItemDiv = styled.div`
  margin: 4px;
`;

const UserItemA = styled.a`
  color: hsl(210,8%,45%);
`;

const UserCardContainer = styled.div`
  margin-right: 0;
  margin-left: 0;
  margin: 4px;
  border-radius: 3px;
  background-color: rgb(216.75, calc(216.75 + 115.6*.15), calc(216.75 + 204*.15));
  text-align: left;
  vertical-align: top;
  width: 200px;
`;

const UserInfoDiv = styled.div`
  padding: 5px 6px 7px 7px;
  color: hsl(210,8%,45%);
  min-height: 42px;
`;

const UserAvatarDiv = styled.div`
  float: left;
  width: 32px;
  height: 32px;
  border-radius: 1px;
`;

const A = styled.a`
`;

const UserAvatarContainer = styled.div`
  width: 32px;
  height: 32px;
  padding: 0;
  overflow: hidden;
`;

const UserDetailsDiv = styled.div`
  margin-left: 8px;
  width: calc(100% - 40px);
  float: left;
  line-height: 17px;
  word-wrap: break-word;
`;

const UserStatsDiv = styled.div`
  display: block;
`;

const Span = styled.span`
  font-weight: bold;
  font-size: 12px;
  margin-right: 2px;
`;

function AnswersBox({ answer }) {
  const userId = answer.user.id;
  const userName = answer.user.name;

  return (
    <AnswerContainer>
      <AnswerPostContainer>
        <AnswerVoteDiv>
          <AnswerVoteContainer>
            <VoteButton className='header-button'>
            <Svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M1 12h16L9 4l-8 8Z"></path>
            </Svg>
            </VoteButton>
            <VoteCountDiv>{' '}0{' '}</VoteCountDiv>
            <VoteDownButton className='header-button'>
              <Svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M1 6h16l-8 8-8-8Z"></path>
              </Svg>
            </VoteDownButton>
          </AnswerVoteContainer>
        </AnswerVoteDiv>
        <AnswerPostDiv>
          <PostBodyDiv className='prose'>
            <P>{answer?.content}</P>
          </PostBodyDiv>
          <PostBottomContainer>
            <PostBottomInnerContainer>
              <UserItemsContainer>
                <UserItemsInnerContainer>
                  <UserItemsDiv>
                    <UserItemDiv><UserItemA>Share</UserItemA></UserItemDiv>
                    <UserItemDiv><UserItemA>Edit</UserItemA></UserItemDiv>
                    <UserItemDiv><UserItemA>Follow</UserItemA></UserItemDiv>
                  </UserItemsDiv>
                </UserItemsInnerContainer>
              </UserItemsContainer>
              <UserCardContainer>
                <UserInfoDiv>
                  <UserAvatarDiv>
                    <A href={`/users/${userId}`}>
                      <UserAvatarContainer>
                        {userId == 1 ? (
                        <img className='user-avatar-image' alt={userName}
                          src='https://s3.amazonaws.com/comicgeeks/characters/avatars/1616.jpg?t=1687973152'
                        />
                        ) : (
                        <img className='user-avatar-image' alt={userName}
                          src='https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
                        />
                        )}
                      </UserAvatarContainer>
                    </A>
                  </UserAvatarDiv>
                  <UserDetailsDiv>
                    <A href={`/users/${userId}`}>{userName}</A>
                    <UserStatsDiv>
                      { userId === 1 ? (
                      <Span>100</Span>
                      ) : (
                      <Span>200</Span>
                      )}
                    </UserStatsDiv>
                  </UserDetailsDiv>
                </UserInfoDiv>
              </UserCardContainer>
            </PostBottomInnerContainer>
          </PostBottomContainer>
        </AnswerPostDiv>
      </AnswerPostContainer>
    </AnswerContainer>
  )
}

export default function AnswersList({ answers }) {
  return (
    <div>
      {answers.map((answer) => (
        <AnswersBox key={answer.id} answer={answer} />
      ))}
    </div>
  );
}

AnswersBox.propTypes = {
  answer: PropTypes.object.isRequired,
};

AnswersList.propTypes = {
  answers: PropTypes.array.isRequired,
};
