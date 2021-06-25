$(".coming-soon-alert").click(function(e) {
  e.preventDefault();
  alert($(this).attr("data-alert"));
});