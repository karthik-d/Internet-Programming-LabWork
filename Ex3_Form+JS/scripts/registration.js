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

function isAlphabetic(string){
    return (/^[A-Za-z ]+$/).test(string);
}

function validateFullName(event){
    var entry = event.target.value;
    var errorBox = event.target.parentElement.children[event.target.parentElement.children.length-1];
    if(entry.length==0){
        errorBox. 
            innerHTML = 'Name is required';
        event.target.setCustomValidity("This is required");
    }
    else if(!isAlphabetic(entry)){
        errorBox. 
            innerHTML = "Couldn't pronounce that! Alphabets only";
        event.target.setCustomValidity("Couldn't pronounce that!");
    }
    else{
        errorBox. 
            innerHTML = '';
    }
}

function validateCollegeName(event){
    var entry = event.target.value;
    var errorBox = event.target.parentElement.children[event.target.parentElement.children.length-1];
    if(entry.length==0){
        errorBox. 
            innerHTML = 'College name is required';
        event.target.setCustomValidity("This is required");
    }
    else if(!isAlphabetic(entry)){
        errorBox. 
            innerHTML = "Couldn't pronounce that! Alphabets only";
        event.target.setCustomValidity("Couldn't pronounce that!");
    }
    else{
        errorBox. 
            innerHTML = '';
    }
}

// -------------------

// Dragger 

function storeDragElement(event){
    console.log("started");
    event.dataTransfer.setData("text/plain", event.target.id);
}

function allowDrop(event){
    event.preventDefault();
    console.log("here as well");
}

function addDraggedElement(event){
    console.log(event.target);
    console.log("here");
    event
        .target 
            .appendChild(
                document.getElementById(event.dataTransfer.getData("text/plain"))
            );
}

// ------------------

function alertFormError(){
    window.alert('This registration fill-out has one or more errors!\nPlease fix them to proceed')
}

function renderRegisterIfRegistering(deadline){
    var today = new Date();
    var deadline_date = new Date(deadline);
    
    if(deadline_date>=today){
        
        console.log("Branch 1");
        document.
            getElementById('TechConMain__navlist').
                innerHTML += '<li class="Main__navitem"><a href="registration.html" class="Main__navlink">Register</a></li>|';
        
        document.
            getElementById('TechConEvents__registerMsg'). 
                innerHTML = 'Registrations open till ' + monthNames[deadline_date.getMonth()] + ' ' + deadline_date.getDate();
    }
    else{
        console.log("Branch 2");

        document.
            getElementById('TechConEvents__registerMsg'). 
                innerHTML = 'Registrations closed on ' + monthNames[deadline_date.getMonth()] + ' ' + deadline_date.getDate();
    }
}