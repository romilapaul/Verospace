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

// for rent dropdown

document.querySelectorAll(".custom-dropdown").forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-menu");

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    const isOpen = menu.style.display === "block";
    document
      .querySelectorAll(".dropdown-menu")
      .forEach((m) => (m.style.display = "none"));
    menu.style.display = isOpen ? "none" : "block";
  });

  menu.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      toggle.querySelector("p").textContent = item.textContent;
      menu.style.display = "none";
    });
  });
});

document.addEventListener("click", function () {
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.style.display = "none";
  });
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

function setupSlider(minId, maxId, bubbleMinId, bubbleMaxId, suffix = "") {
  const minInput = document.getElementById(minId);
  const maxInput = document.getElementById(maxId);
  const bubbleMin = document.getElementById(bubbleMinId);
  const bubbleMax = document.getElementById(bubbleMaxId);

  // Dynamically select the correct fill element
  const fill = document.getElementById(
    minId.includes("sqft") ? "sqft-fill" : "price-fill"
  );

  function update() {
    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);

    if (min > max - 10) minInput.value = max - 10;
    if (max < min + 10) maxInput.value = min + 10;

    min = parseInt(minInput.value);
    max = parseInt(maxInput.value);

    const range = maxInput.max - minInput.min;
    const percentMin = ((min - minInput.min) / range) * 100;
    const percentMax = ((max - minInput.min) / range) * 100;

    bubbleMin.innerText =
      suffix + min.toLocaleString() + (suffix ? "" : " sqft.");
    bubbleMax.innerText =
      suffix + max.toLocaleString() + (suffix ? "" : " sqft.");

    bubbleMin.style.left = percentMin + "%";
    bubbleMax.style.left = percentMax + "%";

    fill.style.left = percentMin + "%";
    fill.style.width = percentMax - percentMin + "%";
  }

  minInput.addEventListener("input", update);
  maxInput.addEventListener("input", update);
  update();
}

setupSlider("sqft-min", "sqft-max", "sqft-bubble-min", "sqft-bubble-max");
setupSlider(
  "price-min",
  "price-max",
  "price-bubble-min",
  "price-bubble-max",
  "$ "
);

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
