import {useParams, useNavigate, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {styled} from 'styled-components';

import {serverUrl, chatgptUrl, chatgptKey} from '../index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftSide from '../components/LeftSide';
import Aside from '../components/Aside';
import FollowupsList from '../components/FollowupsList';
import CommentsList from '../components/CommentsList';

const QuestionHeader = styled.div`
  flex-flow: row nowrap;
  justify-content: space-between;
  display: flex !important;
`;

const QuestionHeaderH1 = styled.h1`
  overflow-wrap: break-word !important;
  font-size: 2.07692308rem !important;
  margin-bottom: 8px !important;
  flex: 1 auto !important;
  font-weight: unset;
`;

const QuestionHeaderLink = styled(Link)`
  color: hsl(210,8%,25%);
  font-size: 2.07692308rem;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif;
  line-height: 1.35;
  font-weight: normal;
  margin-bottom: 0;

  &:hover {
    color: hsl(210,8%,25%);
  }
`;

const AskButtonContainer = styled.div`
  margin-left: 12 !important;
`;

const AskButtonLink = styled(Link)`
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  white-space: nowrap;

  &:hover {
    background-color: hsl(209,100%,37.5%);
    color: hsl(0, 0%, 100%);
  }
`;

const QuestionStats = styled.div`
  display: flex !important;
  padding-bottom: 8px !important;
  margin-bottom: 16px !important;
  flex-wrap: wrap !important;
  border-color: hsl(210,8%,90%);
  border-bottom-style: solid !important;
  border-bottom-width: 1px !important;
`;

const QuestionMain = styled.div`
  width: calc(100% - 300px - 24px);
  float: left;
  margin: 0;
  padding: 0;
`;

const QuestionContainer = styled.div`
  clear: both;
`;

const QuestionPostContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const QuestionVoteDiv = styled.div`
  width: auto;
  padding-right: 16px;
  vertical-align: top;
  grid-column: 1;
`;

const QuestionVoteContainer = styled.div`
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

const QuestionPostDiv = styled.div`
  vertical-align: top;
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

const TagListContainer = styled.div`
  margin-bottom: 12px !important;
  margin-top: 24px !important;
`;

const TagListInnerContainer = styled.div`
  margin-bottom: 10px;
  clear: both;
  display: flex !important;
  flex-direction: column !important;
  margin-right: 0;
  margin-left: 0;
  margin: -2px;
`;

const TagsDiv = styled.div`
  margin-right: 0;
  margin-left: 0;
  margin: 2px;
  position: relative !important;
  display: flex !important;
  flex-wrap: wrap !important;
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
  font-size: 12px;
  color: hsl(205,47%,42%);
  background-color: hsl(205,46%,92%);
  border-color: transparent;

  &:hover {
    background-color: hsl(205,46%,88%);
    color: hsl(205,47%,42%);
  }
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

const QuestionCommentsDiv = styled.div`
  padding-right: 16px;
  grid-column: 2;
  width: auto;
  min-width: 0;
`;

const QuestionCommentsContainer = styled.div`
  width: 100%;
  padding-bottom: 10px;
  margin-top: 12px !important;
  border-color: hsl(210,8%,90%) !important;
  border-top-style: solid !important;
  border-top-width: 1px !important;
`;

const FollowupsContainer = styled.div`
  width: auto;
  float: none;
  padding-top: 10px;
  clear: both;
`;

const FollowupsH2 = styled.h2`
  padding-top: 8px;
  margin-bottom: -8px;
  font-weight: 400;
`;

const FollowupFormH2 = styled.h2`
  font-weight: 400;
  padding-top: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  padding: 10px 0 15px 0;
  clear: both !important;
  display: flex !important;
  margin-top: 0;
  margin-bottom: 0;
  margin: -2px;
`;

const Button = styled.button`
  margin-top: 0;
  margin-bottom: 0;
  margin: 2px;

  &:hover {
    background-color: hsl(209,100%,37.5%);
    color: hsl(0, 0%, 100%);
  }
`;

const FollowupsHeader = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 8px !important;
`;

const FollowupsHeaderH2 = styled.h2`
  font-weight: 400;
  margin-bottom: 0 !important;
`;

const H2 = styled.h2`
  font-weight: 400;
`;

export default function QuestionPage() {
  const { questionId } = useParams();
  const [question, setQuestion] = useState(null);
  const [followups, setFollowups] = useState([]);
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const questionUrl = `${serverUrl}/questions/${questionId}`;

  const fetchQuestion = async () => {
    try {
      const response = await fetch(questionUrl);
      const data = await response.json();
      setQuestion(data);
      setFollowups(data?.answers || []);
      setComments(data?.comments || []);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, [questionId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const token = localStorage.getItem('token');
    const aiToken = localStorage.getItem('aiToken');
    const messages = [{role: 'system', content: 'Vision0 is asking.'}];
    messages.push({role: 'user', content: question.content});
    messages.push({role: 'assistant', content: question.comments[0].content});
    followups.forEach((followup) => {
      messages.push({role: 'user', content: followup.content});
      messages.push({role: 'assistant', content: followup.comments[0].content});
    })

    try {
      const followupsUrl = `${questionUrl}/answers`;
      const followupResponse = await fetch(followupsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          content: content,
        }),
      });

      if (followupResponse.ok) {
        const followupData = await followupResponse.json();
        console.log('Followup posted successfully!');
        setContent('');
        
        const followupId = followupData.id;
        messages.push({role: 'user', content: followupData.content});
        const chatgptResponse = await fetch(chatgptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${chatgptKey}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: messages,
          }),
        });

        if (chatgptResponse.ok) {
          const chatgptData = await chatgptResponse.json();
          console.log('Answer generated successfully!');

          const followupUrl = `${serverUrl}/answers/${followupId}`;
          const commentsUrl = `${followupUrl}/comments`;
          const commentContent = chatgptData.choices[0].message.content;
          const commentResponse = await fetch(commentsUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${aiToken}`,
            },
            body: JSON.stringify({
              content: commentContent,
            }),
          });

          if (commentResponse.ok) {
            const commentData = await commentResponse.json();
            console.log('Comment posted successfully!');
            console.log('commentId: ', commentData.id);
            await fetchQuestion();
            setLoading(false);
          } else {
            const commentError = new Error('Error posting comment');
            commentError.status = commentResponse.status;
            throw commentError;
          }
        } else {
          const chatgptError = new Error('Error generating answer');
          chatgptError.status = chatgptResponse.status;
          throw chatgptError;
        }
      } else {
        const followupError = new Error('Error posting followup');
        followupError.status = followupResponse.status;
        throw  followupError;
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      setContent(error.status);

      switch(error.status) {
        case 401:
          localStorage.removeItem('token');
          localStorage.removeItem('aiToken');
          navigate('/users/login');
      }
    }
  };

  return (
    <div>
      <Header />
      <div className='body-container'>
        <LeftSide />
        <div className='content'>
          <div>
            <div>
              <QuestionHeader>
                <QuestionHeaderH1><QuestionHeaderLink to={`/questions/${questionId}`}>{question?.title}</QuestionHeaderLink></QuestionHeaderH1>
                <AskButtonContainer>
                  <AskButtonLink className='button' to="/questions/ask"> Ask Question </AskButtonLink>
                </AskButtonContainer>
              </QuestionHeader>
              <QuestionStats>
              </QuestionStats>
              <QuestionMain>
                <QuestionContainer>
                  <QuestionPostContainer>
                    <QuestionVoteDiv>
                      <QuestionVoteContainer>
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
                      </QuestionVoteContainer>
                    </QuestionVoteDiv>
                    <QuestionPostDiv>
                      <PostBodyDiv className='prose'>
                        <P>{question?.content}</P>
                      </PostBodyDiv>
                      <TagListContainer>
                        <TagListInnerContainer>
                          <TagsDiv>
                            <TagsUl>
                              <TagsLi><TagsLink className='tag'>vision</TagsLink></TagsLi>
                              <TagsLi><TagsLink className='tag'>marvel</TagsLink></TagsLi>
                            </TagsUl>
                          </TagsDiv>
                        </TagListInnerContainer>
                      </TagListContainer>
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
                                <Link to='/users/1'>
                                  <UserAvatarContainer>
                                    <img className='user-avatar-image' alt='Vision0'
                                      src='https://s3.amazonaws.com/comicgeeks/characters/avatars/1616.jpg?t=1687973152'
                                    />
                                  </UserAvatarContainer>
                                </Link>
                              </UserAvatarDiv>
                              <UserDetailsDiv>
                                <Link to='/users/1'>Vision0</Link>
                                <UserStatsDiv>
                                  <Span>100</Span>
                                </UserStatsDiv>
                              </UserDetailsDiv>
                            </UserInfoDiv>
                          </UserCardContainer>
                        </PostBottomInnerContainer>
                      </PostBottomContainer>
                    </QuestionPostDiv>
                    <QuestionCommentsDiv>
                      <QuestionCommentsContainer>
                        <CommentsList comments={comments} />
                      </QuestionCommentsContainer>
                    </QuestionCommentsDiv>
                  </QuestionPostContainer>
                </QuestionContainer>
                <FollowupsContainer>
                  {followups.length === 0 ? (
                  <FollowupsH2 className='bottom-notice'>
                  {' '}Know someone who can answer? Share a link to this{' '}
                  <Link to={`/questions/${questionId}`}>question</Link>
                  {' '}via{' '}
                  <Link>email</Link>
                  ,{' '}
                  <Link>Twitter</Link>
                  , or{' '}
                  <Link>Facebook</Link>
                  .{' '}
                  </FollowupsH2>
                  ) : (
                  <FollowupsHeader>
                    <FollowupsHeaderH2>
                      {' '}{followups.length} {followups.length === 1 ? 'Follow-up' : 'Follow-ups'}{' '}
                    </FollowupsHeaderH2>
                  </FollowupsHeader>
                  )}
                  <FollowupsList followups={followups} />
                  <form onSubmit={handleSubmit}>
                    <FollowupFormH2>{' '}Your Follow-up{' '}</FollowupFormH2>
                    <Textarea rows={10} value={loading ? 'Waiting for response...' : content}
                      disabled={loading} onChange={(event) => setContent(event.target.value)}
                    />
                    <ButtonContainer>
                      <Button className='button' type='submit' disabled={loading}>{' '}Post Your Follow-up{' '}</Button>
                    </ButtonContainer>
                  </form>
                  <H2 className='bottom-notice'>
                    <div>
                      {' '}Browse other questions tagged{' '}
                      <TagsUl>
                        <TagsLi><TagsLink className='tag'>vision0</TagsLink></TagsLi>
                        <TagsLi><TagsLink className='tag'>vision0verflow</TagsLink></TagsLi>
                      </TagsUl>
                      {' '}or{' '}
                      <Link to='/questions/ask'>ask your own question</Link>
                      .{' '}
                    </div>
                  </H2>
                </FollowupsContainer>  
              </QuestionMain>
              <Aside />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
