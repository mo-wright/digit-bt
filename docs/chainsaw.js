document.addEventListener("DOMContentLoaded", () => {
  console.log("fully loaded");
  warnInit();
});

//default values
var goopVisible = true;
var rotate = "on";
var goopType = "zombie";

function warnInit() {
  const saw = document.getElementById("saw");
  const warning = document.getElementById("warning");

  saw.addEventListener("mouseenter", () => {
    warning.style.opacity = "100";
  });

  // Hide text on mouse leave
  saw.addEventListener("mouseleave", () => {
    warning.style.opacity = "0";
  });
}

function switchit() {
  const goopfetch = document.getElementsByClassName("goop");
  const switchButton = document.getElementById("switchButton");
  goopList = Array.from(goopfetch);
  console.log(goopList);
  if (goopType === "zombie") {
    goopType = "blood";
    goopList.forEach((goops) => {
      goops.classList.remove("zombie");
      goops.classList.add("blood");
    });
    console.log("changed to blood");
    switchButton.textContent = "Get Gutsy";
  } else {
    goopType = "zombie";
    goopList.forEach((goops) => {
      goops.classList.remove("blood");
      goops.classList.add("zombie");
    });
    console.log("changed to zombie");
    switchButton.textContent = "Get Bloody";
  }
}

function dirt() {
  const goopfetch = document.getElementsByClassName("goop");
  const dirtButton = document.getElementById("dirtButton");
  goopList = Array.from(goopfetch);
  if (!goopVisible) {
    goopVisible = true;
    goopList.forEach((goops) => {
      goops.classList.remove("off");
      goops.classList.add("on");
      dirtButton.textContent = "Clean Up";
    });
    console.log("switched to true");
  } else {
    goopVisible = false;
    goopList.forEach((goops) => {
      goops.classList.remove("on");
      goops.classList.add("off");
      dirtButton.textContent = "Get Dirty";
    });
    console.log("switched to false");
  }
}
