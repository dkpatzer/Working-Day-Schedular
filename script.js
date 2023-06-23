$(document).ready(function() {
  var currentDay = moment().format("dddd MMMM Do YYYY");

  console.log(currentDay);

  var displayDay = function() {
    console.log("Reached displayDay()");
    $("#currentDay").text(currentDay);
    console.log("Current day:", currentDay);
  };

  var currentHour = moment().format("h A");

  console.log("Current hour:", currentHour);

  $(document).on("click", ".saveBtn", function() {
    console.log("Save button clicked!");
    // Get nearby values of the description in jQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
    console.log("Reached timeTracker()");
  });

  function timeTracker() {
    console.log("Reached timeTracker()");
    var currentHour = moment().format("h A");
  
    console.log("Current hour in 12-hour format:", currentHour);
  
    $(".time-block").each(function() {
      var blockTime = moment().hour(parseInt($(this).attr("id").split("hour")[1])).format("h A");
  
      console.log("Block time:", blockTime);
  
      if (moment(blockTime, "h A").isBefore(moment(currentHour, "h A"))) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (moment(blockTime, "h A").isSame(moment(currentHour, "h A"))) {
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

  timeTracker();
  console.log("Reached the function calls");

  displayDay();

  // Call timeTracker() every minute
setInterval(timeTracker, 60000);

});






