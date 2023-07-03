import { useState, useEffect } from 'react';

import QuestionItem from './QuestionItem';

const rootUrl = process.env.HOST || 'http://localhost:8080';
const questionsUrl = `${rootUrl}/questions`;

export default function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(questionsUrl);
        const data = await response.json();
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {questions.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </div>
  );
}
