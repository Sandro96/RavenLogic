import './App.css'
import Navbar from "./components/Navbar/Navbar.tsx";
import Hero from "./components/Hero/Hero.tsx";
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Hero /> } />
      </Routes>
    </>
  )
}

export default App