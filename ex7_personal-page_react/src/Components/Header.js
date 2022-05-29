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
                to={this.props.to}
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
                        tabname="Home"
                        identifier="home"
                        onSelection={this.handleTabSelection}
                    />
                    |
                    <Navtab
                        to="/tossn"
                        className={`Main__navitem ${this.state.active_tab == 'tossn' ? "Main__navactive" : ""}`}
                        tabname="Journey to SSN"
                        identifier="tossn"
                        onSelection={this.handleTabSelection}
                    />
                    |
                    <Navtab
                        to="/qualifications"
                        className={`Main__navitem ${this.state.active_tab == 'qualifications' ? "Main__navactive" : ""}`}
                        tabname="Qualifications"
                        identifier="qualifications"
                        onSelection={this.handleTabSelection}
                    />
                    |
                    <Navtab
                        to="/interests"
                        className={`Main__navitem ${this.state.active_tab == 'interests' ? "Main__navactive" : ""}`}
                        tabname="Interests"
                        identifier="interests"
                        onSelection={this.handleTabSelection}
                    />
                    |
                    <Navtab
                        to="/events"
                        className={`Main__navitem ${this.state.active_tab == 'events' ? "Main__navactive" : ""}`}
                        tabname="Events Organized"
                        identifier="events"
                        onSelection={this.handleTabSelection}
                    />
                    |
                    <Navtab
                        to="/contact"
                        className={`Main__navitem ${this.state.active_tab == 'contact' ? "Main__navactive" : ""}`}
                        tabname="Contact"
                        identifier="contact"
                        onSelection={this.handleTabSelection}
                    />
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