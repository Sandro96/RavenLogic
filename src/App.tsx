import './App.css';
import Navbar from './components/Navbar/Navbar.tsx';
import Hero from './components/Hero/Hero.tsx';
import { Route, Routes } from 'react-router';
import Services from './components/Services/Services.tsx';
import Portfolio from './components/Portfolio/Portfolio.tsx';
import Us from './components/Us/Us.tsx';
import Contact from './components/Contact/Contact.tsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Hero /> } />
        <Route path='/services' element={ <Services /> } />
        <Route path='/portfolio' element={ <Portfolio /> } />
        <Route path='/us' element={ <Us /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </>
  )
}

export default App;