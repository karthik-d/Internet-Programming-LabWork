<html>

<head>
    <title>Skills Quiz</title>
    <link rel="stylesheet" href="resources/css/techcon-styles.css">
    <script src="resources/js/techcon-registration.js"></script>
    <!-- <script src="/home/karthikd/Workspace/Academics/Semester_6/IP_Lab/Ex3_Form+JS/scripts/registration.js"></script> -->
</head>

<body onload="startClock();">

    <iframe src="resources/templates/techcon-header.html" id="Main__headerFrame" scrolling="no"></iframe>

    <div id="Main__navbar">
        <ul class="Main__navlist">
            | <li class="Main__navitem"><a class="Main__navlink" href="register">About</a></li>
            | <li class="Main__navitem"><a href="register?form=render" class="Main__navlink">Register</a>
            </li>
            |<li class="Main__navitem"><a href="/E5-Sessions/login?action=logout" class="Main__navlink">Logout</a>
            </li>
            |
        </ul>
    </div>

    <div id="Main__clockWrapper">
        <p><span id="Main__clock">Clock</span></p>
    </div>

    <div id="TechConRegister__content" style="font-size: 16px; margin: 10px">

        <table class="Qualif__table">
            <tr>
                <th rowspan="2" class="Qualif__tableHead" style="width: 140px">Skill</th>
                <th colspan="2" class="Qualif__tableHead" style="width: 400px">Score</th>
            </tr>
            <tr>
                <th class="Qualif__tableHead">Obtained</th>
                <th class="Qualif__tableHead">Maximum</th>
            </tr>
            ${resultrows}
            <tr>
                <th class="Qualif__tableHead">Total</th>
                <th class="Qualif__tableHead">${resulttotal}</th>
                <th class="Qualif__tableHead">${possibletotal}</th>
            </tr>
        </table>

    </div>
</body>

</html>