$(window).on("load", function () {
  // preloader
  $("#preloader").fadeOut(function () {
    $(this).remove();
    $("#sanjayaBody").removeClass("fixed-body");
  });
});
