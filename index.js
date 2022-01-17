const screen = document.querySelector(".screen");
const clearBtn = document.querySelector("#clear");

const setScreen = (side) => {
  const s = 480 / side;
  const square = side * side;
  for (let i = 0; i < square; i++) {
    const grid = document.createElement("div");
    grid.setAttribute("style", `height:${s}px;width:${s}px;`);
    grid.setAttribute("class", "grid");
    grid.addEventListener(
      "mouseover",
      (e) => {
        e.target.style.backgroundColor = "black";
      },
      false
    );
    screen.appendChild(grid);
  }
};

const changeGridCount = () => {
  let side;
  const userSide = prompt(
    "Choose x for the number of x by x grids you would like!"
  );
  console.log(
    `typeof userSide: ${typeof userSide}\nuserSide: ${userSide}\nparseInt(userSide): ${parseInt(
      userSide
    )}\ntypeof parseInt(userSide): ${typeof parseInt(userSide)}`
  );
  if (parseInt(userSide) < 0 || parseInt(userSide) > 100) {
    side = 16;
  } else {
    side = userSide;
  }
  console.log(`side: ${side}`);

  setScreen(side);
};

const chooseColor = () => {
  return;
};

setScreen(16);

clearBtn.addEventListener("click", () => {
  document
    .querySelectorAll(".grid")
    .forEach((e) => e.parentNode.removeChild(e));
  changeGridCount();
});
