import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';


class Navtab extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onSelection(this.props.identifier);
    }

    render() {
        return (
            <Link
                to="/"
                className={this.props.className}
                onClick={this.handleClick}
            >
                {this.props.tabname}
            </Link>
        );
    }
}

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active_tab: 'home'
        };
        this.handleTabSelection = this.handleTabSelection.bind(this);
    }

    handleTabSelection(active_tab) {
        console.log(this.state);
        this.setState({
            active_tab: active_tab
        });
    }

    render() {
        return (
            <div id="Main__navbar">
                <ul class="Main__navLink">
                    |
                    <Navtab
                        to="/"
                        className={`Main__navitem ${this.state.active_tab == 'home' ? "Main__navactive" : ""}`}
                        tabname="HomeTest"
                        identifier="home"
                        onSelection={this.handleTabSelection}
                    />
                    |
                    <Navtab
                        to="/"
                        className={`Main__navitem ${this.state.active_tab == 'tossn' ? "Main__navactive" : ""}`}
                        tabname="Journey to SSN --"
                        identifier="tossn"
                        onSelection={this.handleTabSelection}
                    />
                    |<Link to="/" class="Main__navitem Main__navactive">Home</Link>
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