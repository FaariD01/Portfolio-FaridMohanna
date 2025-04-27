import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Body from './components/Body/Body';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Servicios from './components/Servicios/Servicios';
import Portfolio from './components/porfolio/Portfolio';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <div>
    
      <BrowserRouter>
        <NavBar />
        <Body />
        <Skills/>
        <Servicios/>
        <Portfolio/>
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App
