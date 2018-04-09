$(document).ready(function () {
    retrieveNotesFromDB(); //retrieve previously added notes from the database

    $(".testList li").eq(2).css("background-color", "red");

    $(".droppable").droppable({ //all pockets now have this class
        drop: function (event, ui) {

        },
        activate: function(event, ui) {
            $(".droppable").toggleClass("blueBorder");
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

            if (ui.draggable.hasClass("toggledHeightAnimation")) {
                $(this).animate({
                    height: addDragHeiToDrop + "px"
                });   
            }
            else {
                $(this).animate({
                    height: "100px"
                });
            }
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

    $("#draggable").on("hover", function () {

    })

    $('[class$="outsideContainer"]').on("click", ".dynamicNote ",
        function () {
            var getNoteDataAttribute = ($(this).attr("data-note-from-db"));
            changeDivToTextArea(getNoteDataAttribute);
            $(this).draggable();
        });

    function changeDivToTextArea(noteDataID) {
        console.log("This notes unique ID: " + noteDataID);

        console.log("Found it: " + noteDataID);

        //found it by unique id, must be because the class is dynamically loading
        //need to find way to be able to search by dynamically created class

        //here we are selecting every element inside of the class myNotes which is a div and has a data attribute
        //data-note-from-db equal to the value passed through in the parameter
        var getDynamicNote = $('.myNotes div[data-note-from-db="' + noteDataID + '"]');
        //here we get the text of the one selected
        var dynamicNoteText = $('.myNotes div[data-note-from-db="' + noteDataID + '"]').text();

        //get text div element that is dynamically created
        var textArea = $("<textarea style='width:180px;height:180px;'/>");
        textArea.val(dynamicNoteText);
        getDynamicNote.replaceWith(textArea); //may need data attribute here to uniquely
        //identify which of the  
        textArea.focus(); //focus on textarea

        $(textArea).on("blur",
            function () {
                //preserver value of textarea
                var html = $(this).val();

                //create a dynamic div
                var viewableText =
                    $("<div class='draggable dynamicNote styleDynamicDiv draggableNote'></div>");
                //set its html
                viewableText.html(html);
                //replace out the textarea
                $(this).replaceWith(viewableText);

                $(".draggableNote").draggable({ //elements with the class draggableNote have been given the capability to be dragged ;)
                    appendTo: "body",
                    zIndex: 10000,
                    snap: ".pocket",
                    stack: ".draggableNote",
                    revert: "invalid",
                    start: function () {
                        console.log("Dynamic note has started dragging"); // yyayayayya it works
                    },
                    stop: function () {
                        console.log("Dynamic note has stopped dragging"); //show this to console when dragging has stopped
                    }
                });
                genericAjax("updateNote", noteDataID, html);
            });

    }


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
                            '<div class="draggable dynamicNote makeBorderEdgesCurved styleDynamicDiv draggable makeDivBoxThreeD" data-note-from-db=' +
                            (index + 1) +
                            '>' +
                            value.NoteContent +
                            '</div></div>';
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
})