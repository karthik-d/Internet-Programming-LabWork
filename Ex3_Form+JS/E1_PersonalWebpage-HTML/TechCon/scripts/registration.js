const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Validation Scripts

function isAlphabetic(string) {
    return (/^[A-Za-z ]+$/).test(string);
}

function isNumeric(string) {
    return (/^[0-9]+$/).test(string);
}

function isAlphaNumericSpace(string) {
    return (/^[0-9a-zA-Z ]+$/m).test(string);
}

function validateFullName(event) {
    var entry = event.target.value;
    var errorBox = event.target.parentElement.children[event.target.parentElement.children.length - 1];
    if (entry.length == 0) {
        errorBox.
            innerHTML = 'Name is required';
        event.target.setCustomValidity("This is required");
    }
    else if (!isAlphabetic(entry)) {
        errorBox.
            innerHTML = "Couldn't pronounce that! Alphabets only";
        event.target.setCustomValidity("Couldn't pronounce that!");
    }
    else {
        errorBox.
            innerHTML = '';
        event.target.setCustomValidity("");
    }
}

function validateCollegeName(event) {
    var entry = event.target.value;
    var errorBox = event.target.parentElement.children[event.target.parentElement.children.length - 1];
    if (entry.length == 0) {
        errorBox.
            innerHTML = 'College name is required';
        event.target.setCustomValidity("This is required");
    }
    else if (!isAlphabetic(entry)) {
        errorBox.
            innerHTML = "Couldn't pronounce that! Alphabets only";
        event.target.setCustomValidity("Couldn't pronounce that!");
    }
    else {
        errorBox.
            innerHTML = '';
        event.target.setCustomValidity("");
    }
}

function validateCollegeAddress(event) {
    var entry = event.target.value;
    var errorBox = event.target.parentElement.children[event.target.parentElement.children.length - 1];
    if (entry.length == 0) {
        /* no validation in this case */
        errorBox.
            innerHTML = '';
        event.target.setCustomValidity("");
    }
    else if (!isAlphaNumericSpace(entry)) {
        errorBox.
            innerHTML = "Only Alphabets and Numbers";
        event.target.setCustomValidity("Only Alphabets and Numbers");
    }
    else {
        errorBox.
            innerHTML = '';
        event.target.setCustomValidity("");
    }
}

function validateAddressPIN(event) {
    var entry = event.target.value;
    var errorBox = event.target.parentElement.children[event.target.parentElement.children.length - 1];
    if (entry.length == 0) {
        errorBox.
            innerHTML = 'PIN Code is required';
        event.target.setCustomValidity("This is required");
    }
    else if (!isNumeric(entry)) {
        errorBox.
            innerHTML = "Only numbers allowed";
        event.target.setCustomValidity("Only numbers allowed");
    }
    else if (entry.length != 6) {
        errorBox.
            innerHTML = "Need exactly 6 numbers";
        event.target.setCustomValidity("Need exactly 6 numbers");
    }
    else {
        errorBox.
            innerHTML = '';
        event.target.setCustomValidity("");
    }
}

function validateAge(event) {
    var entry = event.target.value;
    var errorBox = event.target.parentElement.children[event.target.parentElement.children.length - 1];
    if (entry.length == 0) {
        // Don't validate in this case
        errorBox.
            innerHTML = '';
        event.target.setCustomValidity("");
    }
    else if (!isNumeric(entry)) {
        errorBox.
            innerHTML = "Only numbers allowed";
        event.target.setCustomValidity("Only numbers allowed");
    }
    else {
        errorBox.
            innerHTML = '';
        event.target.setCustomValidity("");
    }
}

function validateContact(event) {
    var entry = event.target.value;
    var errorBox = event.target.parentElement.children[event.target.parentElement.children.length - 1];
    if (entry.length == 0) {
        errorBox.
            innerHTML = 'Contact Number is required';
        event.target.setCustomValidity("This is required");
    }
    else if (!isNumeric(entry)) {
        errorBox.
            innerHTML = "Only numbers allowed";
        event.target.setCustomValidity("Only numbers allowed");
    }
    else if (entry.length != 10) {
        errorBox.
            innerHTML = "Exactly 10 digits";
        event.target.setCustomValidity("Exactly 10 digits");
    }
    else {
        errorBox.
            innerHTML = '';
        event.target.setCustomValidity("");
    }
}

function validateEmail(event) {
    var entry = event.target.value;
    var errorBox = event.target.parentElement.children[event.target.parentElement.children.length - 1];
    if (entry.length == 0) {
        errorBox.
            innerHTML = 'Email ID is required';
        event.target.setCustomValidity("This is required");
    }
    else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+/).test(entry)) {
        errorBox.
            innerHTML = "Invalid Email ID";
        event.target.setCustomValidity("Invalid Email ID");
    }
    else {
        errorBox.
            innerHTML = '';
        event.target.setCustomValidity("");
    }
}

function validateDob(event) {
    var entry = event.target.value;
    var errorBox = event.target.parentElement.children[event.target.parentElement.children.length - 1];
    if (entry.length == 0) {
        errorBox.
            innerHTML = 'Date of Birth is required';
        event.target.setCustomValidity("This is required");
    }
    else {
        errorBox.
            innerHTML = '';
        event.target.setCustomValidity("");
    }
}

function validateDept(event) {
    var errorBox = event.target.parentElement.children[event.target.parentElement.children.length - 1];
    if (event.target.options[event.target.selectedIndex].getAttribute("value") == "none") {
        errorBox.
            innerHTML = 'Department is required';
        event.target.setCustomValidity("This is required");
    }
    else {
        errorBox.
            innerHTML = '';
        event.target.setCustomValidity("");
    }
}

function validateFile(event) {
    var entry = event.target.value;
    if (entry.length == 0) {
        ;
    }
    else {
        errorBox.
            innerHTML = '';
        event.target.setCustomValidity("");
    }
}


// -------------------

// Dragger 

function storeDragElement(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function addDraggedElement(event) {
    if (!['skillAvailable', 'skillSelected'].includes(event.target.id.split("__")[1])) {
        // do nothing
        return;
    }
    var dragged_element = document.getElementById(event.dataTransfer.getData("text/plain"));
    if (dragged_element.id.split("__")[1] != 'skillLabel') {
        // do nothing
        return;
    }
    event
        .target
        .appendChild(dragged_element);
}

// ------------------

function alertFormError() {
    window.alert('This registration fill-out has one or more errors!\nPlease fix them to proceed')
}

function renderRegisterIfRegistering(deadline) {
    var today = new Date();
    var deadline_date = new Date(deadline);

    if (deadline_date >= today) {
        document.
            getElementById('TechConMain__navlist').
            innerHTML += '<li class="Main__navitem"><a href="registration.html" class="Main__navlink">Register</a></li>|';

        document.
            getElementById('TechConEvents__registerMsg').
            innerHTML = 'Registrations open till ' + monthNames[deadline_date.getMonth()] + ' ' + deadline_date.getDate();
    }
    else {
        document.
            getElementById('TechConEvents__registerMsg').
            innerHTML = 'Registrations closed on ' + monthNames[deadline_date.getMonth()] + ' ' + deadline_date.getDate();
    }
}

function setMaxDateForMinAge(event, min_age) {
    console.log('here');
    var entry = event.target;
    var today = new Date();
    var max_year = today.getFullYear() - min_age;
    var max_date = new Date();
    max_date = Object.assign(max_date, today);
    max_date.setFullYear(max_year);
    console.log(max_date);
    entry.setAttribute("max", max_date.getFullYear() + '-' + '09' + '-' + '03');
}

function appendSkillIn() {
    var element = document.getElementById('TechConRegister__skillIn');
    var skill_elems = document.getElementById('TechConRegister__skillSelected').querySelectorAll("option");
    var skill_values = Array.from(skill_elems).map(
        function (elem) {
            return elem.value;
        }
    );
    element.value = skill_values.join("|");
}

//--- SUBMISSION DISPLAY

// ?fullname=Karthik&colgname=SSN&colgPin=603110&age=12&dob=2014-03-03&gender=Female&status=CSE&letter=&feedback=

function renderCorrectPage() {
    var table = getResponseTable();
    if (table == null) {
    }
    else {
        document.getElementById('TechConRegister__content').innerHTML = table;
    }
}

function getResponseTable() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    // Check the first required field
    var fullName = url.searchParams.get("fullname");
    if (fullName == null) {
        return null;
    }
    else {
        return constructResponsePage();
    }
}


function constructResponsePage() {

    function constructMultivalue(entry) {
        console.log(entry);
        var parts = entry.split("|");
        return parts.join(', ');
    }

    var url_string = window.location.href;
    var url = new URL(url_string);
    let form_fields = {
        "fullname": "Full Name",
        "colgname": "College Name",
        "colgPin": "PIN Code",
        "age": "Age",
        "dob": "Date of Birth",
        "gender": "Gender",
        "department": "Department",
        "contact": "Contact Number",
        "email": "Email ID",
        "skills": "Programming Skills",
        "letter": "Consent Letter"
    }

    var table = `
        <table class="TechConResponse__table">
        <tr>
            <th class="TechConResponse__tableHead">Form Field</th>
            <th class="TechConResponse__tableHead"">Response</th>
        </tr>
    `

    for (const field in form_fields) {
        if (['skills'].includes(field)) {
            var value = constructMultivalue(url.searchParams.get(field));
        }
        else {
            var value = url.searchParams.get(field);
        }
        table += `
            <tr>
                <td class="TechConResponse__tableCell">${form_fields[field]}</td>
                <td>${value}</td>
            </tr>   
        `;
    }

    var hobbies_l = [];
    url.searchParams.forEach(
        function (value, name) {
            if ((/^hobby-/).test(name)) {
                hobbies_l.push(value);
            }
        }
    )

    table += `
        <tr>
            <td class="TechConResponse__tableCell">Hobbies</td>
            <td>${constructMultivalue(hobbies_l.join("|"))}</td>
        </tr>   
    `;

    return table + '</table>'
}

// TIMER -----------

function updateClock() {

    function twoDigitPad(value) {
        value = value.toString();
        if (value.length == 1) {
            return '0' + value;
        }
        else {
            return value;
        }
    }

    var element = document.getElementById('Main__clock');
    var now = new Date();
    element.innerHTML = `${twoDigitPad(now.getHours())}:${twoDigitPad(now.getMinutes())}:${twoDigitPad(now.getSeconds())}`;
}

function startClock() {
    updateClock();
    setInterval(
        updateClock,
        1000);
}

// -----------------

