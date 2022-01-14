// Make URL parameters readable

var getUrlParameter=function(r){var t,e,n=decodeURIComponent(window.location.search.substring(1)).split("&");for(e=0;e<n.length;e++)if((t=n[e].split("="))[0]===r)return void 0===t[1]||t[1]};

// Replace URL parameter

window.history.replaceState(null, null, "?abc=" + "aaa" );

/*

function abc() {}

function addNumbers(a, b) {
  return a + b; ;
}
x = addNumbers(1, 2);

===

$(document).ready(function(){
});

===

$(".abc").on("click", function() {
});

===

$(".abc").click(function() {
});

===

setTimeout(function(){
  alert("Hello");
}, 1000);

===

confirm("Really?"); 

===

prompt("Your age?","0");

===

*/

$(".scene[data-scene=1] .facebook").click(function() {
  $(".scene").hide();
  $(".scene[data-scene=2]").show();
});

$(".scene[data-scene=2]").click(function() {
  $(".scene").hide();
  $(".scene[data-scene=3]").show();
});

$(".scene[data-scene=3]").click(function() {
  $(".scene").hide();
  $(".scene[data-scene=4]").show();
});

$(".scene[data-scene=4]").click(function() {
  $(".scene").hide();
  $(".scene[data-scene=5]").show();
});

$(".scene[data-scene=5]").click(function() {
  $(".scene").hide();
  $(".scene[data-scene=1]").show();
});