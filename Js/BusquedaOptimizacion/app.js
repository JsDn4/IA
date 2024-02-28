import { listaArticulos } from "./data.js";

let data = []
let arg = [];
let suma = 0;
let sumaTotal;
const pesoMaximo = 20;



data = JSON.parse(JSON.stringify(listaArticulos))

for (let i = 0; i < listaArticulos.length - 1; i++) {



    const max = data.reduce((prev, curr) => {
        return Math.max(prev, curr.valor)
    }, -Infinity)

    const itemData = data.find((item) => item.valor === max)
    const index = data.findIndex((item) => item.valor === max)

    data.splice(index, 1);


    suma = arg.reduce((prev, currObj) => {
        return prev + currObj.peso
    }, 0)

    if (suma <= 20) {

        arg.push(itemData);

    } else {
        arg.pop()
    }

}

while (suma > 20) {



    const min = data.reduce((prev, curr) => {
        return Math.min(prev, curr.valor)
    }, -Infinity)

    const index = data.findIndex((item) => item.valor === min)

    data.splice(index, 1);


    suma = arg.reduce((prev, currObj) => {
        return prev + currObj.peso
    }, 0)


}


sumaTotal = arg.reduce((prev, curr) => {
    return prev + curr.valor
}, 0)


console.log(arg)
console.log(sumaTotal)
console.log(suma)