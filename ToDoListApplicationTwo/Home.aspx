<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="ToDoListApplicationTwo.Home" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-3.3.1.min.js"></script>
    <script src="Scripts/jquery-ui-1.12.1.min.js"></script>
    <link href="Content/jquery-ui.min.css" rel="stylesheet" />
    
    <link href="Content/font-awesome.min.css" rel="stylesheet" />
    <link href="Home.css" rel="stylesheet" />
    <script src="Scripts/jquery-confirm.js"></script>
    <script src="Home.js"></script>
    <title>To Do List</title>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container-fluid outsideContainer">
            <asp:Button runat="server" ID="btnGoToRegister" OnClick="btnGoToRegister_OnClick"/>
            <h3 class="text-center">To-Do List</h3>
            
            <div class="row">
                <textarea class="textNote" placeholder="Enter" a note here" cols="152" rows="5"></textarea>

            </div>
            <div class="row noteRow">
                
            </div>
            <div class="row">
                <button type="button" class="btn btn-primary btnSubmitDefaultNote">Submit note</button>
            </div>
                <h3 class="text-center"> Your notes</h3>
                <div class="row myNotes">
                    
                </div>
            </div>
        <div class="noteOptions">
            <div class="row">
                <button type="button" class="btn btn-primary col-md-4 ">Delete</button>
                <div class="col-md-4"></div>
                <button type="button" class="btn btn-primary col-md-4">Edit</button>
            </div>
        </div>
        
        <div class="notePockets">
            <h3 class="text-center">Your pockets</h3>
            
            <div class="row">
                
                <div class="col-md-2  pocket greenPocket">
                    
                </div>
                <div class="offset-1"></div>
                <div class="col-md-2 pocket redPocket droppable">    
                </div>
                <div class="offset-2"></div>
                <div class="col-md-2 pocket bluePocket droppable"><div class="offset-1"></div>
                </div>
                <div class="offset-1"></div>
                <div class="col-md-2 pocket yellowPocket droppable">
                    
                </div>
            </div>

        </div>
        
        <div class="footer-copyright py-3">
            <div class="pull-left">On the left side</div>
            <div class="text-center">2018 Copyright</div>
            <div class="pull-right">On the right side</div>
        </div>
       
    </form>
</body>
</html>
