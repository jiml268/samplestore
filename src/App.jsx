import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import NavBar from './pages/NavBar/Navbar';

function App() {
 

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        
      </Routes>
    </>
  )
}

export default App
