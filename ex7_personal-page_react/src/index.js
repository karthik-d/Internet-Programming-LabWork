import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './index.css';
import './styles.css';
import ReactDOM from "react-dom/client";
import Home from './Pages/Home';
import Courses from './Pages/Courses';

import Header from './Components/Header';
import ToSSN from './Components/ToSSN';
import Qualifications from './Components/Qualifications';
import Interests from './Components/Interests';
import Events from './Components/Events';
import Contact from './Components/Contact';
import Search from './Components/Search';
import List from './Components/List';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tossn" element={<ToSSN />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
