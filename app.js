const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const body = document.querySelector("body");

dark.addEventListener("click", changeBackgroundDark);

function changeBackgroundDark() {
  body.style.backgroundColor = "black"
  body.style.color = "white"
}

light.addEventListener("click", changeBackgroundLight);

function changeBackgroundLight(){
    body.style.backgroundColor = "beige"
    body.style.color = "black"
}