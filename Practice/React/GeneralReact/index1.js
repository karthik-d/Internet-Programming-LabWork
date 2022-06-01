//index.js
//import React from 'react';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//const myfirstelement = <h1>Hello React!</h1>
/*
//Example 1: Writing  HTML in React 
//JSX stands for JavaScript XML.
//JSX allows us to write HTML in React.
//JSX makes it easier to write and add HTML in React.

const myelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
ReactDOM.render(myelement, document.getElementById('root'));
*/

/*
//Example 2: Writing HTML in React 
//JSX allows us to write HTML elements in JavaScript 
//Places the HTML in the DOM without any createElement() and/or appendChild() methods

const myelement = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
);

ReactDOM.render(myelement, document.getElementById('root'));
*/

/*
//Example 3: Expressions in JSX
//JSX allows to write expressions inside curly braces { }.

const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

ReactDOM.render(myelement, document.getElementById('root'));
*/


/*
//Example 4:Create a Class component called Car
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
ReactDOM.render(<Car />, document.getElementById('root'));

*/

/*
//Example 5:Create a function component called Car
function Car() {
  return <h2>Hi, I am also a Car!</h2>;
}
ReactDOM.render(<Car />, document.getElementById('root'));

*/

/*
//Example 6:Create a constructor function in the Car component
// and add a color property
//Use the color property in the render() function:
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}
ReactDOM.render(<Car />, document.getElementById('root'));

*/

/*
//Example 7: ES6 Example1
class Car {
  constructor(name) {
    this.brand = name;
  }
}

ReactDOM.render(new Car("Ford").brand, document.getElementById('root'));*/

/*
//Example 8: ES6 Example2
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

//mycar = new Car("Ford");
ReactDOM.render(new Car("Punto").present(), document.getElementById('root'));
//document.write(new Car("Ford").present());*/


/*
//Example 9: ES6 Example3
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
    return this.present() + ', it is a ' + this.model
  }
}
//mycar = new Model("Ford", "Mustang");
//document.write(mycar.show());
//document.write(new Model("Fiat","Punto").show())
ReactDOM.render(new Model("Fiat","Punto").show(), document.getElementById('root'));
*/

/*
//Authentication Check Version 1
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) 
{
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) 
  {    return <UserGreeting />;  
} 
 return <GuestGreeting />;
}
ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,  document.getElementById('root'));
*/

/*
//Summing two numbers
var n1 = parseFloat(prompt("Enter number 1: "));
var n2 = parseFloat(prompt("Enter number 2: "));

ReactDOM.render(
  n1 + " + " + n2 + " = " + sum(n1, n2),
  document.getElementById('root')
);

function sum(a, b){
  return a+b;
}
*/

/*
//Authentication Check Version 2

function UserGreeting(props) {
  return <h1>Welcome back {props.username}!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up {props.username}!</h1>;
}

function AuthenticationFailure(props) {
  return <h1>Please enter correct password, {props.username}!</h1>;
}

function Greeting(props){
  if(props.username==="Valli"){
    if(props.pword==="111")
	{
      return <UserGreeting username={props.username}/>
    }
	document.write(props.pword==="111");
    return <AuthenticationFailure username={props.username}/>
  }
  return <GuestGreeting username={props.username}/>
}

var username = prompt("Enter username: ");
var pword = prompt("Enter password: ");
document.write(pword);
ReactDOM.render(
  <Greeting username={username} pword={pword}/>,
  document.getElementById('root')
);
*/





