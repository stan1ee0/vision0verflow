import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {styled} from 'styled-components';

import {serverUrl} from '../index';
import Header from '../components/Header';

const LoginContainer = styled.div`
  max-width: 100%;
  justify-content: center;
  margin: 0;
  background-color: hsl(210,8%,95%);
`;

const LoginContent = styled.div`
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

const LogoContainer = styled.div`
  text-align: center !important;
  font-size: 1.61538462rem; !important;
  margin-bottom: 24px !important;
  margin-left: auto !important;
  margin-right: auto !important;
`;

const Svg = styled.svg`
  vertical-align: bottom;
`;

const ButtonsContainer = styled.div`
  max-width: calc(97.2307692rem / 12 * 3) !important;
  display: flex !important;
  margin-bottom: 16px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  flex-direction: column !important;
  margin: calc(8 / 2 * -1);
`;

const GoogleButton = styled.button`
  margin: 4px;
  margin-right: 0;
  margin-left: 0;
  flex: 1 auto;
  border-color: hsl(210, 8%, 85%) !important;
  border-radius: 5px !important;
  border-style: solid !important;
  border-width: 1px !important;
  background-color: hsl(0,0%,100%);
  border: 1px solid hsl(210,8%,85%);
  box-shadow: none;
  color: hsl(210,8%,25%);
  font-size: 13px;
  padding: 0.8em;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-weight: normal;
  line-height: calc(15 / 13);
  position: relative;
  outline: none;
  text-align: center;
  text-decoration: none;
  user-select: none;

  &:hover {
    background-color: hsl(210,8%,97.5%);
    color: hsl(210,8%,25%);
  }
`;

const ButtonSvg = styled.svg`
  vertical-align: baseline;
  margin-top: -0.3em;
  margin-bottom: -0.3em;
  transition: opacity 200ms cubic-bezier(.165, .84, .44, 1);
`;

const GithubButton = styled.button`
  margin: 4px;
  margin-right: 0;
  margin-left: 0;
  flex: 1 auto;
  border-color: hsl(210, 8%, 85%) !important;
  border-radius: 5px !important;
  border-style: solid !important;
  border-width: 1px !important;
  background-color: hsl(210, 8%, 20%);
  border: 1px solid transparent;
  box-shadow: none;
  color: hsl(0,0%,100%);
  font-size: 13px;
  padding: 0.8em;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-weight: normal;
  line-height: calc(15 / 13);
  position: relative;
  outline: none;
  text-align: center;
  text-decoration: none;
  user-select: none;

  &:hover {
    background-color: hsl(210, 8%, 15%);
    color: hsl(0, 0%, 100%);
  }
`;

const FormContainer = styled.div`
  max-width: calc(97.2307692rem / 12 * 3) !important;
  box-shadow: 0 10px 24px hsla(0,0%,0%,0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1) !important;
  padding: 24px !important;
  margin-bottom: 24px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  background-color: hsl(0,0%,100%) !important;
  border-radius: 7px !important;
`;

const Form = styled.form`
  display: flex !important;
  flex-direction: column !important;
  margin: -6px;
  margin-right: 0;
  margin-left: 0;
`;

const EmailContainer = styled.div`
  margin: 6px;
  margin-right: 0;
  margin-left: 0;
  display: flex !important;
  flex-direction: column !important;
`;

const Label = styled.label`
  margin: 2px;
  margin-right: 0;
  margin-left: 0;
  cursor: pointer;
  font-size: 1.15384615rem;
  color: hsl(210,8%,5%);
  font-family: inherit;
  font-weight: 600;
  padding: 0 2px;
`;

const InputContainer = styled.div`
  margin: 2px;
  margin-right: 0;
  margin-left: 0;
  position: relative !important;
  display: flex !important
`;

const PasswordContainer = styled.div`
  margin: 6px;
  margin-right: 0;
  margin-left: 0;
  display: flex !important;
  flex-direction: column-reverse !important;
`;

const ButtonContainer = styled.div`
  margin: 6px;
  margin-right: 0;
  margin-left: 0;
  display: flex !important;
  flex-direction: column !important;
`;

const LoginButton = styled.button`
  margin: 2px;
  margin-right: 0;
  margin-left: 0;

  &:hover {
    background-color: hsl(209,100%,37.5%);
    color: hsl(0, 0%, 100%);
  }
`;

const BottomContainer = styled.div`
  max-width: calc(97.2307692rem / 12 * 3) !important;
  width: 100% !important;
  text-align: center !important;
  font-size: 13px !important;
  padding: 16px !important;
  margin-bottom: 24px !important;
  margin-left: auto !important;
  margin-right: auto !important;
`;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const authUrl = `${serverUrl}/auth`;
  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(authUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status == 404) {
        throw new Error('No user found with matching email');
      } else if (response.status == 401) {
        throw new Error('Not matching password');
      } else {
        throw new Error('Error authenticating user');
      }
    })
    .then((data) => {
      console.log('User authenticated successfully!');
      setEmail('');
      setPassword('');
      localStorage.setItem('token', data.token);
      localStorage.setItem('aiToken', data.aiToken);
      navigate(-1);
    })
    .catch((error) => {
      console.error('Error authenticating user:', error);
    });
  };

  return isLoggedIn ? null : (
    <div>
      <Header />
      <LoginContainer className='body-container'>
        <LoginContent className='content'>
          <div>
            <LogoContainer>
              <Link to="/">
                <Svg width="32" height="37" viewBox="0 0 32 37">
                  <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
                  <path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="#F48024"></path>
                </Svg>
              </Link>
            </LogoContainer>
            <ButtonsContainer>
              <GoogleButton>
                <ButtonSvg width="18" height="18" viewBox="0 0 18 18">
                  <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"></path>
                  <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"></path>
                  <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"></path>
                  <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"></path>
                </ButtonSvg>
                {' '}Log in with Google{' '}
              </GoogleButton>
              <GithubButton>
                <ButtonSvg width="18" height="18" viewBox="0 0 18 18">
                  <path fill="#010101" d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z"></path>
                </ButtonSvg>
                {' '}Log in with Github{' '}
              </GithubButton>
            </ButtonsContainer>
            <FormContainer>
              <Form onSubmit={handleSubmit}>
                <EmailContainer>
                  <Label htmlFor="email">Email</Label>
                  <InputContainer>
                    <input className='input' id="email" type="email" size="30" maxLength="100" name="email"
                      value={email} onChange={(event) => setEmail(event.target.value)}
                    />
                  </InputContainer>
                </EmailContainer>
                <PasswordContainer>
                  <InputContainer>
                    <input className='input' id="password" type="password" autoComplete="off" name="password"
                      value={password} onChange={(event) => setPassword(event.target.value)}
                    />
                  </InputContainer>
                  <Label htmlFor="password">Password</Label>
                </PasswordContainer>
                <ButtonContainer>
                  <LoginButton className='button' type="submit">Log in</LoginButton>
                </ButtonContainer>
              </Form>
            </FormContainer>
            <BottomContainer>
              {' '}Don’t have an account?{' '}
              <Link to ='/users/signup'>Sign up</Link>
            </BottomContainer>
          </div>
        </LoginContent>
      </LoginContainer>
    </div>
  );
}
