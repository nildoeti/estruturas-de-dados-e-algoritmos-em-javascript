/**
    operadores binários exige dois operandos, um antes do operador e outro depois:
    Mais informações developer.mozilla:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators

    AND (a & b)
    Retorna um 1 para cada posição em que os bits da posição correspondente de
    ambos operandos sejam uns.

    OR (a | b)
    Retorna um 0 para cada posição em que os bits da posição correspondente de
    ambos os operandos sejam zeros.

    XOR (a ^ b)
    Retorna um 0 para cada posição em que os bits da posição correspondente são os mesmos.
    Retorna um 1 para cada posição em que os bits da posição correspondente sejam diferentes.

    NOT (~ a)
    Inverte os bits do operando.

    (a << b) Deslocamento à esquerda
    Desloca a em representação binária b bits à esquerda, preenchendo com zeros à direita.

    (a >> b) Deslocamento à direita com propagação de sinal
    Desloca a em representação binária b bits à direita, descartando bits excedentes.

    (a >>> b) Deslocamento à direita com preenchimento zero
    Desloca a em representação binária b bits à direita, descartando bits excedentes
    e preenchendo com zeros à esquerda.

*/
console.log('5 && 1: ', (5 && 1)); // retorna 1
console.log('5 | 1: ', (5 | 1)); // 5
console.log('~ 5: ', (~ 5)); // -6
console.log('5 ^ 1: ', (5 ^ 1)); // 4
console.log('5 << 1: ' + (5 << 1)); // 1
console.log('5 >> 1: ' + (5 >> 1)); // 2
console.log(9 << 2);

// teste com duas variáveis de valores true e false
var a = true;
var b = false;

console.log('a && b: ', a && b);
console.log('a | b: ', (a | b));
console.log('a == b: ', (a == b));
console.log('a != b: ', (a != b));
