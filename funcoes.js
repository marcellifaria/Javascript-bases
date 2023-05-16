//DECLARAÇÃO DE FUNÇÃO

// 1) declara a função

function imprimeTexto (texto){
    console.log (texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto ("oi");
imprimeTexto ("Outro texto");
imprimeTexto(soma());

function soma (){
    return 2+2;
}
console.log(soma());


function verificaNumero(numero) {
    if (numero > 10) {
         return 'número maior que 10';
    } else {
        return 'número não é maior que 10';
    }
}
console.log(verificaNumero(9)) 

//else if - em alguns casos é necessário mais de duas opções de fluxo para o código; 
//para estes casos existe a cláusula else if:
const num = 15;

if (num >= 0 && num <= 10) {
  console.log('número entre zero e dez');
} else if (num > 10 && num <= 20) {
  console.log('número entre dez e vinte');
} else if (num > 20 && num <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}