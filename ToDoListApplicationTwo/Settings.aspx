<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Settings.aspx.cs" Inherits="ToDoListApplicationTwo.Settings" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Settings</title>
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
    <link href="Settings.css" rel="stylesheet" />
    <script src="Scripts/Settings.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container-fluid">
            <h3 class="text-center">Settings</h3>
            <div class="vertical-menu">
                <a href="Home.aspx" class="active">Home</a>
                <a href="#">Change colour scheme of pockets</a>

            </div>
            <div class="row">

                <div class="container-fluid settingsContainer">
                    <div class="row">
                        <div class="col-md-6 colorSchemeBox">
                            <div class="colorSetLayout colorSchemeOne">
                                <input type="radio" name="colors" />Choose this colour scheme
                            </div>

                        </div>
                        <div class="col-md-6 colorSchemeBox">
                            <div class="colorSetLayout colorSchemeTwo"><input type="radio" name="colors" />Choose this colour scheme</div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class=" colorSetLayout colorSchemeThree"><input type="radio" name="colors" />Choose this colour scheme</div>
                        </div>
                        <div class="col-md-6 colorSchemeBox">
                            <div class="colorSetLayout colorSchemeFour"><input type="radio" name="colors" />Choose this colour scheme</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
