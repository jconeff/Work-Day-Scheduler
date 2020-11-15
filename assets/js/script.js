// displays the current day
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

//displays current time
var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

//save button

$("button").click(function() {
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();
    
    saveSchedule(hourString, value);
  });

  //end of save button

  //color coding timeblocks

  window.onload = function(){
    colorCode();
    nine();
    ten();
    eleven();
    twelve();
    one();
    two();
    three();
    four();
    five();
   }

   var now = new Date().getHours();

function colorCode() {
  if (now > 9) {
    $(".hour-9").addClass("past");
  } else if (now >= 9 && now < 10) {
    $(".hour-9").addClass("present");
  } else if (now < 9) {
    $(".hour-9").addClass("future");
  }
  if (now > 10) {
    $(".hour-10").addClass("past");
  } else if (now >= 10 && now < 11) {
    $(".hour-10").addClass("present");
  } else if (now < 10) {
    $(".hour-10").addClass("future");
  }
  if (now > 11) {
    $(".hour-11").addClass("past");
  } else if (now >= 11 && now < 12) {
    $(".hour-11").addClass("present");
  } else if (now < 11) {
    $(".hour-11").addClass("future");
  }
  if (now > 12) {
    $(".hour-12").addClass("past");
  } else if (now >= 12 && now < 13) {
    $(".hour-12").addClass("present");
  } else if (now < 12) {
    $(".hour12").addClass("future");
  }
  if (now > 1) {
    $(".hour-1").addClass("past");
  } else if (now >= 1 && now < 2) {
    $(".hour-1").addClass("present");
  } else if (now < 1) {
    $(".hour-1").addClass("future");
  }
  if (now > 2) {
    $(".hour-2").addClass("past");
  } else if (now >= 2 && now < 3) {
    $(".hour-2").addClass("present");
  } else if (now < 2) {
    $(".hour-2").addClass("future");
  }
  if (now > 3) {
    $(".hour-3").addClass("past");
  } else if (now >= 3 && now < 4) {
    $(".hour-3").addClass("present");
  } else if (now < 3) {
    $(".hour-3").addClass("future");
  }
  if (now > 4) {
    $(".hour-4").addClass("past");
  } else if (now >= 4 && now < 5) {
    $(".hour-4").addClass("present");
  } else if (now < 4) {
    $(".hour-4").addClass("future");
  }
  if (now > 5) {
    $(".hour-5").addClass("past");
  } else if (now >= 5 && now < 6) {
    $(".hour-5").addClass("present");
  } else if (now < 5) {
    $(".hour-5").addClass("future");
  }
}


    

