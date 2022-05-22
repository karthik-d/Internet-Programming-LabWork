<html>

<head>
    <title>TechCon - Register</title>
    <link rel="stylesheet" href="resources/css/techcon-styles.css">
    <script src="resources/js/techcon-registration.js"></script>
    <!-- <script src="/home/karthikd/Workspace/Academics/Semester_6/IP_Lab/Ex3_Form+JS/scripts/registration.js"></script> -->
</head>

<body onload="startClock();">

    <iframe src="resources/templates/techcon-header.html" id="Main__headerFrame" scrolling="no"></iframe>

    <div id="Main__navbar">
        <ul class="Main__navlist">
            | <li class="Main__navitem"><a class="Main__navlink" href="register">About</a></li>
            | <li class="Main__navitem"><a href="register?form=render" class="Main__navlink">Register</a></li>
            |<li class="Main__navitem"><a href="/E5-Sessions/login?action=logout" class="Main__navlink">Logout</a></li>
            |
        </ul>
    </div>

    <div id="Main__clockWrapper">
        <p><span id="Main__clock">Clock</span></p>
    </div>

    <div id="TechConRegister__content" style="font-size: 16px; margin: 10px">
        <table class="TechConResponse__table">
            <tbody>
                <tr>
                    <th class="TechConResponse__tableHead">Form Field</th>
                    <th class="TechConResponse__tableHead">Response</th>
                </tr>

                <tr>
                    <td class=" TechConResponse__tableCell">Full Name</td>
                    <td>${regdata.getName()}</td>
                </tr>

                <tr>
                    <td class="TechConResponse__tableCell">College Name</td>
                    <td>${regdata.getCollegeName()}</td>
                </tr>

                <tr>
                    <td class="TechConResponse__tableCell">College Address</td>
                    <td>${regdata.getCollegeAddr()}</td>
                </tr>

                <tr>
                    <td class="TechConResponse__tableCell">PIN Code</td>
                    <td>${regdata.getCollegePin()}</td>
                </tr>

                <tr>
                    <td class="TechConResponse__tableCell">Age</td>
                    <td>${regdata.getAge()}</td>
                </tr>

                <tr>
                    <td class="TechConResponse__tableCell">Date of Birth</td>
                    <td>${regdata.getDob()}</td>
                </tr>

                <tr>
                    <td class="TechConResponse__tableCell">Gender</td>
                    <td>${regdata.getGender()}</td>
                </tr>

                <tr>
                    <td class="TechConResponse__tableCell">Department</td>
                    <td>${regdata.getDepartment()}</td>
                </tr>

                <tr>
                    <td class="TechConResponse__tableCell">Contact Number</td>
                    <td>${regdata.getContact()}</td>
                </tr>

                <tr>
                    <td class="TechConResponse__tableCell">Email ID</td>
                    <td>${regdata.getEmail()}</td>
                </tr>

                <tr>
                    <td class="TechConResponse__tableCell">Programming Skills</td>
                    <td>${regdata.getSkills()}</td>
                </tr>

                <tr>
                    <td class="TechConResponse__tableCell">Consent Letter</td>
                    <td>${regdata.getLetter()}</td>
                </tr>

                <tr>
                    <td class="TechConResponse__tableCell">Hobbies</td>
                    <td>${regdata.getHobbies()}</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>