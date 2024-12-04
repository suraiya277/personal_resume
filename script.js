let lastScrollTop = 0; // Tracks the last scroll position

document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScrollTop) {
    // Scrolling down, hide the header
    header.classList.add("hidden");
  } else {
    // Scrolling up, show the header
    header.classList.remove("hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative values
});
