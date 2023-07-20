import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const UL = styled.ul`
  display: grid;
  list-style-type: none;
  margin: 0;
`;

const Li = styled.li`
  display: contents;
`;

const CommentContainer = styled.div`
  min-width: 0;
  padding-left: 6px;
  padding-right: 6px;
  padding: 6px 0;
  border-bottom: 1px solid hsl(210,8%,95%);
  font-size: 13px;
  line-height: 1.4;
  vertical-align: text-top;
`;

const CommentBodyDiv = styled.div`
  word-wrap: break-word;
`;

const UserNameContainer = styled.div`
  display: inline-flex !important;
  align-items: center !important;
`;

const UserNameA = styled.a`
  display: inline-block;
  white-space: nowrap;
  padding: 0;
`;

export default function CommentsList({ comments }) {
  return (
    <UL>
      {comments.map((comment) => (
        <CommentsBox key={comment.id} comment={comment} />
      ))}
    </UL>
  );
}

function CommentsBox({ comment }) {
  const commentContent = comment.content;
  const userName = comment.user.name;

  return (
    <Li>
      <CommentContainer>
        <CommentBodyDiv>
          <span>{commentContent}{' '}</span>
          <UserNameContainer>
            –&nbsp;
            <UserNameA>{userName}</UserNameA>
          </UserNameContainer>
        </CommentBodyDiv>
      </CommentContainer>
    </Li>
  )
}

CommentsBox.propTypes = {
  comment: PropTypes.object.isRequired,
};

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};
