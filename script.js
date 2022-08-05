//////// INDEX ////////
//////// NAVBAR CODE ///////
//// Hamburger Dropdown ////
//// Hide Dropdown on Outside Click ////
//////// TRANSITIONS ///////
//// Enable transitions on page load ////

//////// NAVBAR CODE ///////

//// Hamburger Dropdown ////
const BURGER = document.querySelector(".burger");
const NAV = document.querySelector("nav ul");

BURGER.addEventListener("click", (e) => {
  NAV.classList.toggle("active");
});

//// Hide Dropdown on Outside Click ////
window.addEventListener("click", (e) => {
  if (!BURGER.contains(e.target)) {
    if (NAV.classList.contains("active")) {
      if (!NAV.contains(e.target)) {
        NAV.classList.remove("active");
      }
    }
  }
});

//////// TRANSITIONS ///////

//// Enable transitions on page load ////
window.onload = (e) => {
  document.querySelector("body").classList.remove("preload");
};
