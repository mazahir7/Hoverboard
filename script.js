"use strict";

const container = document.getElementById("container");

let totalSquare = 1200;
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22"];

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
}

const setSquareColor = function (square) {
  const color = randomColor();
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 4px ${color}, 0 0 14px ${color}`;
}

const removeSquareColor = function (square) {
  square.style.backgroundColor = "#1d1d1d";
  square.style.boxShadow = `0 0 2px #1d1d1d`;
}

function createGrid() {
  for (let i = 0; i < totalSquare; i++) {

    const square = document.createElement("div");

    square.classList.add("square");

    square.addEventListener("mouseover", () => setSquareColor(square));

    square.addEventListener("mouseout", () => removeSquareColor(square));

    container.appendChild(square);
  }
}





const edit = document.querySelector(".edit");
const options = document.querySelector(".options");

const btn = document.querySelector(".btn");
const userColors = document.querySelectorAll("#color");
const userSquares = document.getElementById("num-square");
edit.addEventListener("click", () => {

  userColors.forEach((color, i) => {
    color.value = colors[i];
  });
  options.classList.toggle("active");
});

btn.addEventListener("click", () => {
  totalSquare = (+userSquares.value && +userSquares.value > 0) ? +userSquares.value : 1200;
  userColors.forEach((color, i) => {
    colors[i] = color.value;
  });
  options.classList.toggle("active");

  container.innerHTML = "";
  createGrid();
});

createGrid();
