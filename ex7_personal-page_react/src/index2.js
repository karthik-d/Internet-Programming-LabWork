//index.js
//import React from 'react';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/*
//Example 10
//Rendering a Component in React
//Note: Always start component names with a capital letter.

//React treats components starting with lowercase letters as DOM tags. 
//For example, <div /> represents an HTML div tag, 
//but <Welcome /> represents a component and requires Welcome to be in scope.

function Welcome(props) 
{  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Valli" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

*/

/*
//Handling Component properties by Props
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

ReactDOM.render(<Car color="red"/>, document.getElementById('root'));
*/


/*//Composing Components
//Components can refer to other components in their output. 
//This lets us use the same component abstraction for any level of detail. 
//A button, a form, a dialog, a screen: 
//in React apps, all those are commonly expressed as components.

//create an App component that renders Welcome many times

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Valli" />     
	  <Welcome name="Class 6B" />     
	  <Welcome name="for the interesting IP subject" />    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/

/*

//Components in Components and Files
import MKS from './myknowledgesummary.js';

class ReactProgramming extends React.Component {
  render() {
    return <h2>I am practising React!</h2>;
  }
}

class IP extends React.Component {
  render() {
    return (
      <div>
      <h1>Internet Programming is very interesting</h1>
      <ReactProgramming /> 
	  <MKS /> 
      </div>
    );
  }
}
ReactDOM.render(<IP />, document.getElementById('root'));
*/

/*
//Props are a way we can pass external data into a component, 
//which can then render the prop onto the web page.
//create component
class TodoComponent extends React.Component
{
	render()
	{
		return(
		<div>
		<h1>Welcome</h1>
		<p>Mumbai Indians</p>
		<p>{this.props.mssg}</p>
		<p>Name:{this.props.team.name}</p>
		<p>Practise:{this.props.team.practise}</p>
		<p>DateofPractise:{this.props.team.PDate}</p>
		
		</div>
		);
	}
}

var myTeam={name:"MI", practise:"At SSN", PDate:"till April 20th"};

//put component into HTML
ReactDOM.render(<TodoComponent mssg="I like Cricket" team={myTeam}/>,document.getElementById('root'));
*/


/*
class TodoComponent extends React.Component
{
	getInitialState()
	{
		return(
			todolistofitems:['wash up','eat','take nap']
		    ); 
	}
	render()
	{
		return(
		<div id="todoitems">
		<p>Bussies people relax a lot</p>
		<ul>
		<li>{this.state.todolistofitems[0]}</li>
		<li>{this.state.todolistofitems[1]}</li>
		<li>{this.state.todolistofitems[2]}</li>
		</ul>
		<ListComprehension todolistofitems={this.state.todolistofitems}/>
		</div>
	);
	}
};
		
ReactDOM.render(<TodoComponent />,document.getElementById('root'));
	
*/




/*
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>
  }
}

const myelement = <Car brand="Ford" />;

ReactDOM.render(myelement, document.getElementById('root'));
*/

/*//Send the "brand" property from the Garage component to the Car component:

	class Car extends React.Component
	{
	render()
	{
		return(<p> I am having {this.props.brand}</p>);
	}
	}

	class Garage extends React.Component
	{
		render()
		{
			return(
		<Car brand="Ford"/>);	
		}
	
	}
ReactDOM.render(<Garage />,document.getElementById("root"));
*/
	
/*
function shoot() {
  alert("Great Shot!");
}

const myelement = (
  <button onClick={shoot}>Take the shot!</button>
);


ReactDOM.render(myelement, document.getElementById('root'));	
*/	
class Football extends React.Component {
  shoot() {
    alert("Great Shot!");
  }
  render() {
    return (
      <button onClick={this.shoot}>Take the shot!</button>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));