//import logo from './logo.svg';
import './App.css';
import React from 'react';

export default class App extends React.Component{
constructor(props)
{
super(props);
this.state={apiResponse:""};
}

callAPI()
{
fetch("http://localhost:9000/testAPI")
.then(res=> res.text())
.then(res => this.setState({apiResponse: res}));
}
componentWillMount()
{
this.callAPI();
}


render()
{
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the Node Response Page </p>
        </header>
       <p>{this.state.apiResponse}</p>
    </div>
  );
}
}
//export default App;
