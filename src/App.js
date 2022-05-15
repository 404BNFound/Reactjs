import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< Updated upstream
import Test from './components/Test';
import Login from './components/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ChoixCapsule from './components/ChoixCapsule';
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Accueil from './pages/Accueil';
import React, { useEffect } from 'react';
import Headers from './components/Headers';
import Forfait from './pages/Forfait';
>>>>>>> Stashed changes

import  AOS  from "aos";
import 'aos/dist/aos.css';
function App() {
  
    useEffect(() => {
      AOS.init();
      AOS.refresh();
  }, []);
  return (
    <div className="App">
<<<<<<< Updated upstream
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ChoixCapsule" element={<ChoixCapsule />} />
        </Routes>
    
       
      </Router>
=======
      <Headers/>
      <Forfait/>
      {/* <Accueil/> */}
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
