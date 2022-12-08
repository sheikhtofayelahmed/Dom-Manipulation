const target = document.getElementById("root");
const btn = document.getElementById("btn");

const ColorChange = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const rgb = `rgb(${red},${green},${blue})`;
  return rgb;
};

btn.addEventListener("click", function event() {
  const rgb = ColorChange();
  target.style.backgroundColor = rgb;
});
