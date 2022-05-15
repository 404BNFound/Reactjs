import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ChoixCapsule from './components/ChoixCapsule';
import Destination from './components/Destination';
import Information from './components/Information';
import Accueil from './components/Accueil';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ChoixCapsule" element={<ChoixCapsule />} />
          <Route path="/Information" element={<Information />} />


        </Routes>
    
       
      </Router>
    </div>
  );
}

export default App;
