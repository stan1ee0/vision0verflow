import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { rootUrl } from '../index';

const AskInputMain = styled.div`
  margin-bottom: 48px;
`;

const AskInputTitleContainer = styled.div`
  width: 100% !important;
  display: flex !important;
  gap: 16px 16px;
  align-items: flex-start !important;
`;

const AskInputTitleInnerContainer = styled.div`
  width: 70% !important;
  flex-shrink: 0 !important;
  background-color: hsl(0,0%,100%) !important;
  border-color: hsl(210,8%,90%) !important;
  border-radius: 3px !important;
  border-style: solid !important;
  border-width: 1px !important;
`;

const AskInputTitleDiv = styled.div`
  padding: 24px !important;
`;

const AskInputTitleInnerDiv = styled.div`
  display: flex !important;
  flex-direction: column !important;
  margin-right: 0;
  margin-left: 0;
  margin: -2px;
`;

const AskInputTitleHeadlineContainer = styled.div`
  margin-right: 0;
  margin-left: 0;
  margin: 2px;
  display: flex !important;
  flex-direction: column !important;
`;

const Label = styled.label`
  cursor: pointer;
  font-weight: 600;
`;

const AskInputTitleHeadlineLabelContainer = styled.div`
  display: flex !important;
`;

const AskInputTitleHeadlineLabelInnerContainer = styled.div`
  margin-top: 2px !important;
  margin-bottom: 2px !important;
  flex-basis: 75%;
  color: hsl(210,8%,25%);
  font-size: 12px;
  padding: 0 2px;
`;

const AskInputTitleInputContainer = styled.div`
  margin-right: 0;
  margin-left: 0;
  margin: 2px;
  position: relative !important;
  display: flex !important;
`;

const Input = styled.input`
  padding: 0.6em 0.7em 0.6em 0.7em !important;
`;

const AskInputContentContainer = styled.div`
  width: 100% !important;
  display: flex !important;
  margin-top: 12px !important;
  gap: 16px 16px;
  align-items: flex-start !important;
`;

const AskInputContentInnerContainer = styled.div`
  width: 70% !important;
  flex-shrink: 0 !important;
  background-color: hsl(0,0%,100%) !important;
  border-color: hsl(210,8%,90%) !important;
  border-radius: 3px !important;
  border-style: solid !important;
  border-width: 1px !important;
`;

const AskInputContentDiv = styled.div`
  padding: 24px !important;
`;

const AskInputContentInnerDiv = styled.div`
  display: flex !important;
  flex-direction: column !important;
  margin-right: 0;
  margin-left: 0;
  margin: -2px;
`;

const AskInputContentHeadlineContainer = styled.div`
  margin-right: 0;
  margin-left: 0;
  margin: 2px;
`;

const AskInputContentHeadlineLabelContainer = styled.div`
  font-weight: normal;
  padding: 0;
  margin-bottom: 6px !important;
  margin-top: 2px !important;
  color: hsl(210,8%,25%);
  font-size: 12px;
`;

const Textarea = styled.textarea`
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  margin-top: 8px;
  background-color: hsl(206, 100%, 52%);
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  font-size: 13px;
  padding: 0.8em;
  cursor: pointer;
  display: inline-block;
  font-weight: normal;
  line-height: calc(15 / 13);
  position: relative;
  outline: none;
  text-align: center;
  text-decoration: none;
  user-select: none;
`;

export default function AskInput() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const questionsUrl = `${rootUrl}/questions`;

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    const data = {
      title: title,
      content: content,
    };

    fetch(questionsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error posting question');
      }
    })
    .then((data) => {
      console.log('Question posted successfully!');
      setTitle('');
      setContent('');
      const questionId = data.id;
      navigate(`/questions/${questionId}`);
    })
    .catch((error) => {
      console.error('Error posting question:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <AskInputMain>
        <AskInputTitleContainer>
          <AskInputTitleInnerContainer>
            <AskInputTitleDiv>
              <AskInputTitleInnerDiv>
                <AskInputTitleHeadlineContainer>
                  <div>
                    <Label className='label' htmlFor="title">
                      {' '}Title{' '}
                    </Label>
                  </div>
                  <AskInputTitleHeadlineLabelContainer>
                    <AskInputTitleHeadlineLabelInnerContainer>
                      <label className='label' htmlFor="title">
                        {' '}Be specific and imagine you’re asking a question to another person.{' '}
                      </label>
                    </AskInputTitleHeadlineLabelInnerContainer>
                  </AskInputTitleHeadlineLabelContainer>
                </AskInputTitleHeadlineContainer>
                <AskInputTitleInputContainer>
                  <Input className='input' id="title" name="title" type="text" maxLength={300}
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                    value={title} onChange={(event) => setTitle(event.target.value)}
                  />
                </AskInputTitleInputContainer>
              </AskInputTitleInnerDiv>
            </AskInputTitleDiv>
          </AskInputTitleInnerContainer>
        </AskInputTitleContainer>
        <AskInputContentContainer>
          <AskInputContentInnerContainer>
            <AskInputContentDiv>
              <AskInputContentInnerDiv>
                <AskInputContentHeadlineContainer>
                  <div>
                    <Label className='label' htmlFor="content">
                      {' '}Content{' '}
                    </Label>
                  </div>
                  <AskInputContentHeadlineLabelContainer>
                    <label className='label' htmlFor="content">
                      {' '}Introduce the problem and expand on what you put in the title.{' '}
                    </label>
                  </AskInputContentHeadlineLabelContainer>
                </AskInputContentHeadlineContainer>
              </AskInputContentInnerDiv>
              <div>
                <Textarea id="content" name="content" rows={10}
                  value={content} onChange={(event) => setContent(event.target.value)}
                />
              </div>
              <ButtonContainer>
                <Button className='button' type='submit'>{' '}Post Your Question{' '}</Button>
              </ButtonContainer>
            </AskInputContentDiv>
          </AskInputContentInnerContainer>
        </AskInputContentContainer>
      </AskInputMain>
    </form>
  );
}
