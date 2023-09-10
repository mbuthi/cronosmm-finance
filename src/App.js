import logo from './logo.svg';
import './App.css';
import Cron from './pages/Cron/Cron';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cron />} />
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
