$(document).ready(function () {


    //createColorSchemeContent();
    retrieveColors();
    function retrieveColors() {
        $.ajax({
            type: "POST",
            url: "ToDoListService.asmx/retrieveColors",
            data: "",
            contentType: "application/json",
            dataType: "json",
            success: function (msg) {
                var jsonVal = msg.d;
                var getFirstSet = jsonVal[0]; //get first object of array
                var getSecondSet = jsonVal[1]; //get second object of array 
                var getThirdSet = jsonVal[2]; //get third object of array
                var getFourthSet = jsonVal[3]; //get fourth object of array;
                //create arrays that contain all specific values from response from initial values i.e. first 3 colours of first object
                //returned from response
                var arrayOfColors = [getFirstSet.ColorHEXTopLeft, getFirstSet.ColorHEXTopRight, getFirstSet.ColorHEXBottomLeft, getFirstSet.ColorHEXBottomRight];
                var secondArrayOfColors = [getSecondSet.ColorHEXTopLeft, getSecondSet.ColorHEXTopRight, getSecondSet.ColorHEXBottomLeft, getSecondSet.ColorHEXBottomRight];
                var thirdArrayOfColors = [getThirdSet.ColorHEXTopLeft, getThirdSet.ColorHEXTTopRight, getThirdSet.ColorHEXBottomLeft, getThirdSet.ColorHEXBottomRight];
                var fourthArrayOfColors = [getFourthSet.ColorHEXTopLeft, getFourthSet.ColorHEXTopRight, getFourthSet.ColorHexBottomLeft, getFourthSet.ColorHEXBottomRight];


                //$(".colorSchemeTwo").append(divsTwo);
                buildColorSchemes(arrayOfColors, $(".colorSchemeOne"));
                buildColorSchemes(secondArrayOfColors, $(".colorSchemeTwo"));
                buildColorSchemes(thirdArrayOfColors, $(".colorSchemeThree"));
                buildColorSchemes(fourthArrayOfColors, $(".colorSchemeFour"));
            },
            failure: function (msg) {

            },
            error: function (msg) {

            }
        });

        function buildColorSchemes(colorArray, elementToAppendTo) {
            var divCollection = $("<div style='background-color:#" + colorArray[0] + "'>" + colorArray[0] + "</div>"
                + "<div style='background-color:#" + colorArray[1] + "'>" + colorArray[1] + "</div>" +
                "<div style='background-color:#" + colorArray[2] + "'>" + colorArray[2] + "</div>" +
                "<div style='background-color:#" + colorArray[3] + "'></div>");

            $(elementToAppendTo).append(divCollection);
        }

    }


});