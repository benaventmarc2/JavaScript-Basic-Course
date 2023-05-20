//Etiquetas en los bucles
// labels

// Sin etiquetas

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
    bucleUnidades: while(true)
    {
        console.log(`El numero actual es: ${decenas}${unidades}`);
        unidades = unidades + 1;
        if(unidades === 10)
        {
            unidades = 0;
            break bucleUnidades;
        }
    }
    decenas++;
    if(decenas === 2)
    {
        console.log(`El numero actual es: ${decenas}${unidades}`);
        break bucleDecenas;
    }
}

// Con etiquetas