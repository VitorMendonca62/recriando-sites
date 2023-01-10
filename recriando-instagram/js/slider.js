const images = [...document.querySelectorAll(".images img")];
let index = 0;
images[0].style.display = "inline";

function slider() {
  const indexAntigo = index;
  images[indexAntigo].classList.add("animation-slider");
  setTimeout(() => {
    images[indexAntigo].classList.remove("animation-slider");
    images[indexAntigo].style.display = "none";
  }, 3000);
  setTimeout(() => {
    index++;
    index = index > images.length - 1 ? 0 : index;
    images[index].style.display = "inline";
    images[index].classList.add("animation-slider-active");
  }, 2000);
}

setInterval(slider, 5000);
