window.onload = () => {
  //   clickEvent();
  const color = ColorChange();
  target.style.backgroundColor = color;
};
const target = document.getElementById("root");
const form = document.getElementById("form");
const btn = document.getElementById("btn");
const colorCode = document.getElementById("colorCode");
let rgbHex;
const ColorChange = () => {
  const red = Math.floor(Math.random() * 255).toString(16);
  const green = Math.floor(Math.random() * 255).toString(16);
  const blue = Math.floor(Math.random() * 255).toString(16);

  rgbHex = `#${red}${green}${blue}`;
  return rgbHex;
};
/**
* @param {string} e
*/
function clickEvent(e) {
  e.preventDefault();
  const value = e.target.hexColor.value;
  if (value.length !==7) {
    return false
  }
  if (value[0]!=="#") {
    return false
  }
  target.style.backgroundColor = value;
}
form.addEventListener("submit", clickEvent);
