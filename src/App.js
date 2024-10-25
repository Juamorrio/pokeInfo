import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './views/Details.jsx';
import Index from './views/Index.jsx';
import Inicio from './views/Inicio.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Index' element={<Index/>}/>
        <Route path='/details/:pokemonName' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
