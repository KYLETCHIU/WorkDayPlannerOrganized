//Displays the current date and day of week using Moment.js
var currentDate = moment().format('dddd, MMM Do YYY');
$("#currentDay").html(currentDate);

