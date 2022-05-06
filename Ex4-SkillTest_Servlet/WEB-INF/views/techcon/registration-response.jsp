<html>

<head>
    <title>Registration Responses</title>
</head>

<body>
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
</body>

</html>