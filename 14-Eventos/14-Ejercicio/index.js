const boton = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log("click");
  alert("click en el bóton");
});
$(document).ready(() => {
  $("#btn").click(() => {
    console.log("Hola, estoy utilizando jQuery");
  });
});
