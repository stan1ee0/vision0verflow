import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {styled} from 'styled-components';

import {serverUrl} from '../index';
import Header from '../components/Header';

const SignupContainer = styled.div`
  max-width: 100%;
  justify-content: center;
  margin: 0;
  background-color: hsl(210,8%,95%);
`;

const SignupContent = styled.div`
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

const InnerContainer = styled.div`
  display: flex !important;
  align-items: center !important;
`;

const LeftSideContainer = styled.div`
  max-width: calc(97.2307692rem / 3) !important;
  font-size: 1.15384615rem !important;
  margin-bottom: 128px !important;
  margin-right: 48px !important;
`;

const H1 = styled.h1`
  line-height: 1 !important;
  font-size: 2.07692308rem !important;
  margin-bottom: 32px !important;
  font-weight: unset;
`;

const ItemContainer = styled.div`
  display: flex !important;
  margin-bottom: 24px !important;
`;

const SvgContainer = styled.div`
  margin-right: 8px !important;
  path {
    fill: hsl(206,100%,52%) !important;
  }
`;

const Svg = styled.svg`
  vertical-align: bottom;
  margin-top: -2px !important;
`;

const LeftBottomDiv = styled.div`
  color: hsl(210,8%,45%) !important;
  font-size: 13px !important;
`;

const RightSideContainer = styled.div`
  flex-shrink: 0 !important;
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

const NameContainer = styled.div`
  margin: 6px;
  margin-right: 0;
  margin-left: 0;
  display: flex !important;
  flex-direction: column !important;
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

const P = styled.p`
  color: hsl(210,8%,45%) !important;
  font-size: 12px !important;
  margin-bottom: 4px !important;
  margin-top: 4px !important;
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

const RightBottomDiv = styled.div`
  text-align: left !important;
  color: hsl(210,8%,45%) !important;
  font-size: 12px !important;
  margin-top: 32px !important;
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

    const data = {
      email: email,
      password: password,
    };

    fetch(authUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
      const token = data.token;
      const aiToken = data.aiToken;
      localStorage.setItem('token', token);
      localStorage.setItem('aiToken', aiToken);
      navigate(-1);
    })
    .catch((error) => {
      console.error('Error authenticating user:', error);
    });
  };

  return isLoggedIn ? null : (
    <div>
      <Header />
      <SignupContainer className='body-container'>
        <SignupContent className='content'>
          <InnerContainer>
            <LeftSideContainer>
              <H1>Join the Stack Overflow community</H1>
              <ItemContainer>
                <SvgContainer>
                  <Svg width="26" height="26">
                    <path opacity=".5" d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"></path>
                    <path d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"></path>
                  </Svg>
                </SvgContainer>
                <div>Get unstuck — ask a question</div>
              </ItemContainer>
              <ItemContainer>
                <SvgContainer>
                  <Svg width="26" height="26">
                    <path d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"></path>
                    <path opacity=".5" d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"></path>
                  </Svg>
                </SvgContainer>
                <div>Unlock new privileges like voting and commenting</div>
              </ItemContainer>
              <ItemContainer>
                <SvgContainer>
                  <Svg width="26" height="26">
                    <path d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"></path>
                    <path opacity=".5" d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"></path>
                  </Svg>
                </SvgContainer>
                <div>Save your favorite questions, answers, watch tags, and more</div>
              </ItemContainer>
              <ItemContainer>
                <SvgContainer>
                  <Svg width="26" height="26">
                    <path d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"></path>
                  </Svg>
                </SvgContainer>
                <div>Earn reputation and badges</div>
              </ItemContainer>
              <LeftBottomDiv>
                {' '}Collaborate and share knowledge with a private group for FREE.
                <br />
                <Link>Get Stack Overflow for Teams free for up to 50 users</Link>
              </LeftBottomDiv>
            </LeftSideContainer>
            <RightSideContainer>
              <ButtonsContainer>
                <GoogleButton>
                  <ButtonSvg width="18" height="18" viewBox="0 0 18 18">
                    <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"></path>
                    <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"></path>
                    <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"></path>
                    <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"></path>
                  </ButtonSvg>
                  {' '}Sign up with Google{' '}
                </GoogleButton>
                <GithubButton>
                  <ButtonSvg width="18" height="18" viewBox="0 0 18 18">
                    <path fill="#010101" d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z"></path>
                  </ButtonSvg>
                  {' '}Sign up with Github{' '}
                </GithubButton>
              </ButtonsContainer>
              <FormContainer>
                <Form onSubmit={handleSubmit}>
                  <NameContainer>
                    <Label htmlFor="display-name">Display name</Label>
                    <InputContainer>
                      <input className='input' id="display-name" type="text" name="display-name"
                        value={email} onChange={(event) => setEmail(event.target.value)}
                      />
                    </InputContainer>
                  </NameContainer>
                  <EmailContainer>
                    <Label htmlFor="email">Email</Label>
                    <InputContainer>
                      <input className='input' id="email" type="email" size="30" maxLength="100" name="email"
                        value={email} onChange={(event) => setEmail(event.target.value)}
                      />
                    </InputContainer>
                  </EmailContainer>
                  <PasswordContainer>
                    <P>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</P>
                    <InputContainer>
                      <input className='input' id="password" type="password" autoComplete="off" name="password"
                        value={password} onChange={(event) => setPassword(event.target.value)}
                      />
                    </InputContainer>
                    <Label htmlFor="password">Password</Label>
                  </PasswordContainer>
                  <ButtonContainer>
                    <LoginButton className='button' type="submit">Sign up</LoginButton>
                  </ButtonContainer>
                </Form>
                <RightBottomDiv>
                  {' '}By clicking “Sign up”, you agree to our{' '}
                  <Link>terms of service</Link>
                  {' '}and acknowledge that you have read and understand our{' '}
                  <Link>privacy policy</Link>
                  {' '}and{' '}
                  <Link>code of conduct</Link>
                  .
                </RightBottomDiv>
              </FormContainer>
              <BottomContainer>
              {' '}Already have an account?{' '}
              <Link to='/users/login'>Log in</Link>
              </BottomContainer>
            </RightSideContainer>
          </InnerContainer>
        </SignupContent>
      </SignupContainer>
    </div>
  );
}
