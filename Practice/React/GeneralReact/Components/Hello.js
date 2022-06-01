import React from 'react'
//JSX way of creating a Hello Component
/*const Hello =() =>
{
	return(<div>
	        <h1> Hello Valli from Hello.js file</h1>
			</div>
			)
}*/


//Non JSX way of creating a Hello Component
const Hello=() =>{
	return React.createElement('div', null, <h1>Hello Valli</h1>) 
}

export default Hello;
