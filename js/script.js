$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hidden").fadeToggle();
  });
});
