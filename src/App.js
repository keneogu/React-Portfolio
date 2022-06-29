import './App.css';
import Sidebar from './Components/Sidebar';
import Home from '../src/Container/Home/Home.js';
import About from '../src/Container/About/About';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Portfolio from '../src/Container/Portfolio/Portfolio';
import Contact from '../src/Container/Contact/Contact';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
