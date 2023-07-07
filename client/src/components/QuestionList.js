import { useState, useEffect } from 'react';
import { rootUrl } from '../index';

import QuestionItem from './QuestionItem';

export default function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const questionsUrl = `${rootUrl}/questions`;

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
