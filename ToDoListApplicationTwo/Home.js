$(document).ready(function() {
    retrieveNotesFromDB(); //retrieve previously added notes from the database
    //getReminder();
    $(function() {
        $("#dialog").dialog().parent().hide();
    });
    //$('[id="dateTimePicker"]').hide();
    //$('[id="btnReminder"]').hide();

    var isPaused = 0;

    //$("#pauseCountdown").on("click",
    //    function() {
    //        //get value of clock but in
    //        //full date format
    //        isPaused = 1;
    //        var getDataTime = $("#clock").attr("data-suspended-time");
    //        if (isPaused == 1) {
    //            $("#clock").countdown("pause");
    //            genericReminderFunction("updateReminder", getDataTime);
    //        }
    //        else {
    //            $("#clock").countdown("resume");
    //        }
    //        console.log(getDataTime);
    //    });

    
 
    function getReminder() {
        $.ajax({
            type: "POST",
            url: "ToDoListService.asmx/getReminder",
            dataType: "json",
            data: "{}",
            contentType: "application/json",
            success: function(msg) {
                var msgData = msg.d;
                $.each(msgData,
                    function(index, value) {
                        console.log("Reminder date: " + value.reminderDate);
                        $("#clock").countdown(value.reminderDate,
                            function (event) {
                                $(this).html(event.strftime('%D days %H hours %M minutes %S seconds'));
                                $(this).attr("data-suspended-time", value.reminderDate);
                                console.log("Date suspended time: " + value.reminderDate);
                            });
                        
                        
                    });
            },
            error: function(msg) {
                console.log(msg.responseText);
            },
            failure: function(msg) {
                console.log(msg.responseText);
            }
        });
    }

    

    //$('[class="textNote"]').on("focus",
    //    function() {
    //        $('[id="btnReminder"]').show("slow",
    //            function() {
    //                //animation complete
    //            });
    //        $('[id="dateTimePicker"]').show("slow", function() {
    //            //animation complete
    //        })
    //    });

    $('[class="textNote"]').on('focus',
        function() {
            $("#btnReminder, #dateTimePicker").show("slow",
                function() {
                    //animation complete
                });

        });

    

    $("#dateTimePicker").datepicker({
        dateFormat: 'yy-mm-dd',
        onSelect: function (dateText, inst) {   
            $(".btnSetReminder").attr("data-chosen-time", dateText); //set the data attribute of data-chosen-time equal to what the user chooses in the
            //date-time-picker
        }
    }).val();

    var a = moment("01/12/2016", "MM-DD-YYYY").format();
    var b = moment("01/12/2016", "DD-MM-YYYY").add("day", 2);
    console.log(a);
    console.log(b);
    $(".btnSetReminder").on("click",
        function (event) {
            
            var getDateFromAttribute = $(this).attr("data-chosen-time");
            console.log(getDateFromAttribute);
            var getCurrentMomentTimeHour = moment().hour();
            var getCurrentMomentMinute = moment().minute();
            var getCurrentMomentSeconds = moment().seconds();
            console.log("Hour: " + getCurrentMomentTimeHour);
            console.log("Minutes: " + getCurrentMomentMinute);
            console.log("Seconds: " + getCurrentMomentSeconds);
            var hoursMinSeconds = getCurrentMomentTimeHour  + getCurrentMomentMinute  + getCurrentMomentSeconds;

            var fullTime = getDateFromAttribute;
            console.log("Full time: " + fullTime);

            genericReminderFunction("AddReminder", fullTime);
            $("#clock").countdown(fullTime,
                function (event) {
                    $(this).html(event.strftime('%H hours %M minutes %S seconds'));
                    $(this).attr("data-suspended-time", value.reminderDate);
                    console.log("Date suspended time: " + value.reminderDate);
                });
            //set countdown timer here instead/as well?
            event.preventDefault();
        });
    
    //var dateTimePicker = $("#dateTimePicker").datepicker();


function focusedOnInputElement(inputTextElement) {
    console.log("Focused on input box!");
}
function blurOnInputElement(inputTextElement) {
    $(inputTextElement).addClass("redBorder");
    $(inputTexElement).prop("disabled", true);
    $(inputTextElement).css("border-radius", "5px");
}

$('[id$="TypeSection"]').on("focus",
    function () {
        focusedOnInputElement($(this));
    });

$('[id$="TypeSection"]').on("blur",
    function () {
        blurOnInputElement($(this));
    });

$("#updatedInDatabaseText").hide();

$('[class$="outsideContainer"]').on("click", ".dynamicNote",
    function (event) {
        var getNoteID = $(this).attr("data-note-id");
        var getNoteDataAttribute = ($(this).attr("data-note-from-db")); //this gets the data attribute
        var getDialogTextArea = $('[id="dialogNoteText"]');
        var getNoteText = $(this).text(); //this gets the actual text content of the note
        getDialogTextArea.val(getNoteText); //set the text area value of the dialog equal to the text of the initial div
        console.log("Text from DIV: " + getNoteDataAttribute);
        $(this).draggable({
           //add classes to droppable here
            classes: {
            },
            drag: function(event, ui) {
                $(".dropText").addClass("showDropText");
            },
            stop: function(event, ui) {
                $(".dropText").removeClass("showDropText");
            }
        });


        $("#dialog").dialog({
            draggable:true,
            buttons: [
                {
                    text: "Update",
                    click: function (event) {
                        //get note ID, html from div 
                        //with html swap method, swap text on div with text on textarea on dialog
                        //any div which has a class that starts with dynamic will have an onclick
                        //then will get data-note-from-db from this div and put it into the method
                        //to fill in the dialog
                        var getNoteDataAttributeTwo = $(this).attr("data-note-from-db");
                        
                        var getUpdatedTextAreaValue = $('[id="dialogNoteText"]').val();

                        $("#updatedInDatabaseText").show("slow",
                            function () {
                                $(this).css("color", "green");
                            });
                        genericAjax("updateNote", getNoteDataAttribute, getUpdatedTextAreaValue); //run the method updateNote with the 
                        //data-note-from-db attribute as a value then get the noteText
                        //could say element with class dynamicNote who has the dataAttribute of 4 etc, hide that
                        
                    }
                }, {
                    text: "Close",
                    click: function (event) {

                        $(this).dialog("close");
                        $(this)(".dynamicNote").css("border", "2px solid red");
                    }
                },
                {
                    text: "Delete",
                    click: function (event) {
                        deleteNote("deleteNote", getNoteID);
                        
                        $(this).hide('slow',
                            function() {
                                $(this).remove();
                            });
                    }
                }
            ],
            width: "600px"
        }).parent().show();
    });

    //all pockets now have this class
$(".droppable").droppable({ 
    drop: function (event, ui) {
    },
    activate: function (event, ui) {
        
    },
    //over function of droppable is raised once on the droppable
    //on the other hand the drag event of the draggle is raised
    //every time the mouse movess
    over: function (event, ui) {
        //convert the css value of the draggable element that is 
        //hovered over the droppable into an int
        var parseDraggableElement = parseInt(ui.draggable.css("height"));
        //convert height of the droppable to an int
        var parseDroppableElement = parseInt($(this).css("height"));

        var addDragHeiToDrop = parseDraggableElement + parseDroppableElement;
        console.log("After converting: " + addDragHeiToDrop);
        ui.draggable.toggleClass("toggledHeightAnimation");
    }
});


$('[class$="btnSubmitDefaultNote"]').on("click",
    function () {
        var getNoteContent = $('[class^="textNote"]').val(); //every class that starts textNote
        if ($(getNoteContent).val() == "") { //ensure textarea is empty and does not contain whitespace
            alert("Please ensure the note has a value inside of it");
        } else {
            AddNoteToDB(getNoteContent);
        }
    });


function genericAjax(urlMethod, noteID, noteContent) {
    var myData = JSON.stringify({
        noteID: noteID,
        noteContent: noteContent
    });

    $.ajax({
        type: "POST",
        url: "ToDoListService.asmx/" + urlMethod,
        dataType: "json",
        data: myData,
        contentType: "application/json",
        success: function (msg) {
            var msgData = msg.d;
            console.log("Updated in database");
        },
        failure: function (msg) {
            console.log(msg.responseText);
        },
        error: function (msg) {
            console.log(msg.responseText);
        }
    });
}
function genericReminderFunction(urlMethod,reminderDate) {
    var myData = JSON.stringify({
        reminderDate: reminderDate
    });

    $.ajax({
        type: "POST",
        url: "ToDoListService.asmx/" + urlMethod,
        dataType: "json",
        data: myData,
        contentType: "application/json",
        success: function (msg) {
            var msgData = msg.d;
            console.log("Updated in database");
        },
        failure: function (msg) {
            console.log(msg.responseText);
        },
        error: function (msg) {
            console.log(msg.responseText);
        }
    });
    }

    function deleteNote(urlMethod, noteID) {
        var myData = JSON.stringify({
            noteID: noteID
        });

        $.ajax({
            type: "POST",
            url: "ToDoListService.asmx/" + urlMethod,
            dataType: "json",
            data: myData,
            contentType: "application/json",
            success: function (msg) {
                var msgData = msg.d;
                console.log("Updated in database");
            },
            failure: function (msg) {
                console.log(msg.responseText);
            },
            error: function (msg) {
                console.log(msg.responseText);
            }
        });
    }



function AddNoteToDB(noteContent) {
    var myData = JSON.stringify({
        noteContent: noteContent
    });
    $.ajax({
        type: "POST",
        url: "ToDoListService.asmx/AddNoteToDB",
        dataType: "json",
        data: myData,
        contentType: "application/json",
        success: function (msg) {
            var msgData = msg.d;
            console.log(msg.responseText);
            alert("Record added to database");
        },
        failure: function (msg) {
            console.log(msg.responseText);
        },
        error: function (msg) {
            console.log(msg.responseText);
        }
    });
}



function retrieveNotesFromDB() {
    $.ajax({
        type: "POST",
        url: "ToDoListService.asmx/retrieveNotes",
        dataType: "json",
        data: "",
        contentType: "application/json",
        success: function (msg) {
            var msgData = msg.d;

            $.each(msgData,
                function (index, value) {
                    var containerHTML = '<div class="row col-md-2">';
                    containerHTML =
                        containerHTML +
                    '<div  class="draggable dynamicNote makeBorderEdgesCurved styleDynamicDiv draggable makeDivBoxThreeD" data-note-id=' +value.NoteID +' data-note-from-db=' +
                        (index + 1) +
                        '>' +
                        value.NoteContent +
                        '</div></div>';
                    //adding id dynamically
                    console.log(msgData);
                    
                    $(".myNotes").append(containerHTML);



                });
        },
        failure: function (msg) {
            console.log(msg.responseText);
        },
        error: function (msg) {
            console.log(msg.responseText);
        }
    });
    }

    //SECOND PAGE JQUERY

    $(".slideDownPageTwo").on("click",
        function() {
            $("body,html").animate({
                    scrollTop: $("body").height()
                },
                800);
        });


})