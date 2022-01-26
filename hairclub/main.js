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
        <div class='imessage fade-in' style='animation-delay: 0.8s;'>\
          <div class='date fade-in' style='animation-delay: 0.3s;'><strong>Mon, Jan 24</strong>, 10:05 AM</div>\
          <p class='from-them timeout-01 typing-indicator fade-in' style='animation-delay: 1s;'>\
            <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
            <span class='text'>Hi " + firstName + " 👋<br><br>My name is Jennifer from HairClub. I'm seeing you just signed up for a free hair health consultation!</span>\
          </p>\
          <p class='from-them timeout-02 typing-indicator fade-in' style='animation-delay: 3s;'>\
            <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
            <span class='text'>Reply STOP to unsubscribe</span>\
          </p>\
          <p class='from-them timeout-03 typing-indicator fade-in' style='animation-delay: 5s;'>\
            <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
            <span class='text'>I don't see you on my schedule. Would you be able to come in soon to see if our services would be a good fit?</span>\
          </p>\
          <div class='action-01-option-01'></div>\
          <div class='action-01-option-02'></div>\
          <div class='clear'></div>\
        </div>\
        <div class='options fade-in' style='animation-delay: 9s;'>\
          <div class='set-01'>\
            <button class='option-01' style='color: #009688'><span class='mdi mdi-message-reply-text-outline'></span>Respond</button>\
            <button class='option-02' style='color: #F44336'><span class='mdi mdi-close-thick'></span>Ignore</button>\
          </div>\
        </div>\
      </div>\
    </div>\
  ");

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
  
  // Respond
  
  $(".step[data-step=3] .set-01 .option-01").click(function() {
    $(".step[data-step=3] .action-01-option-01").html("\
      <p class='from-me fade-in' style='animation-delay: 1s;'>Sure! Thanks for reaching out.</p>\
      <p class='from-them timeout-04 typing-indicator fade-in' style='animation-delay: 4s;'>\
        <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
        <span class='text'>Amazing! Are you free on Friday, January 28 at 4pm?</span>\
      </p>\
      <p class='from-them timeout-05 typing-indicator fade-in' style='animation-delay: 7s;'>\
        <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
        <span class='text'>Here's our address:</span>\
      </p>\
      <p class='from-them with-attachment fade-in' style='animation-delay: 8.5s;'>\
        <span class='image'><img src='/assets/images/map.jpg'></span>\
        <span class='label'>8240 N Mopac Expy, Austin, TX 78759 - Google Maps</span>\
        <span class='url'>maps.google.com</span>\
      </p>\
      <p class='from-me fade-in' style='animation-delay: 11s;'>Yes that works great for me.</p>\
      <p class='from-them timeout-06 typing-indicator fade-in' style='animation-delay: 14s;'>\
        <span class='dots'><dot></dot><dot></dot><dot></dot></span>\
        <span class='text'>" + firstName + ", you are all set for our free hair health consultation! I can’t wait to meet with you on Friday, January 28 at 4pm 😀</span>\
      </p>\
      <div class='clear'></div>\
    ");
    setTimeout(function(){
      $(".timeout-04 .dots").remove();
      $(".timeout-04 .text").show();
    }, 7000);
    setTimeout(function(){
      scrollDown();
    }, 7000);
    setTimeout(function(){
      $(".timeout-05 .dots").remove();
      $(".timeout-05 .text").show();
    }, 8000);
    setTimeout(function(){
      scrollDown();
    }, 8500);
    setTimeout(function(){
      $(".timeout-06 .dots").remove();
      $(".timeout-06 .text").show();
    }, 17000);
    setTimeout(function(){
      scrollDown();
    }, 17000);
    $(".step[data-step=3] .set-01").hide();
  });
  
  // Ignore
  
  $(".step[data-step=3] .set-01 .option-02").click(function() {
    $(".step[data-step=3] .action-01-option-01").html("\
      <div class='date fade-in' style='animation-delay: 0.3s;'><strong>Tue, Jan 25</strong>, 9:47 AM</div>\
      <div class='clear'></div>\
    ");
  });  
  

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