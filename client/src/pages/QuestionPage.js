import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { rootUrl } from '../index';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Lside from '../components/Lside';
import Aside from '../components/Aside';

const QuestionHeader = styled.div`
  flex-flow: row nowrap;
  justify-content: space-between;
  display: flex !important;
`;

const H1 = styled.h1`
  overflow-wrap: break-word !important;
  font-size: 2.07692308rem !important;
  margin-bottom: 8px !important;
  flex: 1 auto !important;
  font-weight: unset;
`;

const A = styled.a`
  color: hsl(210,8%,25%);
  font-size: 2.07692308rem;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif;
  line-height: 1.35;
  font-weight: normal;
  margin-bottom: 0;
`;

const AskButtonContainer = styled.div`
  margin-left: 12 !important;
`;

const AskButtonA = styled.a`
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  white-space: nowrap;
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

const TagsA = styled.a`
  font-size: 12px;
  color: hsl(205,47%,42%);
  background-color: hsl(205,46%,92%);
  border-color: transparent;
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

const UserA = styled.a`
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

export default function QuestionPage() {
  const { questionId } = useParams();
  const [question, setQuestion] = useState(null);

  const questionUrl = `${rootUrl}/questions/${questionId}`;

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(questionUrl);
        const data = await response.json();
        setQuestion(data);
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    fetchQuestion();
  }, [questionId]);

  return (
    <div>
      <Header />
      <div className='body-container'>
        <Lside />
        <div className='content'>
          <div>
            <div>
              <QuestionHeader>
                <H1><A href={`/questions/${questionId}`}>{question?.title}</A></H1>
                <AskButtonContainer>
                  <AskButtonA className='button' href="/questions/ask"> Ask Question </AskButtonA>
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
                              <TagsLi><TagsA className='tag'>vision0</TagsA></TagsLi>
                              <TagsLi><TagsA className='tag'>vision0verflow</TagsA></TagsLi>
                            </TagsUl>
                          </TagsDiv>
                        </TagListInnerContainer>
                      </TagListContainer>
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
                                <UserA href='/users/1'>
                                  <UserAvatarContainer>
                                    <img className='user-avatar-image' alt='Vision0'
                                      src='https://s3.amazonaws.com/comicgeeks/characters/avatars/1616.jpg?t=1687973152'
                                    />
                                  </UserAvatarContainer>
                                </UserA>
                              </UserAvatarDiv>
                              <UserDetailsDiv>
                                <UserA href='/users/1'>Vision0</UserA>
                                <UserStatsDiv>
                                  <Span>100</Span>
                                </UserStatsDiv>
                              </UserDetailsDiv>
                            </UserInfoDiv>
                          </UserCardContainer>
                        </PostBottomInnerContainer>
                      </PostBottomContainer>
                    </QuestionPostDiv>
                  </QuestionPostContainer>
                </QuestionContainer>
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
