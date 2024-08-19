$(document).ready(function () {
 $("nav a").on("click", function (event) {
   // Check if href starts with '#' to determine if it's a local anchor
   if ($(this).attr("href").startsWith("#")) {
     event.preventDefault();

     const target = $(this).attr("href"); // Target section
     $("html, body").animate(
       {
         scrollTop: $(target).offset().top, // Scrolling
       },
       800
     );
   }
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

    $("#instagram1").on("click", function () {
      window.open("https://www.instagram.com/christdodong/", "_blank");
    });

    $("#facebook1").on("click", function () {
      window.open(
        "  https://www.facebook.com/profile.php?id=100010285125943",
        "_blank"
      );
    });
    $("#linked1").on("click", function () {
      window.open(
        "https://www.linkedin.com/in/christian-mendoza-20bb97314/",
        "_blank"
      );
    });

    
    $("#instagram2").on("click", function () {
      window.open("https://www.instagram.com/christdodong/", "_blank");
    });

    $("#facebook2").on("click", function () {
      window.open(
        "  https://www.facebook.com/profile.php?id=100010285125943",
        "_blank"
      );
    });
    $("#linked2").on("click", function () {
      window.open(
        "https://www.linkedin.com/in/christian-mendoza-20bb97314/",
        "_blank"
      );
    });

$("#circle").click(function () {
  if ($("#sidebar").hasClass("sidebar-right")) {
    // Show the sidebar
    $("#sidebar").removeClass("sidebar-right").addClass("sidebar");
    $("#circle").removeClass("circle1").addClass("circle");
    $("#overlay").removeClass("overlay");
  } else {
    // Hide the sidebar
    $("#sidebar").removeClass("sidebar").addClass("sidebar-right");
     $("#circle").removeClass("circle").addClass("circle1");
    $("#overlay").addClass("overlay");
  }
});

  function resetSVG() {
    // Manually restart SVG animations
    const svg = $("#circle svg").get(0);

    // Manually restart animations by setting their begin attribute
    const animations = svg.querySelectorAll("animate");
    animations.forEach((anim) => {
      anim.beginElement();
    });
  }



$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 50) {
    $("#circle").fadeIn();
     $("#sidebar").css("display", "block");
      
      

  } else {
    $("#circle").fadeOut();
    // Optionally hide the sidebar when scroll is less than 50
      $("#sidebar").css("display", "none");
       $("#sidebar").removeClass("sidebar-right").addClass("sidebar");
        $("#circle").removeClass("circle1").addClass("circle");
        $("#overlay").removeClass("overlay");
        $("#ul").removeClass("open-menu");
         resetSVG();
   
  }
});


 $("#myForm").on("submit", function (event) {
   event.preventDefault(); // Prevent default form submission

   // Serialize form data
   var formData = $(this).serialize();

   // Submit the form using AJAX
   $.ajax({
     url: "https://api.web3forms.com/submit",
     method: "POST",
     data: formData,
     success: function (response) {
       // Always show the thank you message regardless of the response
       Swal.fire({
         title: "Thank you!",
         text: "Your message has been submitted successfully.",
         icon: "success",
         confirmButtonText: "OK",
       });

       // Optionally reset the form fields
       $("#myForm")[0].reset();
     },
     error: function (xhr, status, error) {
       // Even if there's an error, still show the thank you message
       Swal.fire({
         title: "Thank you!",
         text: "Your message has been submitted successfully.",
         icon: "success",
         confirmButtonText: "OK",
       });

       // Optionally reset the form fields
       $("#myForm")[0].reset();
     },
   });
 });

});
