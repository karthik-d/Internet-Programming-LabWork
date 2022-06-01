import React, {Component} from "react"

class ParentComp extends Component
{
	constructor(props)
	{
		super(props)
		this.state={
			name:"Valli"
		}
	}
	componentDidMount()
	{
		setInterval(()=>
		{
		this.setState({name:"Valli"})
		},3000)
	}
	render()
	{
		console.log('****Parent Component render*****')
		return(
		<div>
		<h2>Parent Component</h2>
		<h2>RegComponent {this.state.name}</h2>
	    <h2>PureComponent {this.state.name}</h2>
		</div>
		)
	}
}
export default ParentComp
