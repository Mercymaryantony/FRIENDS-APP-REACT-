import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>}/>
      <Route path='/v' element={<View/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
