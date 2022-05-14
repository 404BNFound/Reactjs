import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Test from './components/Test';
import Login from './components/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ChoixCapsule from './components/ChoixCapsule';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ChoixCapsule" element={<ChoixCapsule />} />
        </Routes>
    
       
      </Router>
    </div>
  );
}

export default App;