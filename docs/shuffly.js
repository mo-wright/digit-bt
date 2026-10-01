document.addEventListener("DOMContentLoaded", () => {
  buttonDiv.style.backgroundColor = "#e861ae";
  console.log("fully loaded");
  numberBoxInit(); //if this function is reused it adds a second listener which makes it only work on every other shuffle
});

let firstSelect = null;

function numberBoxInit() {
  const swatches = document.querySelectorAll("div.swatch");
  const swatchArray = Array.from(swatches);
  const buttonDiv = document.getElementById("buttonDiv");

  swatchArray.forEach((swatch, index) => {
    swatch.style.order = index; //put order attr. on each swatch
    swatch.addEventListener("click", () => {
      if (firstSelect === swatch) {
        swatch.classList.remove("selected"); //clicking on a swatch when its already selected deselects it
        firstSelect = null;
        buttonDiv.style.backgroundColor = "#e861ae"; //default div color
        return;
      }

      if (!firstSelect) {
        // = if firstSelect is null AND you did not click on whatever was firstSelected again
        firstSelect = swatch;
        const color = swatch.querySelector(".sampleColor"); //child of swatch div with class sampleColor
        buttonDiv.style.backgroundColor = color.style.backgroundColor; //changes color of button div to color selected
        swatch.classList.add("selected");
      } else {
        const tempOrder = firstSelect.style.order; //store where the first swatch was
        firstSelect.style.order = swatch.style.order;
        swatch.style.order = tempOrder; // switch second clicked swatch position

        firstSelect.classList.remove("selected");
        buttonDiv.style.backgroundColor = "#e861ae"; //default div color
        firstSelect = null;
      }
    });
  });
}

function shuffle() {
  colorGrid = document.getElementsByClassName("colorGrid")[0]; //[0] needed
  const swatches = document.querySelectorAll("div.swatch");
  const swatchArray = Array.from(swatches); //from what I gather querySelectorAll's output isn't an array even though it looks suspiciously like an array

  while (colorGrid.firstChild) {
    //while the grid div still has a child, since the only way it won't have a first child is if there is no child
    colorGrid.removeChild(colorGrid.firstChild);
  }

  fishygates(swatchArray);
  console.log(swatchArray); //making sure shuffle functions
  swatchArray.forEach((swatch, index) => {
    swatch.style.order = index; // ADDED 9/30: not adding this makes it so that the shuffle is completely ignored, since the order attr supercedes
    colorGrid.append(swatch);
  }); // populates grid with swatches in shuffled order

  // this is called the fisher-yates shuffle, apparently? i was unfamiliar but i lifted it from StackOverflow just to try:
  function fishygates(array) {
    let ci = array.length;
    while (ci != 0) {
      let ri = Math.floor(Math.random() * ci);
      ci--;

      [array[ci], array[ri]] = [array[ri], array[ci]];
    }
  }
}
