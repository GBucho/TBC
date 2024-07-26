document.addEventListener("DOMContentLoaded", function () {
  const products = document.getElementById("product");
  const offers = document.getElementById("offer");
  const space = document.getElementById("space");

  // Add click event listeners to the elements
  products.addEventListener("click", handleProductClick);
  offers.addEventListener("click", handleOfferClick);
  space.addEventListener("click", handleSpaceClick);

  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("mousedown", (e) => {
      e.preventDefault();
    });
  });

  const secondLanguage = document.getElementById("secondLanguage");
  const languageDropdown = document.getElementById("languageDropdown");

  languageDropdown.addEventListener("click", function () {
    if (secondLanguage.style.display === "none") {
      secondLanguage.style.display = "block";
    } else {
      secondLanguage.style.display = "none";
    }
  });

  const secondLanguageBottom = document.getElementById("secondLanguageBottom");
  const languageDropdownIcon = document.getElementById("languageDropdownIcon");

  languageDropdownIcon.addEventListener("click", function () {
    if (secondLanguageBottom.style.display === "none") {
      secondLanguageBottom.style.display = "block";
    } else {
      secondLanguageBottom.style.display = "none";
    }
  });

  offersScroll();
  awardScroll();
});

function offersScroll() {
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  const scrollbarDrag = document.querySelector(".swiper-scrollbar-drag");
  const scrollbar = document.querySelector(".swiper_scrollbar");

  let isDragging = false;
  let startX, scrollLeft;
  // Function to update the position and background color of the scrollbar drag
  function updateScrollbarDrag() {
    const scrollPercentage =
      swiperWrapper.scrollLeft /
      (swiperWrapper.scrollWidth - swiperWrapper.clientWidth);
    const dragPosition =
      scrollPercentage * (scrollbar.clientWidth - scrollbarDrag.clientWidth);
    scrollbarDrag.style.left = `${dragPosition}px`;
  }
  // Set initial background color and position
  updateScrollbarDrag();
  leftArrow.addEventListener("click", () => {
    swiperWrapper.scrollBy({
      top: 0,
      left: -400, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  });
  rightArrow.addEventListener("click", () => {
    swiperWrapper.scrollBy({
      top: 0,
      left: 400, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  });
  swiperWrapper.addEventListener("scroll", updateScrollbarDrag);
  scrollbarDrag.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - scrollbarDrag.offsetLeft;
    scrollLeft = swiperWrapper.scrollLeft;
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
  });
  swiperWrapper.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - scrollbarDrag.offsetLeft;
    scrollLeft = swiperWrapper.scrollLeft;
    document.body.style.cursor = "grabbing";
    console.log("startX", scrollbarDrag);
    document.body.style.userSelect = "none";
  });
  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollbar.offsetLeft;
    const walk =
      (x - startX) * (swiperWrapper.scrollWidth / scrollbar.clientWidth);
    swiperWrapper.scrollLeft = scrollLeft + walk;
  });
  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.cursor = "default";
  });
}

function awardScroll() {
  const swiperWrapper = document.getElementById("swiperWrapper");
  const leftArrow = document.getElementById("left-arrow-award");
  const rightArrow = document.getElementById("right-arrow-award");
  const scrollbarDrag = document.getElementById("swiperScrollbarDrag");
  const scrollbar = document.getElementById("swiperScrollbar");

  let isDragging = false;
  let startX, scrollLeft;
  // Function to update the position and background color of the scrollbar drag
  function updateScrollbarDrag() {
    const scrollPercentage =
      swiperWrapper.scrollLeft /
      (swiperWrapper.scrollWidth - swiperWrapper.clientWidth);
    const dragPosition =
      scrollPercentage * (scrollbar.clientWidth - scrollbarDrag.clientWidth);
    scrollbarDrag.style.left = `${dragPosition}px`;
  }
  // Set initial background color and position
  updateScrollbarDrag();
  leftArrow.addEventListener("click", () => {
    swiperWrapper.scrollBy({
      top: 0,
      left: -400, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  });
  rightArrow.addEventListener("click", () => {
    swiperWrapper.scrollBy({
      top: 0,
      left: 400, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  });
  swiperWrapper.addEventListener("scroll", updateScrollbarDrag);
  scrollbarDrag.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - scrollbarDrag.offsetLeft;
    scrollLeft = swiperWrapper.scrollLeft;
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
  });
  swiperWrapper.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - scrollbarDrag.offsetLeft;
    scrollLeft = swiperWrapper.scrollLeft;
    document.body.style.cursor = "grabbing";
    console.log("startX", scrollbarDrag);
    document.body.style.userSelect = "none";
  });
  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollbar.offsetLeft;
    const walk =
      (x - startX) * (swiperWrapper.scrollWidth / scrollbar.clientWidth);
    swiperWrapper.scrollLeft = scrollLeft + walk;
  });
  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.cursor = "default";
  });
}

let currentActiveElement = null;

function handleToggle(element) {
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function hideAll() {
  const bgHeader = document.getElementById("header-dropdown-background");
  const product_content = document.getElementById("product_content");
  const offers_content = document.getElementById("offer_content");
  const space_content = document.getElementById("space_content");

  bgHeader.style.display = "none";
  product_content.style.display = "none";
  offers_content.style.display = "none";
  space_content.style.display = "none";
}

function handleProductClick(event) {
  underLine(event);
  const product_content = document.getElementById("product_content");
  const bgHeader = document.getElementById("header-dropdown-background");

  if (currentActiveElement !== product_content) {
    hideAll();
    bgHeader.style.display = "block";
    product_content.style.display = "block";
    currentActiveElement = product_content;
  } else {
    handleToggle(product_content);
    if (product_content.style.display === "block") {
      bgHeader.style.display = "block";
      currentActiveElement = product_content;
    } else {
      bgHeader.style.display = "none";
      currentActiveElement = null;
    }
  }
}

function handleOfferClick(event) {
  underLine(event);
  const offers_content = document.getElementById("offer_content");
  const bgHeader = document.getElementById("header-dropdown-background");

  if (currentActiveElement !== offers_content) {
    hideAll();
    bgHeader.style.display = "block";
    offers_content.style.display = "block";
    currentActiveElement = offers_content;
  } else {
    handleToggle(offers_content);
    if (offers_content.style.display === "block") {
      bgHeader.style.display = "block";
      currentActiveElement = offers_content;
    } else {
      bgHeader.style.display = "none";
      currentActiveElement = null;
    }
  }
}

function handleSpaceClick(event) {
  underLine(event);
  const space_content = document.getElementById("space_content");
  const bgHeader = document.getElementById("header-dropdown-background");

  if (currentActiveElement !== space_content) {
    hideAll();
    bgHeader.style.display = "block";
    space_content.style.display = "block";
    currentActiveElement = space_content;
  } else {
    handleToggle(space_content);
    if (space_content.style.display === "block") {
      bgHeader.style.display = "block";
      currentActiveElement = space_content;
    } else {
      bgHeader.style.display = "none";
      currentActiveElement = null;
    }
  }
}

function underLine(event) {
  const elements = document.querySelectorAll("#product, #offer, #space");

  elements.forEach((el) => {
    if (el === event.target) {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
        el.classList.add("inactive");
      } else {
        el.classList.remove("inactive");
        el.classList.add("active");
      }
    } else {
      el.classList.remove("active");
      el.classList.add("inactive");
    }
  });
}
