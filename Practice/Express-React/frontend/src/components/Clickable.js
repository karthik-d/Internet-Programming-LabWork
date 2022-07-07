import React from 'react';

class Clickable extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log(event);
        console.log("I was clicked");
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.props.displayText}</button>
        );
    }
}

export default Clickable;