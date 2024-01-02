let scrollToTopButton = document.querySelector(".scroll-to-top");

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function () {
  let viewport = window.innerHeight;
  let scrolled = window.scrollY;
  if (scrolled > viewport / 2) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});
