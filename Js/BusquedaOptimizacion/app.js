import { listaArticulos } from "./data.js";

let arg = [];
let suma = 0;
let sumaTotal;
const pesoMaximo = 20;

listaArticulos.forEach(element => {


    if (suma <= 20) {
        arg.push(element);
    } else {
        arg.pop()
    }

    suma = arg.reduce((prev, currObj) => {
        return prev + currObj.peso
    }, 0)


});

sumaTotal = arg.reduce((prev, curr) => {
    return prev + curr.valor
}, 0)

console.log(arg)
console.log(sumaTotal)
console.log(suma)
