<!DOCTYPE html>
<html>
    <head>
        <!--Import Google Icon Font-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!--Import materialize.css-->
        <link type="text/css" rel="stylesheet" href="css/materialize.css"  media="screen,projection"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
        <meta charset="UTF-8">
        <title>Answers</title>
        <link rel="stylesheet" href="css/answer.css">
    </head>
    <body>
        <div id="container">
            <h3 class="center-align">Answering the Questions Asked</h3>
            <form method="POST" action="/add-answer">
                <label style="font-size: 1.5rem; color: black">Question id</label>
                <input type="text" value="<%=request.getQueryString()%>" name="question-id"/>
                <label style="font-size: 1.5rem; color: black">Answer:</label>
                <textarea style="height: auto" name="answer" placeholder="Type in the answer ... " rows="10"></textarea>
                <input class="right-align" type="submit" value="Submit">
            </form>
        </div>
    </body>
</html>
