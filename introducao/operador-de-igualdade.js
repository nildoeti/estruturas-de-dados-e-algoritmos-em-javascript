/**
    Funcionalidade dos operadores de igualdade == e ===.

    Exemplo 0:
    A string 'texto' é igual a uma String de valor '1', pois foi convetido por toNumber
    Por ser uma string seu valor lógio é falso

    Exemplo 1:
    O número 1 é um inteiro positivo maior ou iqual a 1, portanto seu valor
    lógico é true.

    Exemplo 2:
    O número 0 é menor que 1 e portanto seu valor lógico é false.

*/
console.log('texto' == true); // Exemplo 0
console.log(1 == true); // Exemplo 1 retorna valor lógico true
console.log(0 == true); // Exemplo 2 retorna valor lógico false



// Exemplo 0
if ('texto') {
    console.log(true);
} else {
    console.log(false);
}
