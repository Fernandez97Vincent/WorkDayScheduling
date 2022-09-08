var dateDisplayEl = $('#date-display');

// call moment to display current date onto page
function displayTime() {
    var rightNow = moment().format('dddd, MMMM DD, YYYY');
    dateDisplayEl.text(rightNow);
  }

  // save button
$(".saveBtn").on("click", function() {
    // saves the text
    var descr = $(this).siblings('.description').val();
    
    // specifies which id it is saved to -- asdfghjkl saved to 9AM
    var hour = $(this).parent().attr("id");

    // stores to the localStorage
    localStorage.setItem(descr, hour);
} )

// make the hour blocks synchronize with moment.js


// use an if else statement to change the colors of the blocks


// interval to display time from momentjs
  setInterval(displayTime);