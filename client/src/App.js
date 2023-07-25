import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
import AskPage from './pages/AskPage';
import QuestionPage from './pages/QuestionPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import UsersPage from './pages/UsersPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/questions' element={<QuestionsPage />} />
        <Route path='/questions/ask' element={<AskPage />} />
        <Route path='/questions/:questionId' element={<QuestionPage />} />
        <Route path='/users/login' element={<LoginPage />} />
        <Route path='/users/logout' element={<LogoutPage />} />
        <Route path='/users' element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
