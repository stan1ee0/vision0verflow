import {Link} from 'react-router-dom';
import {styled} from 'styled-components';
import PropTypes from 'prop-types';

const ListUl = styled.ul`
  display: grid;
  list-style-type: none;
  margin: 0;
`;

const CommentLi = styled.li`
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

const UserNameLink = styled(Link)`
  display: inline-block;
  white-space: nowrap;
  padding: 0;
`;

export default function CommentsList({ comments }) {
  return (
    <ListUl>
      {comments.map((comment) => (
        <CommentsBox key={comment.id} comment={comment} />
      ))}
    </ListUl>
  );
}

function CommentsBox({ comment }) {
  const commentContent = comment.content;
  const userId = comment.user.id;
  const userName = comment.user.name;

  return (
    <CommentLi>
      <CommentContainer>
        <CommentBodyDiv>
          <span>{commentContent}{' '}</span>
          <UserNameContainer>
            –&nbsp;
            <UserNameLink to={`/users/${userId}`}>{userName}</UserNameLink>
          </UserNameContainer>
        </CommentBodyDiv>
      </CommentContainer>
    </CommentLi>
  )
}

CommentsBox.propTypes = {
  comment: PropTypes.object.isRequired,
};

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};
