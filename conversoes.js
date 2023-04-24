// tipo de dados booleanos e conversão

// conversão implícita

const numero =  400;
const numeroString =  "400";

console.log(numero == numeroString ) 
// vai dar true pois só está comparando o valor  e não o tipo



// conversão explícita => transformando de próposito

//number() - colcoca a variavel entre parenetesis, pra transformar em número
//String() - poe a variavel entre parenetesis, pra transformar em string 
//pode ser colocada na declaracao

console.log (numero + Number (numeroString))