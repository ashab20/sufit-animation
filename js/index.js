$(document).ready(function () {

//cursor
  let $mouseCursor = $(".cursor");
  let $navLinks = $(".nav-link");

$(window).mousemove(function (e) { 
  // values: e.clientX, e.clientY, e.pageX, e.pageY
  $mouseCursor.css({
            top: e.pageY + "px",
            left: e.pageX + "px"
  })
});







  let $btns = $(".project-area .btn-group button");

  $btns.click(function (e) {
    $(".project-area .btn-group button").removeClass(".active");
    e.target.classList.add(".active");

    let selector = $(e.target).attr("data-filter");

    $(".project-area .grid").isotope({
      filter: selector,
    });
    return false;
  });

  $(".project-area .btn-group #btn").trigger("click");

  $(".project-area .grid .popup").magnificPopup({
    type: "image",
    gallery: { enabled: true },
    // other options
  });

  //carousel
  $(".site-main .review .carousel .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    itemsCustom: [
      [0, 1],
      [320, 1],
      [480, 2],
      [600, 2],
      [768, 2],
      [992, 3],
      [1200, 4]
  ]
  });


  
  
  // $(window).bind('header-area', function () {
  //     if ($(window).scrollTop() > 50) {
  //         $('.menu').addClass('navbar_fixed');
  //     } else {
  //         $('.menu').removeClass('navbar_fixed');
  //     }
  // });

  let nav_offset_top = $(".header-area").height() + 200;

  function navbar_fixed() {
    if ($(".header-area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header-area .main-menu").addClass("navbar_fixed");
        } else {
          $(".header-area .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbar_fixed();
  //Arrow
  let arrow_indicator = $(".header-area").height() + 500;

  function aroow_showed() {
    if ($(".header-area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= arrow_indicator) {
          $(".arrow").addClass("show");
        } else {
          $(".arrow").removeClass("show");
        }
      });
    }
  }
  aroow_showed();

  //AOS

  AOS.init();

  //Back to top

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
      $("#top").fadeIn();
    } else {
      $("#top").fadeOut();
    }
  });

  $("#top").click(function (event) {
    event.preventDefault();
    $("html, body, .header-area").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  //videos

  jQuery("#play_now").click(function () {
    autoPlayVideo("#videoContainer", "450", "283");
  });

  // vide play
  function autoPlayVideo(vcode, width, height) {
    "use strict";
    $("#videoContainer").html(
      '<iframe  src="./assest/coming-soon.mp4" frameborder="0" mute="true" allowfullscreen wmode="Opaque"></iframe>');


    // $("#videoContainer").html(
    //   '<iframe  src="https://www.youtube.com/embed/F8EB1KuxWoE?start=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" mute="true" allowfullscreen ></iframe>'
    // );

    $("#it-man").css("opacity", "0");
    $("*,body").css({ "overflow-y": "hidden", "z-index": "0" });
    $(".x").css({"display": "block", "z-index": "1"});
  }
  //video stop
  $(".x").click(function () {
    $(".x").css({"display": "none",});
    $("#videoContainer").html('<iframe  src="" ></iframe>');
    $("iframe").css("display", "none");
    $("*,body").css({ "overflow-y": "unset" });

    $("#it-man").css("opacity", "1");
  });

  //daylight 7 dark mode

  $(".clr-moon").click(function () {
    
      //change css file to light

    $('link[data-role="baseline"]').attr('href', './css/dark.css');

  });

  //close sun

  $(".clr-sun").click(function () {
    

    //change css file to light

    $('link[data-role="baseline"]').attr('href', './css/daylight.css');


  });

  //animation off
  $(".animation-off").click(function () {
    $(".site-main,footer,.services").css("animation", "0s");
    $(".social a,.btn-group button,.btn-group button a,.services p").css(
      "animation",
      "0s"
    );
  });

  //hover
  $("#play_now").hover(function () {
      // over
      
    $(".play-text").css("display", "block");
    }, function () {
      // out
      $(".play-text").css("display", "none");
    }
  );


  //prgraess-bar && svg hover
  
    //html
  $("#html-box").hover(function () {
    // over
    
  $(".html").css("display", "block");
  }, function () {
    // out
    $(".html").css("display", "none");
  }
  );
  
  //css

  $("#css-box").hover(function () {
    // over
    
  $(".css").css("display", "block");
  }, function () {
    // out
    $(".css").css("display", "none");
  }
  );

  //javascript

  $("#js-box").hover(function () {
    // over
    
  $(".Javascript").css("display", "block");
  }, function () {
    // out
    $(".Javascript").css("display", "none");
  }
  );

});
