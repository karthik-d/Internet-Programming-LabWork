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
            |
        </ul>
    </div>

    <div id="Main__clockWrapper">
        <p><span id="Main__clock">Clock</span></p>
    </div>

    <div id="TechConRegister__content" style="font-size: 16px; margin: 10px">
        <form class="TechConRegister__form" id="TechConQuiz__form" method="POST" action="/Ex4-SkillTest/quiz">
            ${quizpalette}
            <div class="TechConRegister__fieldWrapper" id="TechConRegister__buttonWrapper">
                <button form="TechConQuiz__form" id="TechConRegister__submit">
                    Submit
                </button>
            </div>
        </form>
    </div>


</body>

</html>