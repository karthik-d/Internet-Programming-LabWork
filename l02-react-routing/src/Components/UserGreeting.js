import React, {Component} from 'react'

/* //if-else
class UserGreeting extends Component
{
	constructor(props)
	{
		super(props)
		this.state ={isLoggedIn: true}
	}
	
		
	render()
	{
		if(this.state.isLoggedIn)
		{
		return(<div>Welcome Valli</div>)
		}
		else
		{
			return(<div>Welcome Guest</div>)
		}
			
	}
}
export default UserGreeting
*/

//message is the variable which contains the element to be rendered
class UserGreeting extends Component
{
	constructor(props)
	{
		super(props)
		this.state ={isLoggedIn:false}
	}
	
		
render()
{
	let message
	if(this.state.isLoggedIn)
	{
	
		message = <div>Welcome Valli</div>
	}
	else
	{
		message = <div>Welcome Guest</div>
	}
	return <div>{message}</div>
}
}
export default UserGreeting