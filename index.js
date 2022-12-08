const target = document.getElementById("root");
const btn = document.getElementById("btn");
const colorCode = document.getElementById("colorCode");
const copyBtn = document.getElementById("copy-btn");
let rgbHex;
const ColorChange = () => {
  const red = Math.floor(Math.random() * 255).toString(16);
  const green = Math.floor(Math.random() * 255).toString(16);
  const blue = Math.floor(Math.random() * 255).toString(16);

  rgbHex = `#${red}${green}${blue}`;
  return rgbHex;
};
function clickEvent() {
  const rgbHex = ColorChange();
  target.style.backgroundColor = rgbHex;
  colorCode.innerHTML = rgbHex;
}
window.onload = () => {
  clickEvent();
};
btn.addEventListener("click", clickEvent);
copyBtn.addEventListener("click", function copy() {
  navigator.clipboard.writeText(rgbHex);
  alert(`copied ${rgbHex}`);
});
