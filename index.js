const screen = document.querySelector(".screen");

for (let i = 0; i < 16; i++) {
  const side = 125;
  const grid = document.createElement("div");
  grid.setAttribute("style", `height:${side}px;width:${side}px;`)
  grid.setAttribute("class", "grid");
  //grid.setAttribute("height", 125px);
  //grid.setAttribute("width", 125px);
  //console.log(`screen: ${screen}\ngrid: ${grid}`);
  screen.appendChild(grid);
}
