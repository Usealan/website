// Make URL parameters readable

var getUrlParameter=function(r){var t,e,n=decodeURIComponent(window.location.search.substring(1)).split("&");for(e=0;e<n.length;e++)if((t=n[e].split("="))[0]===r)return void 0===t[1]||t[1]};

// Get Step

if ( getUrlParameter("step") == "1") {
  step = "1";
  stepOne();
} else if ( getUrlParameter("step") == "2") {
  step = "2";
  stepTwo();
} else if ( getUrlParameter("step") == "3") {
  step = "3";
  stepThree();
} else if ( getUrlParameter("step") == "4") {
  step = "4";
  stepFour();
} else if ( getUrlParameter("step") == "5") {
  step = "5";
  stepFive();
} else {
  step = "1";
  stepOne();
};


// On Load Actions

$("body").addClass("loaded");

// Step Functions

function stepOne() {
  step = "1";
  $("body").attr("data-step",step);
}

function stepTwo() {
  step = "2";
  $("body").attr("data-step",step);
  // $("#first-name").focus();
}

function stepThree() {  
  step = "3";
  $("body").attr("data-step",step);
    
  if ($("#first-name").val()) {
    firstName = $("#first-name").val();
  } else {
    firstName = "John";
  }
  
  function scrollDown() {
    $(".imessage").animate({scrollTop: $(".imessage")[0].scrollHeight}, 1500);
  }
  
  // Beginning of conversation
 
  $(".step[data-step=3]").html("\
    <div class='table'>\
      <div class='middle'>\
        <div class='imessage fade-in'>\
          <div class='paths' style='clear: both'></div>\
          <div class='clear'></div>\
        </div>\
      </div>\
    </div>\
  ");

  setTimeout(function(){
    $(".step[data-step=3] .paths").append("\
      <div class='date fade-in' style='animation-delay: 0.3s;'><strong>Mon, Jan 24</strong>, 10:05 AM</div>\
    ");
  }, 200);

  setTimeout(function(){
    $(".step[data-step=3] .paths").append("\
      <p class='from-them timeout-01 typing-indicator fade-in' style='animation-delay: 1s;'>\
        <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
        <span class='text'>Hi " + firstName + " 👋<br><br>My name is Jennifer from HairClub. I'm seeing you just signed up for a free hair health consultation!</span>\
      </p>\
    ");
  }, 500);

  setTimeout(function(){
    $(".timeout-01 .dots").remove();
    $(".timeout-01 .text").show();
    scrollDown();
  }, 4000);

  setTimeout(function(){
    $(".step[data-step=3] .paths").append("\
      <p class='from-them timeout-02 typing-indicator fade-in'>\
        <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
        <span class='text'>Reply STOP to unsubscribe</span>\
      </p>\
    ");
  }, 6000);

  setTimeout(function(){
    $(".timeout-02 .dots").remove();
    $(".timeout-02 .text").show();
    scrollDown();
  }, 8000);

  setTimeout(function(){
    $(".step[data-step=3] .paths").append("\
      <p class='from-them timeout-03 typing-indicator fade-in'>\
        <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
        <span class='text'>I don't see you on my schedule. Would you be able to come in soon to see if our services would be a good fit?</span>\
      </p>\
    ");
  }, 10000);

  setTimeout(function(){
    $(".timeout-03 .dots").remove();
    $(".timeout-03 .text").show();
    scrollDown();
  }, 12000);
  
  setTimeout(function(){
    $(".step[data-step=3] .paths").append("\
      <p class='from-me fade-in' style='animation-delay: 1s;'>Sure! Thanks for reaching out.</p>\
    ");
  }, 14000);
  
  setTimeout(function(){
    $(".step[data-step=3] .paths").append("\
      <p class='from-them timeout-04 typing-indicator fade-in'>\
        <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
        <span class='text'>Amazing! Are you free on Friday, January 28 at 4pm?</span>\
      </p>\
    ");
    scrollDown();
  }, 16000);
  
  setTimeout(function(){
    $(".timeout-04 .dots").remove();
    $(".timeout-04 .text").show();
    scrollDown();
  }, 18000);
  
  setTimeout(function(){
    $(".step[data-step=3] .paths").append("\
      <p class='from-them timeout-05 typing-indicator fade-in'>\
        <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
        <span class='text'>Here's our address:</span>\
      </p>\
    ");
    scrollDown();
  }, 20000);
  
  setTimeout(function(){
    $(".timeout-05 .dots").remove();
    $(".timeout-05 .text").show();
    scrollDown();
  }, 22000);
  
  setTimeout(function(){
    $(".step[data-step=3] .paths").append("\
      <p class='from-them with-attachment fade-in'>\
        <span class='image'><img src='/assets/images/map.jpg'></span>\
        <span class='label'>8240 N Mopac Expy, Austin, TX 78759 - Google Maps</span>\
        <span class='url'>maps.google.com</span>\
      </p>\
    ");
    scrollDown();
  }, 24000);
  
  setTimeout(function(){
    $(".step[data-step=3] .paths").append("\
      <p class='from-me fade-in'>Yes that works great for me.</p>\
    ");
    scrollDown();
  }, 26000);
  
  setTimeout(function(){
    $(".step[data-step=3] .paths").append("\
      <p class='from-them timeout-06 typing-indicator fade-in'>\
        <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
        <span class='text'>Perfect! You are booked! Can't wait to meet with you on the 28th at 4pm.</span>\
      </p>\
    ");
    scrollDown();
  }, 28000);

  setTimeout(function(){
    $(".timeout-06 .dots").remove();
    $(".timeout-06 .text").show();
    scrollDown();
  }, 30000);
  
  setTimeout(function(){
    $(".step[data-step=3] .paths").append("\
      <div class='date fade-in'><strong>Wed, Jan 27</strong>, 3:28 PM</div>\
    ");
    scrollDown();
  }, 32000);

  setTimeout(function(){
    $(".step[data-step=3] .paths").append("\
      <p class='from-them timeout-07 typing-indicator fade-in'>\
        <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
        <span class='text'>" + firstName + "! It's Jennifer, I'm looking forward to meeting you. Quick reminder so you can add it to your calendar, I've got you down for Friday, January 28 @ 4pm. See you soon!</span>\
      </p>\
    ");
    scrollDown();
  }, 34000);
  
  setTimeout(function(){
    $(".timeout-07 .dots").remove();
    $(".timeout-07 .text").show();
    scrollDown();
  }, 36000);

}

// Step Triggers

$(".step[data-step=1] .facebook").click(function() {
  stepTwo();
});

$(document).on("submit",".step[data-step=2] form",function(e){
  stepThree();
  e.preventDefault();
});

/*
$(".step[data-step=3]").click(function() {
  stepFour();
});

$(".step[data-step=4]").click(function() {
  stepFive();
});

$(".step[data-step=5]").click(function() {
  stepOne();
});
*/