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
    if (event.target.options[event.target.selectedIndex].getAttribute("value") == null) {
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
    console.log("started");
    event.dataTransfer.setData("text/plain", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
    console.log("here as well");
}

function addDraggedElement(event) {
    console.log(event.target);
    console.log("here");
    event
        .target
        .appendChild(
            document.getElementById(event.dataTransfer.getData("text/plain"))
        );
}

// ------------------

function alertFormError() {
    window.alert('This registration fill-out has one or more errors!\nPlease fix them to proceed')
}

function renderRegisterIfRegistering(deadline) {
    var today = new Date();
    var deadline_date = new Date(deadline);

    if (deadline_date >= today) {

        console.log("Branch 1");
        document.
            getElementById('TechConMain__navlist').
            innerHTML += '<li class="Main__navitem"><a href="registration.html" class="Main__navlink">Register</a></li>|';

        document.
            getElementById('TechConEvents__registerMsg').
            innerHTML = 'Registrations open till ' + monthNames[deadline_date.getMonth()] + ' ' + deadline_date.getDate();
    }
    else {
        console.log("Branch 2");

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

//--- SUBMISSION DISPLAY

// ?fullname=Karthik&colgname=SSN&colgPin=603110&age=12&dob=2014-03-03&gender=Female&status=CSE&letter=&feedback=

function renderCorrectPage() {
    var table = getResponseTable();
    if (table == null) {
        console.log("Normal Page");
    }
    else {
        console.log(table);
        document.getElementById('TechConRegister__content').innerHTML = table;
        console.log("Response Page");
    }
}

function getResponseTable() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    // Check the first required field
    var fullName = url.searchParams.get("fullname");
    console.log(fullName);
    if (fullName == null) {
        return null;
    }
    else {
        return constructResponsePage();
    }
}


function constructResponsePage() {
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
        "letter": "Consent Letter"
    }

    // Check the first required field
    var fullName = url.searchParams.get("fullname");
    var colgName = url.searchParams.get("colgname");
    var colgPin = url.searchParams.get("colgPin");
    var age = url.searchParams.get("age");
    var dob = url.searchParams.get("dob");
    var gender = url.searchParams.get("gender");
    var department = url.searchParams.get("department");
    var letterPath = url.searchParams.get('letter');

    var table = `
        <table class="TechConResponse__table">
        <tr>
            <th class="TechConResponse__tableHead" style="width: 180px">Form Field</th>
            <th class="TechConResponse__tableHead" style="width: 400px">Response</th>
        </tr>
    `

    for (const field in form_fields) {
        table += `
        <tr>
            <td class="TechConResponse__tableCell">${form_fields[field]}</td>
            <td>${url.searchParams.get(field)}</td>
        </tr>
        `
    }

    return table + '</table>'
}