//Displays the current date and day of week using Moment.js
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

//Function for save button and local storage

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function timeKeeper() {
        var currentTime = moment().hour();

        //Loop time blocks

        $(".time-block").each(function () {
            var stopTime = parseInt($(this).attr("id").split("hour")[1]);

            //Executes different CSS classes based on current time

            if (stopTime === currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }

            else if (stopTime < currentTime) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }

            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    //localStorage //AM
    $("hour8 .description").val(localStorage.getItem("hour8"));
    $("hour9 .description").val(localStorage.getItem("hour9"));
    $("hour10 .description").val(localStorage.getItem("hour10"));
    $("hour11 .description").val(localStorage.getItem("hour11"));
    //PM
    $("hour12 .description").val(localStorage.getItem("hour12"));
    $("hour13 .description").val(localStorage.getItem("hour13"));
    $("hour14 .description").val(localStorage.getItem("hour14"));
    $("hour15 .description").val(localStorage.getItem("hour15"));
    $("hour16 .description").val(localStorage.getItem("hour16"));
    $("hour17 .description").val(localStorage.getItem("hour17"));

    timeKeeper();

})