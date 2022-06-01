
import React from 'react';
import ReactDOM from "react-dom/client"; 
 
class Comp1 extends React.Component {
  render() {
    console.log('Child Component is called');
    return <h1>{this.props.value}</h1>;
  }
}
  
class App extends React.Component {
  state = { color: 'black' };
  render() {
    return (
      <div style={{ color: this.state.color }}>
        <Comp1 value="Rahul" />
        <button onClick={() => this.setState({ color: 'red' })}>
          Change Color
        </button>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


/* Change the React.Component of Comp1 to React.PureComponent and understand the difference between them 
in the console by pressing function F12 in edge browser*/
/*If you use React.Component then the child component is also re-rendered 
if the parent component re-renders itself
but in the React.PureComponent, the child component only re-renders 
if the props passed to it changes.*/