import {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import {styled} from 'styled-components';

import {serverUrl, getAvatarUrl} from '../index';
import Header from '../components/Header';
import LeftSide from '../components/LeftSide';

const MainContainer = styled.div`
  width: 100%;
  padding: 0;
`;

const HeadlineContainer = styled.div`
  position: relative !important;
  margin-bottom: 16px !important;
`;

const HeadlineDiv = styled.div`
  display: flex !important;
  align-items: center !important;
  flex-wrap: wrap !important;
  margin: -8px;
`;

const AvatarLink = styled(Link)`
  margin: 8px;
`;

const AvatarContainer = styled.div`
  box-shadow: 0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05) !important;
  border-radius: 6px !important;
`;

const Img = styled.img`
  display: block !important;
  border-radius: 6px !important;
`;

const UserInfoContainer = styled.div`
  margin: 8px;
`;

const UserNameContainer = styled.div`
  max-width: calc(97.2307692rem * 3) !important;
  align-items: center !important;
  flex-wrap: wrap !important;
  margin: -4px;
`;

const UserNameDiv = styled.div`
  margin: 4px;
  line-height: 1 !important;
  font-size: 2.61538461rem !important;
  margin-bottom: 12px !important;
`;

export default function UserPage() {
  const {userId} = useParams();
  const [user, setUser] = useState(null);

  const userUrl = `${serverUrl}/users/${userId}`;
  const fetchUser = async () => {
    try {
      const response = await fetch(userUrl);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        const error = new Error('Error fetching user');
        error.status = response.status;
        throw error;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const userName = user?.name;
  const avatarUrl = getAvatarUrl(userId);

  return (
    <div>
      <Header />
      <div className='body-container'>
        <LeftSide />
        <div className='content'>
          <MainContainer>
            <HeadlineContainer>
              <HeadlineDiv>
                <AvatarLink to={`/users/${userId}`}>
                  <div>
                    <AvatarContainer>
                      <Img src={avatarUrl} alt={userName} width={128} height={128} />
                    </AvatarContainer>
                  </div>
                </AvatarLink>
                <UserInfoContainer>
                  <UserNameContainer>
                    <UserNameDiv>{' '}{userName}{' '}</UserNameDiv>
                  </UserNameContainer>
                </UserInfoContainer>
              </HeadlineDiv>
            </HeadlineContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  );
}
