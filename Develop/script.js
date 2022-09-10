$(document).ready(function() {
  
    // assigning timeNow to moment format - day, month + date, year
    let timeNow = moment().format('dddd, MMMM DD, YYYY');
    $("#currentDay").html(timeNow);

  
 

  // save button
$(".saveBtn").click(function() {
    // saves the text
    let descr = $(this).siblings('.description').val();
    
    // specifies which id it is saved to -- asdfghjkl saved to 9AM
    let hours = $(this).parent().attr("id");

    // stores to the localStorage
    localStorage.setItem(descr, hours);

   
} )

// make the hour blocks synchronize with moment.js
function nowHour () {
  // declare the actual hour using momentjs
  let actualHour = moment().hour();

  // declare hour of the current block
  // 'this' is set to time-block
  $('.time-block').each(function() {
    let scheduleHour = parseInt($(this).attr("id").split("-")[1]);
 
  // use an if else statement to change the colors of the blocks
  // use an each to target EACH function

  if (scheduleHour < actualHour) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
  }
  
  else if (scheduleHour === actualHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
  }

  else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }

  })
}
  



nowHour();

// grabbing value from local storage using .getItem
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

 

});

