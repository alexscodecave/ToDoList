<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="ToDoListApplicationTwo.Home" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-3.3.1.min.js"></script>
    <script src="Scripts/jquery-ui-1.12.1.min.js"></script>
    <link href="Content/jquery-ui.min.css" rel="stylesheet" />
    <script src="Scripts/moment.min.js"></script>
    <link href="Content/font-awesome.min.css" rel="stylesheet" />
    <link href="Home.css" rel="stylesheet" />
    <script src="Scripts/jquery-confirm.js"></script>
    <script src="Scripts/jquery.countdown.min.js"></script>
    <script src="Home.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>To Do List</title>
</head>
<body>
    <form id="form1" runat="server">

        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Home</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a href="Settings.aspx">Settings</a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
        </nav>



        <div class="container-fluid outsideContainer">

            <div class="row">
                <textarea class="textNote" placeholder="Type a note here or say 'Write a note' to enter a note with your voice" cols="152" rows="5"></textarea>

            </div>
            <div class="row noteRow">
            </div>
            <div class="row">
                <button type="button" id="btnOpenSpeech"><i class="fa fa-microphone"></i></button>
                <button type="button" id="btnStopSpeech">Stop speaking into textbox</button>
                <button type="button" class="btn btn-primary btnSubmitDefaultNote">Add note</button>
                <span class="hideThis" id="showWhenListening">Listening...</span>
                <div class="col-md-1"></div>
                <%--                <input type="text" id="dateTimePicker" />
                <div class="col-md-1"></div>
                <button class="btnSetReminder btn-primary btn" id="btnReminder">Set Reminder</button>
                <div class="col-md-1"></div>
                <div id="clock">
                </div>
                <div class="col-md-1"></div>
                <button type="button" id="pauseCountdown" class="btn">Pause Countdown</button>--%>
            </div>

            <h3 class="text-center">Your notes</h3>
            <div class="row myNotes">
            </div>
        </div>

        <div class="notePockets">
            <h3 class="text-center">Your pockets</h3>

            <div class="row">

                <div class="col-md-6  pocket droppable">
                    <h3 class="text-center dropText">Drop here</h3>
                </div>
                <div class="col-md-6 pocket  droppable">
                    <h3 class="text-center dropText">Drop here</h3>
                </div>

            </div>

            <div class="row">
                <div class="col-md-6 pocket  droppable">
                    <h3 class="text-center dropText">Drop here</h3>
                </div>
                <div class="col-md-6 pocket  droppable">
                    <h3 class="text-center dropText">Drop here</h3>

                </div>
            </div>
            <div id="dialog" title="Update Note">
                <textarea rows="6" id="dialogNoteText" cols="60"></textarea>
                <label id="updatedInDatabaseText">Value updated in database!</label>
            </div>
        </div>



    </form>
</body>
</html>
