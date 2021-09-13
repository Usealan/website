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