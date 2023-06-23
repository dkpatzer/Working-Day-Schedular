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
    //get current number of hours.
    var timeNow = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

  // Get item from local storage if any
  var hour8Value = localStorage.getItem("hour8");
  console.log("Retrieved value for hour8:", hour8Value);
  var expectedHour8Value = "expected value for hour8";
  if (hour8Value === expectedHour8Value) {
    console.log("Retrieved value for hour8 matches the expected value.");
  } else {
    console.log("Retrieved value for hour8 does not match the expected value.");
  }
  $("#hour8 .description").val(hour8Value);

  var hour9Value = localStorage.getItem("hour9");
  console.log("Retrieved value for hour9:", hour9Value);
  var expectedHour9Value = "expected value for hour9";
  if (hour9Value === expectedHour9Value) {
    console.log("Retrieved value for hour9 matches the expected value.");
  } else {
    console.log("Retrieved value for hour9 does not match the expected value.");
  }
  $("#hour9 .description").val(hour9Value);

  // Repeat the above steps for each hour

  timeTracker();
  console.log("Reached the function calls");

  displayDay();

  // Call timeTracker() every minute
  // setInterval(timeTracker, 60000);
});






