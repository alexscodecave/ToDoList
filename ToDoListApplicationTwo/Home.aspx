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
    <link href="Content/font-awesome.min.css" rel="stylesheet" />
    <title>To Do List</title>
</head>
<body>
    <form id="form1" runat="server">

        <nav class="navbar navbar-default" style="background-color: #52B3D9;">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#" style="color: white;">Home</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a href="Settings.aspx" style="color: white;">Settings</a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
        </nav>



        <div class="container-fluid outsideContainer">

            <div class="row">
            </div>
            <div class="row noteRow">
            </div>
            <div class="row">
                
                <%--                <input type="text" id="dateTimePicker" />
                <div class="col-md-1"></div>
                <button class="btnSetReminder btn-primary btn" id="btnReminder">Set Reminder</button>
                <div class="col-md-1"></div>
                <div id="clock">
                </div>
                <div class="col-md-1"></div>
                <button type="button" id="pauseCountdown" class="btn">Pause Countdown</button>--%>
            </div>
            <ul id="sideBarNavigation">
                <li title="Add a note"><a href="#"><i class="fa fa-plus"></i></a></li>
                <li title="Search for note"><a href="#"><i class="fa fa-search"></i></a></li>
                <li title="Add a tag"><a href="#"><i class="fa fa-tags"></i></a></li>
                <li title="Add a notebook"><a href="#"><i class="fa fa-book"></i></a></li>
                <li title="Set Reminder"><a href="#" id="setReminder"><i class="fa fa-clock-o" id="dateTimePicker"></i></a></li>
            </ul>
            <div class="row">
                <div class="col-md-6 myNotes">
                </div>
                <div class="col-md-6">
                    <button type="button" id="btnOpenSpeech"><i class="fa fa-microphone"></i></button>
                    <button type="button" id="btnStopSpeech">Stop speaking into textbox</button>
                    <button type="button" class="btn btn-primary btnSubmitDefaultNote">Add note</button>
                    <span class="hideThis" id="showWhenListening">Listening...</span>
                    <div class="col-md-1"></div>
                    <textarea class="textNote" placeholder="Type a note here or say 'Write a note' to enter a note with your voice" cols="60" rows="20"></textarea>
                </div>
            </div>


        </div>

        <%--<div class="notePockets">
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
        </div>--%>
    </form>
</body>
</html>
