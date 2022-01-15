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
            <input type='text' placeholder='Full Name' />\
            <input type='email' placeholder='Email' />\
            <input type='phone' placeholder='Phone Number' />\
            <input type='submit' value='Sign Up'>\
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
  $(".step[data-step=3]").html("\
    <div class='table'>\
      <div class='middle'>\
        <div class='imessage fade-in' style='animation-delay: 0.8s;'>\
          <p class='from-them from-them-one typing-indicator fade-in' style='animation-delay: 1s;'>\
            <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
            <span class='text'>2pm works well for me.</span>\
          </p>\
          <p class='from-me fade-in' style='animation-delay: 4s;'>That's awesome, looking forward to meeting you! Here's our address:</p>\
          <p class='from-me with-attachment fade-in' style='animation-delay: 5.5s;'>\
            <span class='image'><img src='/assets/images/map.jpg'></span>\
            <span class='label'>205 W 9th St, Austin, TX 78701 - Google Maps</span>\
            <span class='url'>maps.google.com</span>\
          </p>\
          <p class='from-them from-them-two typing-indicator fade-in' style='animation-delay: 7s;'>\
            <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
            <span class='text'>Thanks! That's actually very close to my place 🙌</span>\
          </p>\
          <p class='from-me fade-in' style='animation-delay: 10.5s;'>Great! See you tomorrow 😀</p>\
          <div class='clear'></div>\
        </div>\
      </div>\
    </div>\
  ");
  setTimeout(function(){
    $(".from-them-one .dots").remove();
    $(".from-them-one .text").show();
  }, 3000);
  
  setTimeout(function(){
    $(".from-them-two .dots").remove();
    $(".from-them-two .text").show();
  }, 9500);
  step = "3";
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

$(".step[data-step=2]").click(function() {
  stepThree();
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