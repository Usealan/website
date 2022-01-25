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
  $(".step").hide();
  $(".step[data-step=1]").show();
  step = "1";
}

function stepTwo() {
  $(".step").hide();
  $(".step[data-step=2]").show();
  $(".step[data-step=2]").html("\
    <div class='table'>\
      <div class='middle'>\
        <div class='lp'>\
          <div class='container'>\
            <div class='line-1'>Sign up for a free hair health consultation at Hair Club Austin</div>\
            <div class='line-2'>***LIMITED to the first 15 people! (usually fills in less than 5 days)***</div>\
            <div class='line-3'>Claim your free spot now!</div>\
            <form>\
              <input type='text' id='first-name' placeholder='First Name' required />\
              <input type='text' id='last-name' placeholder='Last Name' required />\
              <input type='email' id='email' placeholder='Email' required />\
              <input type='phone' id='phone' placeholder='Phone Number' required />\
              <input type='submit' value='Sign Up'>\
            </form>\
          </div>\
        </div>\
      </div>\
    </div>\
  ");
  step = "2";
}

function stepThree() {  
  $(".step").hide();
  $(".step[data-step=3]").show();
  
  
  if ($("#first-name").val()) {
    firstName = $("#first-name").val();
  } else {
    firstName = "John";
  }
  
  $(".step[data-step=3]").html("\
    <div class='table'>\
      <div class='middle'>\
        <div class='imessage fade-in' style='animation-delay: 0.8s;'>\
          <p class='from-them timeout-01 typing-indicator fade-in' style='animation-delay: 1s;'>\
            <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
            <span class='text'>Hi " + firstName + " 👋<br><br>My name is Stacy from HairClub. I'm seeing you just signed up for a free hair health consultation.</span>\
          </p>\
          <p class='from-them timeout-02 typing-indicator fade-in' style='animation-delay: 3s;'>\
            <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
            <span class='text'>Reply Stop to unsubscribe</span>\
          </p>\
          <p class='from-them timeout-03 typing-indicator fade-in' style='animation-delay: 5s;'>\
            <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
            <span class='text'>I don't see you on my schedule. Would you be able to come in soon to see if our services would be a good fit?</span>\
          </p>\
          <p class='from-me fade-in' style='animation-delay: 10.5s;'>Sure! Thanks for reaching out.</p>\
          <p class='from-them timeout-04 typing-indicator fade-in' style='animation-delay: 13s;'>\
            <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
            <span class='text'>Amazing! Are you free on Tuesday, March 10 at 10am?</span>\
          </p>\
          <p class='from-them timeout-05 typing-indicator fade-in' style='animation-delay: 17s;'>\
            <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
            <span class='text'>Here's our address:</span>\
          </p>\
          <p class='from-them with-attachment fade-in' style='animation-delay: 19s;'>\
            <span class='image'><img src='/assets/images/map.jpg'></span>\
            <span class='label'>8240 N Mopac Expy, Austin, TX 78759 - Google Maps</span>\
            <span class='url'>maps.google.com</span>\
          </p>\
          <p class='from-me fade-in' style='animation-delay: 21s;'>Yes that works great for me.</p>\
          <p class='from-them timeout-06 typing-indicator fade-in' style='animation-delay: 24s;'>\
            <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
            <span class='text'>" + firstName + ", you are all set for our free hair health consultation! I can’t wait to meet with you on Tuesday, March 10 at 10am. 😀</span>\
          </p>\
          <div class='clear'></div>\
        </div>\
      </div>\
    </div>\
  ");
  
  step = "3";
  
  function scrollDown() {
    $(".imessage").animate({scrollTop: $(".imessage")[0].scrollHeight}, 1500);
  }
  
  setTimeout(function(){
    $(".timeout-01 .dots").remove();
    $(".timeout-01 .text").show();
  }, 3000);
  setTimeout(function(){
    $(".timeout-02 .dots").remove();
    $(".timeout-02 .text").show();
  }, 5000);
  setTimeout(function(){
    $(".timeout-03 .dots").remove();
    $(".timeout-03 .text").show();
  }, 9000);
  setTimeout(function(){
    $(".timeout-04 .dots").remove();
    $(".timeout-04 .text").show();
  }, 16000);
  setTimeout(function(){
    scrollDown();
  }, 17000);
  setTimeout(function(){
    $(".timeout-05 .dots").remove();
    $(".timeout-05 .text").show();
  }, 18000);
  setTimeout(function(){
    scrollDown();
  }, 21500);
  setTimeout(function(){
    $(".timeout-06 .dots").remove();
    $(".timeout-06 .text").show();
  }, 27000);
  setTimeout(function(){
    scrollDown();
  }, 27000);
}
 
function stepFour() {   
  $(".step").hide();
  $(".step[data-step=4]").show();
  step = "4";
}
  
function stepFive() {  
  $(".step").hide();
  $(".step[data-step=5]").show();
  step = "5";
}

// Step Triggers

$(".step[data-step=1] .facebook").click(function() {
  stepTwo();
});

$(document).on("submit",".step[data-step=2] form",function(e){
  stepThree();
  e.preventDefault();
});

$(".step[data-step=3]").click(function() {
  stepFour();
});

$(".step[data-step=4]").click(function() {
  stepFive();
});

$(".step[data-step=5]").click(function() {
  stepOne();
});