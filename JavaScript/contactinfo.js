$(document).ready(function () {
  $("p").mouseenter(function () {
    $(".form").css("background-color", "yellow");
  });
  $("p").mouseleave(function () {
    $(".form").css("background-color", "white");
  });
});

