// Crear función sin parámetros que devuelva siempre "true"

function truefunc() {return true}
console.log(truefunc())

// Crear una función asíncrona que utilice un setTimeout y pase por consola "Hola soy una promesa" 5 segundos después de haberse ejecutado

setTimeout(() => {
    console.log("Hola soy una promesa")
}, 5000);

// Crear una función generadora de índices pares automáticos

function* generaIdPar() {
    let id = 0;
    while(id < 10)
    yield (id+=2);
    }
    
let gen = generaIdPar()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)