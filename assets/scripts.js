$(".coming-soon-alert").click(function(e) {
  e.preventDefault();
  alert($(this).attr("data-alert"));
});

$(".go-to-main-block").on("click", function() {
  event.preventDefault();
  $("body").removeClass("nav-active");
  $("html,body").removeClass("frozen");
  $("html,body").animate({
    scrollTop: $(".main-block").offset().top
  });
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