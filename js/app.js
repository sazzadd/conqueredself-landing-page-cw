console.log("ok");

// headeder js
console.log("ok");

// header js
document.addEventListener("DOMContentLoaded", function () {
  const siteHeader = document.getElementById("siteHeader");
  const menuBtn = document.getElementById("menuBtn");
  const menuIcon = document.getElementById("menuIcon");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  function handleHeaderScroll() {
    if (window.scrollY > 30) {
      siteHeader.classList.add("header-scrolled");
    } else {
      siteHeader.classList.remove("header-scrolled");
    }
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("mobile-menu-active");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
    menuBtn.setAttribute("aria-label", "Open menu");
  }

  function toggleMobileMenu() {
    mobileMenu.classList.toggle("mobile-menu-active");

    const isOpen = mobileMenu.classList.contains("mobile-menu-active");

    if (isOpen) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-xmark");
      menuBtn.setAttribute("aria-label", "Close menu");
    } else {
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
      menuBtn.setAttribute("aria-label", "Open menu");
    }
  }

  menuBtn.addEventListener("click", toggleMobileMenu);

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll();
});
// swiper slider js function s
document.addEventListener("DOMContentLoaded", function () {
  const testimonialEl = document.querySelector(".testimonialSwiper");

  if (testimonialEl) {
    new Swiper(".testimonialSwiper", {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 14,
      speed: 700,
      loop: true,
      grabCursor: true,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      pagination: {
        el: ".testimonial-pagination",
        clickable: true,
      },

      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    });
  }
});
// accordian function
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-toggle");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector("i");

    button.addEventListener("click", function () {
      const isOpen = item.classList.contains("faq-open");

      item.classList.toggle("faq-open");

      if (isOpen) {
        content.style.maxHeight = "0px";
        icon.classList.remove("rotate-180");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add("rotate-180");
      }
    });
  });
});
