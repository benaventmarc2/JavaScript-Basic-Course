const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    console.log("Iniciar drag");
    parrafo.classList.add("dragging-start");
    event.dataTransfer.setData("id", parrafo.id);
    const elemento_fantasma = document.querySelector(".imagen-fantasma");
    event.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
  });
  parrafo.addEventListener("dragend", () => {
    console.log("End drag");
    parrafo.classList.remove("dragging-start");
  });
});
secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    console.log("Drag Over");
  });
  seccion.addEventListener("drop", (event) => {
    console.log("Drag dropped");
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    seccion.append(parrafo);
  });
});
