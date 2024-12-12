// Mobile menu
const hamburgerBtnEl = document.querySelector("[data-hamburger-btn]");
const mobileMenuOverlayEl = document.querySelector(
  "[data-mobile-menu-overlay]"
);
const mobileMenuEl = mobileMenuOverlayEl.querySelector("[data-mobile-menu]");
const closeBtnEl = mobileMenuOverlayEl.querySelector("[data-close-btn]");

hamburgerBtnEl.addEventListener("click", () => {
  mobileMenuOverlayEl.classList.toggle("hidden");
  mobileMenuEl.classList.add("flex");
  mobileMenuEl.classList.remove("hidden");
});

mobileMenuOverlayEl.addEventListener("click", function () {
  this.classList.toggle("hidden");
  mobileMenuEl.classList.remove("flex");
});

mobileMenuEl.addEventListener("click", (event) => event.stopPropagation());

closeBtnEl.addEventListener("click", (event) => {
  event.stopPropagation();
  mobileMenuOverlayEl.classList.toggle("hidden");
  mobileMenuEl.classList.remove("flex");
  mobileMenuEl.classList.add("hidden");
});

// Copyright year
const copyrightYearEl = document.querySelector("[data-copyright-year]");
copyrightYearEl.innerText = `${new Date().getFullYear()}`;
