import {useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {styled} from 'styled-components';

import Header from '../components/Header';

const LogoutContainer = styled.div`
  max-width: 100%;
  justify-content: center;
  margin: 0;
  background-color: hsl(210,8%,95%);
`;

const LogoutContent = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0;
  background-color: transparent;
  border-left: 0;
  border-right: 0;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

const Form = styled.form`
  max-width: calc(97.2307692rem / 12 * 3) !important;
  box-shadow: 0 10px 24px hsla(0,0%,0%,0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1) !important;
  padding: 24px !important;
  margin-bottom: 24px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  background-color: hsl(0,0%,100%) !important;
  border-radius: 7px !important;
`;

const ButtonContainer = styled.div`
  display: flex !important;
  margin: -2px;
`;

const LogoutButton = styled.button`
  margin: 2px;

  &:hover {
    background-color: hsl(209,100%,37.5%);
    color: hsl(0, 0%, 100%);
  }
`;

const CancelLink = styled(Link)`
  background-color: transparent;
  color: hsl(206,100%,40%);
  margin: 2px;
  box-shadow: none;
  
  &:hover {
    background-color: hsl(206,100%,97%);
    color: hsl(206,100%,40%);
  }
`;

const CaptionContainer = styled.div`
  text-align: left !important;
  color: hsl(210,8%,45%) !important;
  font-size: 12px !important;
  margin-top: 32px !important;
`;

export default function LogoutPage() {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.removeItem('token');
    localStorage.removeItem('aiToken');
    navigate('/');
  };

  return !isLoggedIn ? null : (
    <div>
      <Header />
      <LogoutContainer className='body-container'>
        <LogoutContent className='content'>
          <div>
            <Form onSubmit={handleSubmit}>
              <ButtonContainer>
                <LogoutButton className='button'>Log out</LogoutButton>
                <CancelLink className='button' onClick={() => navigate(-1)}>Cancel</CancelLink>
              </ButtonContainer>
              <CaptionContainer>
                {' '}If you’re on a shared computer, remember to log out of your Open ID provider (Facebook, Google, Stack Exchange, etc.) as well.{' '}
              </CaptionContainer>
            </Form>
          </div>
        </LogoutContent>
      </LogoutContainer>
    </div>
  );
}
