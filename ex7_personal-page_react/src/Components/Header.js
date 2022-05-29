import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';


class Navtab extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onSelection(event.target.value);
    }

    render() {
        return (
            <Link to="/" class="Main__navitem" onClick={this.handleClick}>{this.props.tabname}</Link>
        );
    }
}

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.handleTabSelection = this.handleTabSelection.bind(this);
        this.state = {
            active_tab: 'home'
        };
    }

    handleTabSelection(active_tab) {
        this.setState({
            active_tab: active_tab
        });
    }

    render() {
        return (
            <div id="Main__navbar">
                <ul class="Main__navLink">
                    | <Navtab to="/" class="Main__navitem Main__navactive" tabname="HomeTest" />
                    | <Link to="/" class="Main__navitem Main__navactive">Home</Link>
                    | <Link to="/tossn" class="Main__navitem">Journey to SSN</Link>
                    | <Link to="/qualifications" class="Main__navitem">Qualifications</Link>
                    | <Link to="/interests" class="Main__navitem">Interests</Link>
                    | <Link to="/events" class="Main__navitem">Events Organized</Link>
                    | <Link to="/contact" class="Main__navitem">Contact</Link>
                    |
                </ul>
            </div>
        );
    }
}


class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header id="Header">
                    <div id="Header__title">
                        <p id="Header__titleText">
                            Karthik's Page
                        </p>
                    </div>

                    <div id="Header__content" >
                        <div class="Header__welcometext">
                            <p>Hey there! Welcome to my page.</p>
                        </div>

                    </div>
                </header>
                <Navbar />
            </div >
        );
    }
}

export default Header;