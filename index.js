const target = document.getElementById("root");
const btn = document.getElementById("btn");

const ColorChange = () => {
  const red = Math.floor(Math.random() * 255).toString(16);
  const green = Math.floor(Math.random() * 255).toString(16);
  const blue = Math.floor(Math.random() * 255).toString(16);

  const rgbHex = `#${red}${green}${blue}`;
  return rgbHex;
};

btn.addEventListener("click", function event() {
  const rgbHex = ColorChange();
  console.log(rgbHex);
  target.style.backgroundColor = rgbHex;
});
