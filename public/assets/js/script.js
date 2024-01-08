
$(document).ready(function () {
  // Custome Scrollbar Start
  $(".banner-section").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    cssEase: "ease-in-out",
    fade: true,
  });
  $(".loans-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
  });

  $(".excellent-slider").slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
    ],
  });
  $(".slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "20%",
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
    ],
  });


  $('.slider-possible').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  //Match title height

  // $(".navbar .navbar-toggler").click(function () {
  //   $(this).toggleClass("show");
  //   $("body").toggleClass("body-show");
  // });
  /* try */
  // $(".navbar-collapse .navbar-nav .nav-item .nav-link").click(function () {
  //   $(".navbar-collapse").removeClass("show");
  //   $(".navbar .navbar-toggler").removeClass("show");
  // });

  // $("select").selectric({
  //   disableOnMobile: false,
  // });


  // $(".toggle-menu").click(function (e) {
  //   e.preventDefault();
  //   $(this).toggleClass("open");
  //   if($(this).hasClass("open")) {
  //     $(".header-menu").slideToggle();
  //     $(".header-menu").removeClass('d-none');
  //     $(".header-menu").toggleClass("show");
  //   }
  //   else {
  //     $(".header-menu").slideUp();
  //   }
  // });

  // $(selector).slideToggle();

  // $('.toggle-menu').on('click', function () {
  //   if ($(this).hasClass("open")) {
  //     if ($(window).width() <= 1200) {
  //       $('body').addClass('overflow-hidden');
  //     }
  //   } else {
  //     $('body').removeClass('overflow-hidden');
  //   }
  // });
  $(".toggle-menu").click(function () {
    if ($(window).width() <= 1200) {
      $('body').addClass('overflow-hidden');
    }
    else{
      $('body').removeClass('overflow-hidden');
    }
    $(this).toggleClass("open");
    $(".header-menu").slideToggle();
  });
});



