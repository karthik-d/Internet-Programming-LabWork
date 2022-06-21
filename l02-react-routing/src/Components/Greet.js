import React from 'react'
/*
//without arrow function
function Greet()
{
return("Welcome Valli")
}
*/

const Greet =(props) =>
{
	return(<h1>Hello {props.name}</h1>);
}

	
export default Greet; 