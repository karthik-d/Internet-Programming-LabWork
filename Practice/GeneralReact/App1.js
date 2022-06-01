//import React from 'react'
import React, {Component} from 'react'
import Greet from './Components/Greet.js'
import WelcomeComponent from './Components/Welcome.js'
import Hello from './Components/Hello.js'
import FunctionClick from './Components/FunctionClick.js'
import ClassClick from './Components/ClassClick.js'
import UserGreeting from './Components/UserGreeting.js'
import ParentComp from './Components/ParentComp.js'
import PureCompo from './Components/PureCompo.js'
import RegComp from './Components/RegComp.js'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import Counter from './components/Counter'


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
		<FunctionClick />
		<ClassClick />
		<UserGreeting />
		<PureCompo  />
		<RegComp />
		<ParentComp />
		</div>);
	}
}
export default App; 

