import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './index.css';
import './styles.css';
import ReactDOM from "react-dom/client";
import Home from './Pages/Home';
import Courses from './Pages/Courses';

import Header from './Components/Header';
import ToSSN from './Components/ToSSN';
import Search from './Components/Search';
import List from './Components/List';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tossn" element={<ToSSN />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
