/*
    O operador typeof devolve o tipo de operador pu expressão.
*/
var numero = 0;

console.log("typeof indefinido: ", typeof indefinido); /* indefinido pois
                                            variável não foi inicializada */
console.log('typeof numero: ', typeof numero); // number
console.log('typeof texto: ', typeof 'nome'); // string
console.log('typeof true: ', typeof true); // boolean
console.log('typeof [0,1,2', typeof [0,1,2]); // object
console.log('typeof {name:Neo}: ', typeof {name:'Neo'}); // object
