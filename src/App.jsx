import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Body from './components/Body/Body';
import Skills from './components/Skills/Skills';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <div>
    
      <BrowserRouter>
        <NavBar />
        <Body />
        <Skills/>
      </BrowserRouter>

    </div>
  )
}

export default App
