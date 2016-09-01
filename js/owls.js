
$(document).ready(function() {
  $(".p1").click(function() {
    $("body").removeClass();
      $("body").addClass("green-background");
        $(".img1").slideToggle();

  });
});

$(document).ready(function() {
  $(".p2").click(function() {
    $("body").removeClass();
      $("body").addClass("yellow-background");
        $(".img2").fadeToggle();

  });
});

$(document).ready(function() {
  $(".p3").click(function() {
    $("body").removeClass();
      $("body").addClass("red-background");
        $(".img3").fadeToggle();
          
  });
});
