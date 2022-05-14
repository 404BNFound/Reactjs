import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Test from './components/Test';
import Login from './components/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
