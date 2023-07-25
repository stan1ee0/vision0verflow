import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {styled} from 'styled-components';
import PropTypes from 'prop-types';

import {serverUrl} from '../index';

const BoardContainer = styled.div`
  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px 12px;
`;

const UserInfoContainer = styled.div`
  overflow: hidden;
  padding: 5px 6px 7px 7px;
  color: hsl(210,8%,45%);
`;

const UserAvatarDiv = styled.div`
  float: left;
  width: 48px;
  height: 48px;
`;

const AvatarContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 2px;
  padding: 0;
  overflow: hidden;
`;

const Img = styled.img`
  width: 48px;
  height: 48px;
  margin: 0 auto;
  border-radius: 4px !important;
`;

const UserDetailsDiv = styled.div`
  margin-left: 9px;
  width: calc(100% - 64px);
  line-height: 1.3;
  float: left;
  word-wrap: break-word;
`;

const UserDetailsLink = styled(Link)`
  display: inline-block;
  font-size: 1.15384615rem;
`;

const LocationSpan = styled.span`
  font-size: 12px;
  margin-bottom: 2px;
  display: block;
`;

const UserFlairDiv = styled.div`
  line-height: 1;
  margin-bottom: 4px;
`;

const ReputationSpan = styled.span`
  font-weight: bold;
  font-size: 12px;
  margin-right: 2px;
`;

const UserTagsDiv = styled.div`
  clear: both;
  font-size: 12px;
  margin-left: 57px;
`;

export default function UsersBoard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const usersUrl = `${serverUrl}/users`;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(usersUrl);
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
          setLoading(false);
        } else {
          const error = new Error('Error getting users');
          error.status = response.status;
          throw error;
        }
      } catch(error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return loading ? (
    <BoardContainer>loading...</BoardContainer>
    ) : (
    <BoardContainer>
      {users.map((user) => (
        <UsersBox key={user.id} user={user} />
      ))}
    </BoardContainer>
  );
}

function UsersBox({user}) {
  const userId = user.id;
  const userName = user.name;

  return (
    <UserInfoContainer>
      <UserAvatarDiv>
        <Link to={`/users/${userId}`}>
          <AvatarContainer>
            {userId == 1 ? (
            <Img alt={userName} width="48" height="48"
              src='https://s3.amazonaws.com/comicgeeks/characters/avatars/1616.jpg?t=1687973152'
            />
            ) : (
            <Img alt={userName} width="48" height="48"
              src='https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
            />
            )}
          </AvatarContainer>
        </Link>
      </UserAvatarDiv>
      {userId == 1 ? (
      <UserDetailsDiv>
        <UserDetailsLink to={`/users/${userId}`}>{userName}</UserDetailsLink>
        <LocationSpan>{' '}Marvel{' '}</LocationSpan>
        <UserFlairDiv>
          <ReputationSpan>100</ReputationSpan>
        </UserFlairDiv>
      </UserDetailsDiv>
      ) : (
      <UserDetailsDiv>
        <UserDetailsLink to={`/users/${userId}`}>{userName}</UserDetailsLink>
        <LocationSpan>{' '}OpenAI{' '}</LocationSpan>
        <UserFlairDiv>
          <ReputationSpan>200</ReputationSpan>
        </UserFlairDiv>
      </UserDetailsDiv>
      )}
      {userId == 1 ? (
      <UserTagsDiv>
        <Link>vision</Link>
        ,{' '}
        <Link>marvel</Link>
      </UserTagsDiv>
      ) : (
      <UserTagsDiv>
        <Link>chatgpt</Link>
        ,{' '}
        <Link>openai</Link>
      </UserTagsDiv>
      )}
    </UserInfoContainer>
  );
}

UsersBox.propTypes = {
  user: PropTypes.object.isRequired,
};
