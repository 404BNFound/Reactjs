import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Test from './components/Test';
import Login from './components/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ChoixCapsule from './components/ChoixCapsule';
import ChoixEndroit from './components/ChoixEndroit';
import Home from './components/Home';
import Information from './components/Information';
import Forfait from './pages/Forfait';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Forfait" element={<ChoixEndroit />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ChoixCapsule" element={<ChoixCapsule />} />
          <Route path="/ChoixEndroit" element={<ChoixEndroit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
