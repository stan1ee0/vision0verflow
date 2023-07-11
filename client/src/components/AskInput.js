import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { rootUrl } from '../index';

const AskInputMain = styled.div`
  margin-bottom: 48px;
  display: block;
`;

const AskInputBoxContainer = styled.div`
  width: 100% !important;
  display: flex !important;
  align-items: flex-start !important;
`;

const AskInputBox = styled.div`
  width: 70% !important;
  flex-shrink: 0 !important;
  background-color: white;
  border-color: hsl(210, 8%, 90%);
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  padding: 24px;
  margin: 20px 0;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  cursor: unset;
  font-size: 13px;
  opacity: unset;
  padding: 0.6em 0.7em 0.6em 32px;
`;

const Textarea = styled.textarea`
  width: 100%;
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

    const data = {
      title: title,
      content: content,
    };

    fetch(questionsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        <AskInputBoxContainer>
          <AskInputBox>
            <div>
              <label htmlFor="title"> Title </label>
            </div>
            <div>
              <label htmlFor="title">
                {' '}
                Be specific and imagine you’re asking a question to another
                person.{' '}
              </label>
            </div>
            <div>
              <Input id="title" name="title" type="text" maxLength={300}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                value={title} onChange={(event) => setTitle(event.target.value)}
              />
            </div>
          </AskInputBox>
        </AskInputBoxContainer>
        <AskInputBoxContainer>
          <AskInputBox>
              <div>
                <label htmlFor="content"> Content </label>
              </div>
              <div>
                <label htmlFor="content">
                  Introduce the problem and expand on what you put in the title.
                </label>
              </div>
              <div>
                <Textarea id="content" name="content" rows={10}
                  value={content} onChange={(event) => setContent(event.target.value)}
                />
              </div>
            </AskInputBox>
        </AskInputBoxContainer>
        <Button type="submit">Post Your Question</Button>
      </AskInputMain>
    </form>
  );
}
