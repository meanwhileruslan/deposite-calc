import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Calc from './screens/calc';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Calc/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
