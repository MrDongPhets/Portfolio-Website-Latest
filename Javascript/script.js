
$(document).ready(function () {
  $("nav a").on("click", function (event) {
    event.preventDefault();

    const target = $(this).attr("href"); //target section
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top, //scrolling
      },
      800
    );
  });

  $("#open").click(function () {
    $("#ul").removeClass("close-menu").addClass("open-menu");
  });

  $("#close").click(function () {
    $("#ul").removeClass("open-menu").addClass("close-menu");
  });
});
