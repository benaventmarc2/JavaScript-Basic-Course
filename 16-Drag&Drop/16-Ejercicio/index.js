// 1 - Replica el ejercicio completo del vídeo

const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papeleras = document.querySelectorAll(".papelera");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    // Others
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

// 2 - Añade dos párrafos más en cada una de las secciones

// 3 - Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)
papeleras.forEach((papelera) => {
  // Agregar el evento de click para eliminar el párrafo
  papelera.addEventListener("click", (event) => {
    event.stopPropagation();
    const parrafo = papelera.parentElement;
    parrafo.remove();
  });
});
