// Bucles for

for(let i = 0; i <= 10; i++){
    console.log(i);
}

let lista = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < lista.length; i++) {    
    console.log(lista[i]);    
}
// Estructura for .... of
for (let i of lista)
{
    console.log(i);
}
// Estructura foreach
lista.forEach(i => {
    console.log(i);
});

// Estructura for...in
let persona = 
{
    nombre: "Marc",
    apellido: "Benavent",
    edad: 34,
    isDeveloper: true,
}
for (let i in persona) {
    console.log(i);    
    console.log(persona[i]);
}