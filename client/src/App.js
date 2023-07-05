import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
import AskPage from './pages/AskPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/questions/ask" element={<AskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
