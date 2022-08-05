const CREW_NAME = document.querySelector("#name");
const CREW_IMAGE = document.querySelector("#image");
const CREW_TITLE = document.querySelector("#title");
const CREW_DESC = document.querySelector("#desc");

// Code to read JSON and change display
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const CREWMATES = data.crew;
    const SWITCHES = Array.from(document.querySelectorAll(".switches ul li"));

    // Initial state (display Commander)
    SWITCHES[0].classList.add("active");
    CREW_NAME.innerText = CREWMATES[0].name;
    CREW_IMAGE.src = CREWMATES[0].images.webp;
    CREW_IMAGE.alt = "An image of " + CREWMATES[0].name;
    CREW_TITLE.innerText = CREWMATES[0].role;
    CREW_DESC.innerText = CREWMATES[0].bio;

    for (let i = 0; i < SWITCHES.length; i++) {
      SWITCHES[i].addEventListener("click", (e) => {
        SWITCHES.forEach((item) => {
          item.classList.remove("active");
        });

        SWITCHES[i].classList.add("active");

        CREW_NAME.innerText = CREWMATES[i].name;
        CREW_IMAGE.src = CREWMATES[i].images.webp;
        CREW_IMAGE.alt = "An image of " + CREWMATES[i].name;
        CREW_TITLE.innerText = CREWMATES[i].role;
        CREW_DESC.innerText = CREWMATES[i].bio;
      });
    }
  });
