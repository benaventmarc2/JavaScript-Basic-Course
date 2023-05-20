// Funciones async
function miAsync() {
  //Haciendo llamada a un bd
}
const miPromesa = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2);
  if (i !== 0) {
    resolve();
  } else {
    reject();
  }
});

miPromesa
  .then(() => console.log("Se a ejecutado de forma correcta"))
  .catch(() => console.log("Error"))
  .finally(() => console.log("Yo me ejecuto siempre"));
