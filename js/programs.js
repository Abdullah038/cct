$(document).ready(function () {
  $("#slider-testimonial .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // if (window.innerWidth > 1000) {
  //   const carousel = document.querySelector(".owl-carousel");
  //   if (carousel) {
  //     const newSlide = document.createElement("div");
  //     newSlide.classList.add("slider-card");
  //     newSlide.innerHTML = `
  //       <div class="slider-programs-mobile"></div>
  //     `;
  //     carousel.insertBefore(newSlide, carousel.firstChild);
  //   }
  // }

  $("#programs-slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });
});




$(document).ready(function () {
    $("#testimonials-carousel .owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        center: true,
        responsiveClass: true,
        navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 3,
            },
            1000: {
              items: 5,
            },
            1200: {
                items: 7,
            },
        },
        onChanged: function(event) {
            var currentItem = event.item.index;
            var currentElement = $(event.target).find(".owl-item").eq(currentItem).find(".slider");
            var testimonialId = currentElement.data("testimonial");

            // Hide all testimonial contents
            $(".testimonial-content").hide();

            // Show the testimonial content associated with the current item
            $("#" + testimonialId).show();
        }
    });
});
