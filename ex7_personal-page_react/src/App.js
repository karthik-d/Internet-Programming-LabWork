//import React from 'react'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Greet from './Components/Greet.js'
import WelcomeComponent from './Components/Welcome.js'
import Hello from './Components/Hello.js'
class App extends Component{
	render()
	{
		return(
		<div className="App">
		<Greet name="SSN1"/>
		<Greet name="SSN2"/>
		<Greet name="SSN3"/>
		<WelcomeComponent />
		<Hello />
		</div>);
	}
}
export default App; 

