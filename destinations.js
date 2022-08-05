const PLANET_NAME = document.querySelector("#name");
const PLANET_IMAGE = document.querySelector("#image");
const PLANET_DESC = document.querySelector("#desc");
const PLANET_DIST = document.querySelector("#dist");
const PLANET_TRAVEL = document.querySelector("#travel");

// Code to read JSON and change display
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const DESTINATIONS = data.destinations;
    const TABS = Array.from(document.querySelectorAll(".tabs ul li a"));

    // Initial state (display Moon)
    TABS[0].classList.add("active");
    PLANET_NAME.innerText = DESTINATIONS[0].name;
    PLANET_IMAGE.src = DESTINATIONS[0].images.webp;
    PLANET_IMAGE.alt = "An image of " + DESTINATIONS[0].name;
    PLANET_DESC.innerText = DESTINATIONS[0].description;
    PLANET_DIST.innerText = DESTINATIONS[0].distance;
    PLANET_TRAVEL.innerText = DESTINATIONS[0].travel;

    for (let i = 0; i < TABS.length; i++) {
      TABS[i].addEventListener("click", (e) => {
        TABS.forEach((tab) => {
          tab.classList.remove("active");
        });

        TABS[i].classList.add("active");

        PLANET_NAME.innerText = DESTINATIONS[i].name;
        PLANET_IMAGE.src = DESTINATIONS[i].images.webp;
        PLANET_IMAGE.alt = "An image of " + DESTINATIONS[i].name;
        PLANET_DESC.innerText = DESTINATIONS[i].description;
        PLANET_DIST.innerText = DESTINATIONS[i].distance;
        PLANET_TRAVEL.innerText = DESTINATIONS[i].travel;
      });
    }
  });
