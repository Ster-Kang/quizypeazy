import { Routes, Route } from 'react-router-dom';
import './App.css';
import CreateQuiz from './pages/create/CreateQuiz';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CreateQuiz />}></Route>
    </Routes>
  );
}

export default App;
