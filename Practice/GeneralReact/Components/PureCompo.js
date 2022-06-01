import React, {PureComponent} from 'react'
class PureCompo extends PureComponent
{
	render()
	{
		console.log('****Pure Component render*****')
		return(<div>Pure Component {this.props.name}</div>)
	}
}
export default PureCompo