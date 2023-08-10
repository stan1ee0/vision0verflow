import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {styled, css} from 'styled-components';
import PropTypes from 'prop-types';

import {serverUrl} from '../index';
import CommentsList from './CommentsList';

const ListContainer = styled.div`
  width: auto;
  float: none;
  padding-top: 10px;
  clear: both;
`;

const FollowupContainer = styled.div`
  border-bottom: 1px solid hsl(210,8%,90%);
  width: 100%;
  padding-bottom: 16px;
  padding-top: 16px;
`;

const FollowupPostContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const FollowupVoteDiv = styled.div`
  width: auto;
  padding-right: 16px;
  vertical-align: top;
  grid-column: 1;
`;

const FollowupVoteContainer = styled.div`
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

  &:hover {
    background-color: hsl(27,95%,90%); 
  }

  ${({highlighted}) => highlighted && css`
    background-color: hsl(27,95%,90%); 
  `}
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

const FollowupPostDiv = styled.div`
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

const UserItemLink = styled(Link)`
  color: hsl(210,8%,45%);

  &:hover {
    color: hsl(210,8%,55%);
  }
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

const FollowupCommentsDiv = styled.div`
  padding-right: 16px;
  grid-column: 2;
  width: auto;
  min-width: 0;
`;

const FollowupCommentsContainer = styled.div`
  width: 100%;
  padding-bottom: 10px;
  margin-top: 12px !important;
  border-color: hsl(210,8%,90%) !important;
  border-top-style: solid !important;
  border-top-width: 1px !important;
`;

export default function FollowupsList({ followups }) {
  return (
    <ListContainer>
      {followups.map((followup) => (
        <FollowupsBox key={followup.id} followup={followup} />
      ))}
    </ListContainer>
  );
}

function FollowupsBox({ followup }) {
  const navigate = useNavigate();
  const [voteUp, setVoteUp] = useState(0);
  const [voteDown, setVoteDown] = useState(0);
  const [scoreOfVotes, setScoreOfVotes] = useState(followup.scoreOfVotes);

  const votesUrl = `${serverUrl}/answers/${followup.id}/votes`;
  const token = localStorage.getItem('token');

  const getVote = async () => {
    try {
      const response = await fetch(votesUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setVoteUp(data?.value === 1);
        setVoteDown(data?.value === -1);
      } else {
        const error = new Error('Error getting vote');
        error.status = response.status;
        throw error;
      }
    }
    catch (error) {
      console.error(error);
      switch(error.status) {
        case 401:
          localStorage.removeItem('token');
          localStorage.removeItem('aiToken');
          navigate('/users/login');
      }
    }
  };

  useEffect(() => {
    getVote();
  }, [followup]);

  const handleUpVote = () => {
    const value = voteUp ? 0 : 1;
    fetch(votesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },
      body: JSON.stringify({
        value: value,
      }),
    })
    .then((response) => {
      if (response.ok) {
        if (voteUp) {
          setVoteUp(false);
          setScoreOfVotes(scoreOfVotes - 1);
        } else if (voteDown) {
          setVoteUp(true);
          setVoteDown(false);
          setScoreOfVotes(scoreOfVotes + 2);   
        } else {
          setVoteUp(true);
          setScoreOfVotes(scoreOfVotes + 1);
        }
      } else {
        throw new Error('Error voting up');
      }
    })
    .catch((error) => {
      console.log('Error voting up', error);
    });
  };

  const handleDownVote = () => {
    const value = voteDown ? 0 : -1;
    fetch(votesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },
      body: JSON.stringify({
        value: value,
      }),
    })
    .then((response) => {
      if (response.ok) {
        if (voteDown) {
          setVoteDown(false);
          setScoreOfVotes(scoreOfVotes + 1);
        } else if (voteUp) {
          setVoteDown(true);
          setVoteUp(false);
          setScoreOfVotes(scoreOfVotes - 2);
        } else {
          setVoteDown(true);
          setScoreOfVotes(scoreOfVotes - 1);
        }
      } else {
        throw new Error('Error voting up');
      }
    })
    .catch((error) => {
      console.log('Error voting up', error);
    });
  };

  const userId = followup.user.id;
  const userName = followup.user.name;
  const followupContent = followup.content;
  const followupComments = followup.comments;

  return (
    <FollowupContainer>
      <FollowupPostContainer>
        <FollowupVoteDiv>
          <FollowupVoteContainer>
            <VoteButton className='header-button' highlighted={voteUp} onClick={handleUpVote}>
            <Svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M1 12h16L9 4l-8 8Z"></path>
            </Svg>
            </VoteButton>
            <VoteCountDiv>{' '}{scoreOfVotes}{' '}</VoteCountDiv>
            <VoteDownButton className='header-button' highlighted={voteDown} onClick={handleDownVote}>
              <Svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M1 6h16l-8 8-8-8Z"></path>
              </Svg>
            </VoteDownButton>
          </FollowupVoteContainer>
        </FollowupVoteDiv>
        <FollowupPostDiv>
          <PostBodyDiv className='prose'>
            <P>{followupContent}</P>
          </PostBodyDiv>
          <PostBottomContainer>
            <PostBottomInnerContainer>
              <UserItemsContainer>
                <UserItemsInnerContainer>
                  <UserItemsDiv>
                    <UserItemDiv><UserItemLink>Share</UserItemLink></UserItemDiv>
                    <UserItemDiv><UserItemLink>Edit</UserItemLink></UserItemDiv>
                    <UserItemDiv><UserItemLink>Follow</UserItemLink></UserItemDiv>
                  </UserItemsDiv>
                </UserItemsInnerContainer>
              </UserItemsContainer>
              <UserCardContainer>
                <UserInfoDiv>
                  <UserAvatarDiv>
                    <Link to={`/users/${userId}`}>
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
                    </Link>
                  </UserAvatarDiv>
                  <UserDetailsDiv>
                    <Link to={`/users/${userId}`}>{userName}</Link>
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
        </FollowupPostDiv>
        <FollowupCommentsDiv>
          <FollowupCommentsContainer>
            <CommentsList comments={followupComments} />
          </FollowupCommentsContainer>
        </FollowupCommentsDiv>
      </FollowupPostContainer>
    </FollowupContainer>
  )
}

FollowupsBox.propTypes = {
  followup: PropTypes.object.isRequired,
};

FollowupsList.propTypes = {
  followups: PropTypes.array.isRequired,
};
