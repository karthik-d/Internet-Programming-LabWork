import React from "react" //this will enable the JSX to work in react
import ReactDOM from "react-dom"
import MyComponent from "./App.js";
ReactDOM.render(<MyComponent />, document.getElementById("root"));

/*
//JSX
ReactDOM.render(<div><h1>Hello World</h1><p>This is a paragraph</p></div>, document.getElementById("root"))
var myNewP = document.createElement("p")
myNewP.innerHTML="This is a paragraph"
*/

/*
ReactDOM.render(<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>, document.getElementById("root"));
*/

/*
//Functional Components in React
function MyApp()
{
	return (<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
			</ul>)
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
*/

/*

//functional components another example
function AboutMe()
{
	return(<div>//Adjacent JSX elements must be wrapped in an enclosing tag
	       <h1>Valli</h1>
	       <p>This is a para about me. I teach:</p>
		   <ul>
		   <li>IP</li>
		   <li>Python</li>
		   </ul>
		   </div>)
}
ReactDOM.render(<AboutMe />, document.getElementById("root"));
*/
		   