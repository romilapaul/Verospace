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
    modalOverlay.classList.add("active");
    document.body.classList.add("no-scroll");
  });

  closeBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });


  // Format numbers with commas
  function formatNumber(val) {
    return parseInt(val).toLocaleString();
  }

  // Update slider visuals
  function updateSlider(minInput, maxInput, minBubble, maxBubble, fillBar, suffix = '', prefix = '') {
    const minVal = parseInt(minInput.value);
    const maxVal = parseInt(maxInput.value);
    const range = maxInput.max - minInput.min;

    const percentMin = ((minVal - minInput.min) / range) * 100;
    const percentMax = ((maxVal - minInput.min) / range) * 100;

    // Update bubble text
    minBubble.textContent = `${prefix}${formatNumber(minVal)}${suffix}`;
    maxBubble.textContent = `${prefix}${formatNumber(maxVal)}${suffix}`;

    // Update fill
    fillBar.style.left = percentMin + "%";
    fillBar.style.width = (percentMax - percentMin) + "%";
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Square Feet elements
    const sqftMin = document.getElementById("sqft-min");
    const sqftMax = document.getElementById("sqft-max");
    const sqftBubbleMin = document.getElementById("sqft-bubble-min");
    const sqftBubbleMax = document.getElementById("sqft-bubble-max");
    const sqftFill = document.getElementById("sqft-fill");

    // Price Range elements
    const priceMin = document.getElementById("price-min");
    const priceMax = document.getElementById("price-max");
    const priceBubbleMin = document.getElementById("price-bubble-min");
    const priceBubbleMax = document.getElementById("price-bubble-max");
    const priceFill = document.getElementById("price-fill");

    // Initialize sliders
    function initSliders() {
      updateSlider(sqftMin, sqftMax, sqftBubbleMin, sqftBubbleMax, sqftFill, ' sqft.');
      updateSlider(priceMin, priceMax, priceBubbleMin, priceBubbleMax, priceFill, '', '$ ');
    }

    // Add input event listeners
    [sqftMin, sqftMax].forEach(input => {
      input.addEventListener("input", () => {
        if (parseInt(sqftMin.value) > parseInt(sqftMax.value)) {
          sqftMin.value = sqftMax.value;
        }
        updateSlider(sqftMin, sqftMax, sqftBubbleMin, sqftBubbleMax, sqftFill, ' sqft.');
      });
    });

    [priceMin, priceMax].forEach(input => {
      input.addEventListener("input", () => {
        if (parseInt(priceMin.value) > parseInt(priceMax.value)) {
          priceMin.value = priceMax.value;
        }
        updateSlider(priceMin, priceMax, priceBubbleMin, priceBubbleMax, priceFill, '', '$ ');
      });
    });

    initSliders();
  });

// for the filter icon

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleFilterBtn");
  const sidebar = document.querySelector(".sidebar-wrapper");
  const closeBtn = document.getElementById("closeFilterBtn");

  // Toggle sidebar on mobile
  toggleBtn?.addEventListener("click", function () {
    sidebar?.classList.toggle("active");
  });

  // Close sidebar
  closeBtn?.addEventListener("click", function () {
    sidebar?.classList.remove("active");
  });
});