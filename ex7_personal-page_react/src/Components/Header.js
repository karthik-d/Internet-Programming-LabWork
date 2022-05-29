import React from 'react';

const Header = () => {
    return (
        <div>
            <header id="Header">
                <div id="Header__title">
                    <p id="Header__titleText">
                        Karthik's Page
                    </p>
                </div>

                <div id="content" >
                    <div class="Header__welcometext">
                        <p>Hey there! Welcome to my page.</p>
                    </div>

                </div>
            </header>
            <div id="Main__navbar">
                <ul class="Main__navlist">
                    | <li class="Main__navitem Main__navactive">Home</li>
                    | <li class="Main__navitem">Journey to SSN</li>
                    | <li class="Main__navitem">Qualifications</li>
                    | <li class="Main__navitem">Interests</li>
                    | <li class="Main__navitem">Events Organized</li>
                    | <li class="Main__navitem">Contact</li>
                    |
                </ul>
            </div>
        </div>
    );
}

export default Header;