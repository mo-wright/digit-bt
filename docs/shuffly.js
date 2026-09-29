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
  swatchArray.forEach((swatches) => colorGrid.append(swatches)); // populates grid with swatches in shuffled order

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
