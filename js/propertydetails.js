$(document).ready(function () {
  $(".ham").click(function () {
    $(this).toggleClass("active");
    $(".nav-right").toggleClass("active");
  });
});

// for login

const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");

openBtn.addEventListener("click", () => {
  const navRight = document.querySelector(".nav-right");
  const hamIcon = document.querySelector(".ham");
  modalOverlay.classList.add("active");
  document.body.classList.add("no-scroll");
});

// Close when ✕ button is clicked
closeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

// Optional: close modal when clicking outside the modal content
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});

// newly listed property swiper

propertiesSwiper = new Swiper(".properties-swiper", {
  slidesPerView: 1, // 👈 Default for mobile (up to 576px)
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  preloadImages: true,
  updateOnImagesReady: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      if (index < 5) {
        return `<span class="${className}"></span>`;
      }
      return "";
    },
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
