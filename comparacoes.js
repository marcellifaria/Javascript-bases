// == comparação implicita: Compara só o valor (==)

const numero = 5;
const texto = "5";
console.log(numero == texto) //true --=> converte para que sejam iguais

// comparação explicita: Compara o valor e o tipo de dados (===)

console.log(numero === texto) // false --> compara tipo e valor

// typeof
console.log(typeof numero)
console.log(typeof texto)


let exemplo1 = "652";
let exemplo2 = 2158889654

//conversão explicita
console.log(typeof(Number(exemplo1)));
console.log(typeof(String(exemplo2)));

