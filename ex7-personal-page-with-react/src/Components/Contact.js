import React from 'react';

const Contact = () => {
    return (
        <div id="Contact__content">
            <form class="Contact__form">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your first name..."
                    class="Contact__textIn" /><br /><br />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..."
                    class="Contact__textIn" /><br /><br />

                <label for="status">You are a(n)</label>
                <select id="status" name="status" class="Contact__selectIn">
                    <option value="student">Student</option>
                    <option value="teacher">Professor</option>
                    <option value="working">Industry Expert</option>
                </select><br /><br />

                <label for="feedback">Feedback</label><br /><br />
                <textarea id="feedback" name="feedback" placeholder="Write me something..."
                    class="Contact__areaIn"></textarea><br /><br />

                <div >
                    <input type="submit" value="Submit" class="Contact__submit" />
                </div>

            </form>
        </div>
    );
}

export default Contact;