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
    $(".text9").addClass("past");
  } else if (now >= 9 && now < 10) {
    $(".text9").addClass("present");
  } else if (now < 9) {
    $(".text9").addClass("future");
  }
  if (now > 10) {
    $(".text10").addClass("past");
  } else if (now >= 10 && now < 11) {
    $(".text10").addClass("present");
  } else if (now < 10) {
    $(".text10").addClass("future");
  }
  if (now > 11) {
    $(".text11").addClass("past");
  } else if (now >= 11 && now < 12) {
    $(".text11").addClass("present");
  } else if (now < 11) {
    $(".text11").addClass("future");
  }
  if (now > 12) {
    $(".text12").addClass("past");
  } else if (now >= 12 && now < 13) {
    $(".text12").addClass("present");
  } else if (now < 12) {
    $(".text12").addClass("future");
  }
  if (now > 1) {
    $(".text1").addClass("past");
  } else if (now >= 1 && now < 2) {
    $(".text1").addClass("present");
  } else if (now < 1) {
    $(".text1").addClass("future");
  }
  if (now > 2) {
    $(".text2").addClass("past");
  } else if (now >= 2 && now < 3) {
    $(".text2").addClass("present");
  } else if (now < 2) {
    $(".text2").addClass("future");
  }
  if (now > 3) {
    $(".text3").addClass("past");
  } else if (now >= 3 && now < 4) {
    $(".text3").addClass("present");
  } else if (now < 3) {
    $(".text3").addClass("future");
  }
  if (now > 4) {
    $(".text4").addClass("past");
  } else if (now >= 4 && now < 5) {
    $(".text4").addClass("present");
  } else if (now < 4) {
    $(".text4").addClass("future");
  }
  if (now > 5) {
    $(".text5").addClass("past");
  } else if (now >= 5 && now < 6) {
    $(".text5").addClass("present");
  } else if (now < 5) {
    $(".text5").addClass("future");
  }
}


    

