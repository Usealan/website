$(".coming-soon-alert").click(function(e) {
  e.preventDefault();
  alert($(this).attr("data-alert"));
});

$(".go-to-main-block").on("click", function(e) {
  e.preventDefault();
  $("body").removeClass("nav-active");
  $("html,body").removeClass("frozen");
  $("html,body").animate({
    scrollTop: $(".main-block").offset().top
  });
});

$(".open-signup-modal").on("click", function(e) {
  e.preventDefault();
  $("body").addClass("signup-on");
  $("#first-name").focus();
});

$(".close-signup-modal").on("click", function(e) {
  e.preventDefault();
  $("body").removeClass("signup-on");
});

$(".fade-in-alt").fadeIn();

setTimeout(function(){
  $(".from-them-one .dots").remove();
  $(".from-them-one .text").show();
}, 3000);

setTimeout(function(){
  $(".from-them-two .dots").remove();
  $(".from-them-two .text").show();
}, 9500);

// Sign up form

$("#form").on("submit", function(e) {
  e.preventDefault();
  var data = new FormData(this);
  var action = $(this).attr("action");
  $(".signup-modal form").attr("style","pointer-events: none");
  $(".signup-modal .inputs").hide();
  $(".signup-modal input[type=submit]").val("Please wait...");
  $.ajax({
    url: action,
    method: "POST",
    data: data,
    processData: false,
    contentType: false,
    success: function() {
      $(".signup-modal form").hide();
      $(".signup-modal p").show();
    },
    error: function() {
      alert("An error occurred while submitting the form.");
    }
  });
});