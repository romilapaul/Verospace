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

// for countdown

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count-up");
  const duration = 2000; // total animation time in ms

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / (duration / 16); // ~60fps

    let current = 0;

    const updateCount = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = formatNumber(target);
      }
    };

    updateCount();
  });

  // Optional: Format as 15K+, 20K+ etc.
  function formatNumber(num) {
    if (num >= 1000) return Math.floor(num / 1000) + "K+";
    return num + "+";
  }
});

const minRange = document.getElementById("min-range");
const maxRange = document.getElementById("max-range");
const minBubble = document.getElementById("min-bubble");
const maxBubble = document.getElementById("max-bubble");
const progress = document.querySelector(".progress");
const rangeContainer = document.querySelector(".range-container");

function formatPrice(val) {
  return "$ " + parseInt(val).toLocaleString();
}

function updateSlider() {
  let minVal = parseInt(minRange.value);
  let maxVal = parseInt(maxRange.value);
  if (minVal > maxVal) {
    [minVal, maxVal] = [maxVal, minVal]; // Swap if needed
  }

  // Get width of container for percentage positioning
  const containerWidth = rangeContainer.offsetWidth;

  const minPercent = (minVal / 20000) * 100;
  const maxPercent = (maxVal / 20000) * 100;

  // Move progress bar
  progress.style.left = minPercent + "%";
  progress.style.width = maxPercent - minPercent + "%";

  // Move bubbles
  minBubble.style.left = minPercent + "%";
  maxBubble.style.left = maxPercent + "%";

  minBubble.textContent = formatPrice(minVal);
  maxBubble.textContent = formatPrice(maxVal);
}

// Initial call
updateSlider();

// Add events
minRange.addEventListener("input", updateSlider);
maxRange.addEventListener("input", updateSlider);

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

// Testimonials Swiper
// Testimonials Swiper Configuration
new Swiper(".testimonials-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Add these properties for better responsiveness
  grabCursor: true,
  watchOverflow: true,

  breakpoints: {
    // Mobile devices
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
    },
    // Small tablets
    576: {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
    },
    // Medium tablets
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
      centeredSlides: true,
    },
    // Desktop
    992: {
      slidesPerView: 1,
      spaceBetween: 50,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
      centeredSlides: false,
    },
    // Large desktop
    1200: {
      slidesPerView: 2,
      spaceBetween: 60,
      centeredSlides: false,
    },
  },
});
