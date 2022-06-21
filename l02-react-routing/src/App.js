//Example for React Nested Routing

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


const Courses = ({ match }) => (
  <div>
    <h2> Courses </h2>
    <ul>
      <li><Link to="/courses/technology">Technology</Link></li>
      <li><Link to="/courses/business">Business</Link></li>
      <li><Link to="/courses/economics">Economics</Link></li>
    </ul>
    <Routes>
      <Route exact path="/courses/technology" render={() => (<div> This is technology </div>)} />
      <Route path="/courses/business" render={() => (<div> This is business </div>)} />
      <Route path="/courses/economics" render={() => (<div> This is economics </div>)} />
    </Routes>
  </div>
);

const Colleges = ({ match }) => (
  <div>
    <h2> Colleges </h2>
    <ul>
      <li><Link to="/Colleges/IIT">IIT</Link></li>
      <li><Link to="/Colleges/NITs">NITs</Link></li>
      <li><Link to="/Colleges/SSN">SSN</Link></li>
    </ul>
    <Routes>
      <Route exact path="/Colleges/IIT" render={() => (<div> <h2> I aimed for IIT-Madras </h2> </div>)} />
      <Route path="/Colleges/NITs" render={() => (<div> <h2> I aimed for NIT-Trichy </h2></div>)} />
      <Route path="/Colleges/SSN" render={() => (<div> <h1> I love studying in SSN. SSN is the BEST !!! </h1></div>)} />
    </Routes>
  </div>
);


const Home = () => (
  <div>
    <h2> Home </h2>
    <ul>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/colleges">Colleges</Link></li>
    </ul>
  </div>
);


class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/Colleges">Colleges</Link></li>
        </ul>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/Colleges" element={<Colleges />} />
        </Routes>
        <footer style={{ textAlign: 'center' }}>
          Credits: <h4>Karthik D, 195001047</h4>
        </footer>
      </Router >
    );
  }
}

export default App;
