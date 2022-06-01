
//Example for React Routing Incorporation

/*import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';


const Home = () => (
  <div>
    <h2> Home </h2>
  </div>
);

const Airport = () => (
  <div>
     <ul>
      <li>Jomo Kenyatta</li>
      <li>Tambo</li>
      <li>Murtala Mohammed</li>
    </ul>
  </div>
);

const City = () => (
  <div>
    <ul>
      <li>San Francisco</li>
      <li>Istanbul</li>
      <li>Tokyo</li>
    </ul>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/airports">Airports</Link></li>
          <li><Link to="/cities">Cities</Link></li>
        </ul>

        <Route path="/" exact component={Home}/>
        <Route path="/airports" component={Airport}/> 
        <Route path="/airports"
       render={() => (<div> This is the airport route </div>)}/>
		<Route path="/cities" component={City}/>
      </div>
    );
  }
}

export default App;

*/
 
 /*
//Example for React Nested Routing

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';


const Courses = ({ match }) => (
  <div>
  <h2> Courses </h2>
     <ul>
        <li><Link to="/courses/technology">Technology</Link></li>
        <li><Link to="/courses/business">Business</Link></li>
        <li><Link to="/courses/economics">Economics</Link></li>
    </ul>


    <Route exact path="/courses/technology" render={() => (<div> This is technology </div>)}/>
    <Route path="/courses/business" render={() => (<div> This is business </div>)}/>
    <Route path="/courses/economics" render={() => (<div> This is economics </div>)}/>
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


    <Route exact path="/Colleges/IIT" render={() => (<div> <h2> I aimed for IIT-Madras </h2> </div>)}/>
    <Route path="/Colleges/NITs" render={() => (<div> <h2> I aimed for NIT-Trichy </h2></div>)}/>
    <Route path="/Colleges/SSN" render={() => (<div> <h1> I love studying in SSN. SSN is the BEST !!! </h1></div>)}/>
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
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
                 
        </ul>

        <Route path="/" exact component={Home}/>
        <Route path="/courses" component={Courses}/>
        <Route path="/Colleges" component={Colleges}/>
      </div>
    );
  }
}

export default App;


*/


//React Nested Routing with Parameters

import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class App extends Component
 {
render()
{
	return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
        </ul>

        <Switch>
          <Route path="/Courses">
            <Courses />
          </Route>
          <Route path="/Colleges">
            <Colleges />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
 }
 export default App;

function Home() {
  return( <div><h2>Home</h2>
  <ul>
          <li>
            <Link to="/Courses">Courses</Link>
          </li>
          <li>
            <Link to="/Colleges">Colleges</Link>
          </li>
</ul></div>);
}

function Courses() {
	let match = useRouteMatch();
  return ( <div><h2>Courses</h2>
  <ul>
          <li>
            <Link to="/Courses/Technology">Technology</Link>
          </li>
          <li>
            <Link to="/Courses/Business">Business</Link>
          </li>
</ul>
		<Switch>
        <Route path={`${match.path}/Technology`}
          render={() => (<div> This course is on Technology </div>)}>
        </Route>
        <Route path={`${match.path}/Business`}
          render={() => (<div> This course is on Business </div>)}>
        </Route>
        
      </Switch>
</div>);
}
function Colleges() {
	let match = useRouteMatch();
  return ( <div><h2>Colleges</h2>
  <ul>
          <li>
            <Link to="/Colleges/IIM">IIM</Link>
          </li>
          <li>
            <Link to="/Colleges/SSN">SSN</Link>
          </li>
</ul>
		<Switch>
		<Route path={`${match.path}/IIM`}
          render={() => (<div> This college is special in Business studies</div>)}>
        </Route>
        <Route path={`${match.path}/SSN`}
          render={() => (<div> This college is special in Technology studies</div>)}>
        </Route>
        
        
      </Switch>
</div>);
}



