import React from 'react';

const Clickable = (props) => {

    const handleClick = (event) => {
        console.log(event);
        console.log("I was clicked");
    }

    return (
        <button onClick={handleClick}>{props.displayText}</button>
    );
}

export default Clickable;