/**
    Operador delete apaga uma propriedade de um object do javascript.
*/

var myObject = {name: 'John', age: 28};

// exibe todos as variáveis e valores do nosso objeto my
console.log('Dados completos do objeto: ', myObject);
console.log('idade: ', myObject.age); // mostra a idade
console.log('nome: ', myObject.name); // exibe o valor para a variável nome

delete myObject.age; // deleta a variável age e seu valor do objeto myObject
console.log(myObject);
