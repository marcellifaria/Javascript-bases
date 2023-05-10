//Quando vamos fazer comparações mais curtas podemos utilizar o operador ternario 
//pois fica mais conciso e reduziria o numero de linhas


// idade minima enem
const idadeMinima = 18;
const idadeEstudante = 16;

if (idadeEstudante >= 18 ){
    console.log("pode se cadastrar no Enem")
}else{
    console.log("aguarde fazer 18 anos para se cadastrar no enem")
}

//operador ternário
console.log(idadeEstudante >= idadeMinima ? "pode se cadastrar no enem" : "aguarde")


const cabelereira = false;
                //condição                //true                    //false
console.log (cabelereira == true ? "pode cortar meu cabelo" : "não chega nem perto!")