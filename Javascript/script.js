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

  $("#instagram").on("click", function () {
    window.open("https://www.instagram.com/christdodong/", "_blank");
  });

  $("#facebook").on("click", function () {
    window.open(
      "  https://www.facebook.com/profile.php?id=100010285125943",
      "_blank"
    );
  });
  $("#linked").on("click", function () {
    window.open(
      "https://www.linkedin.com/in/christian-mendoza-20bb97314/",
      "_blank"
    );
  });

$("#circle").click(function () {
  $("#sidebar").removeClass("sidebar-right").addClass("sidebar");
});

$("#sidebar-close").click(function () {
  $("#sidebar").removeClass("sidebar").addClass("sidebar-right");
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 50) {
    $("#circle").fadeIn();
  } else {
    $("#circle").fadeOut();
    // Optionally hide the sidebar when scroll is less than 50
    // $("#sidebar").removeClass("sidebar").addClass("sidebar-right");
  }
});
});
