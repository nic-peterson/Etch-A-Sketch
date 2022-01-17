const screen = document.querySelector(".screen");

for (let i = 0; i < 16; i++) {
  const grid = document.createElement("div");
  grid.setAttribute("class", "grid");
  //console.log(`screen: ${screen}\ngrid: ${grid}`);
  screen.appendChild(grid);
}
