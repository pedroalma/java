//Declaracao de variaves

/*var num1 = 20;
var num2 = 30;
var resp = num1 + num2;
console.log(resp);
*/
//utilizando o let

let num1 = 20
let num2 = 30
let resp = num1 + num2;

console.log("A soma é : ", resp);

// dois tipos de escopo 
//escopo do script
//escopo da funcao

   function valor(){
       let num1 = 30;
    console.log( "Valor de num1 dentro da funcao: " ,num1);
   }

//executando uma funcao
valor();   

console.log( "Valor de num1 dentro da funcao: " ,num1);



//Desclarando variaveis com const
//valor nunca muda 
const pi =  3.14;
let valorn = 50;
let resposta = valorn * pi;

console.log("A resposta é: ", resposta);