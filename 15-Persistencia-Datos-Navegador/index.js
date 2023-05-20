// localStorage.setItem("nombre", "Marc");
// console.log(localStorage.getItem("nombre"));
// localStorage.setItem("persona", JSON.stringify({ nombre: "Marc", edad: "27" }));
// console.log(JSON.parse(localStorage.getItem("persona")));
// JSON.stringify -> convierte un objeto en string
// JSON.parse -> convierte un string (type objeto) a un objeto

// localStorage.removeItem("nombre");

// sessionStorage.setItem("nombre-sesion", "Marc");

/* Cookies */
document.cookie = "nombreCookie=MarcCookie";
document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2024, 1, 1).toUTCString();

console.log(document.cookie);
