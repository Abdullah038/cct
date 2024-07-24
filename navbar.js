document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navbarLinks = document.getElementById("navbarLinks");
  const navLinks = document.querySelectorAll(".navbar-links a");

  menuIcon.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navbarLinks.classList.remove("active");
    });
  });

  let resizeTimeout;
  function closeMenuOnResize() {
    if (window.innerWidth > 768) {
      navbarLinks.classList.remove("active");
    }
  }

  window.addEventListener(
    "resize",
    function () {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          closeMenuOnResize();
        }, 100); // Throttle resize events
      }
    },
    { passive: true }
  );
});


