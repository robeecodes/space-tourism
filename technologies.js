const TECH_TITLE = document.querySelector("#title");
const TECH_PORTRAIT = document.querySelector(".portrait");
const TECH_LANDSCAPE = document.querySelector(".landscape");
const TECH_BODY = document.querySelector("#tech-body");

// Code to read JSON and change display
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const TECHS = data.technology;
    const NUMS = Array.from(document.querySelectorAll(".num-nav ul li"));

    console.log(NUMS)

    // Initial state (display Launch Vehicle)
    NUMS[0].classList.add("active");
    TECH_TITLE.innerText = TECHS[0].name;
    TECH_PORTRAIT.src = TECHS[0].images.portrait;
    TECH_PORTRAIT.alt = "An image of " + TECHS[0].name;
    TECH_LANDSCAPE.src = TECHS[0].images.landscape;
    TECH_LANDSCAPE.alt = "An image of " + TECHS[0].name;
    TECH_BODY.innerText = TECHS[0].description;

    for (let i = 0; i < NUMS.length; i++) {
      NUMS[i].addEventListener("click", (e) => {
        NUMS.forEach((num) => {
          num.classList.remove("active");
        });

        NUMS[i].classList.add("active");

        TECH_TITLE.innerText = TECHS[i].name;
        TECH_PORTRAIT.src = TECHS[i].images.portrait;
        TECH_PORTRAIT.alt = "An image of " + TECHS[i].name;
        TECH_LANDSCAPE.src = TECHS[i].images.landscape;
        TECH_LANDSCAPE.alt = "An image of " + TECHS[i].name;
        TECH_BODY.innerText = TECHS[i].description;
      });
    }
  });
