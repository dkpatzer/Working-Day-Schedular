$(document).ready(function() {
  var currentDay = moment().format("dddd MMMM Do YYYY");

  console.log(currentDay);

  var displayDay = function() {
    $("#currentDay").text(currentDay);
    console.log(currentDay);
  };

  // Create a moment object for the current hour
  var currentHour = moment().format("h A");

  // saveBtn click listener
  $(".saveBtn").on("click", function() {
    // Get nearby values of the description in jQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  function timeTracker() {
    // Get current hour in 12-hour format
    var currentHour = moment().format("h A");

    // Loop over time blocks
    $(".time-block").each(function() {
      var blockTime = $(this).attr("id").split("hour")[1];

      // Add appropriate color class to time block
      if (blockTime < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  // Get item from local storage if any
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  // Call timeTracker function
  timeTracker();

  // Call displayDay function
  displayDay();
});





