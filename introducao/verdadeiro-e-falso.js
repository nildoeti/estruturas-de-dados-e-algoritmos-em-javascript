/**
    TIPOS           DESCRIÇÃO
    undefined       false
    null            false
    Boolean         verdadeiro(true) e falso(false)
    Number          false +0 e -0 e NaN se não é true
    String          false se a String estiver vazia, se não true
    object          true
*/

function verdadeFalso(valor) {
  if (valor) { // parâmentro para valor true
    console.log("é verdade"); // exibe 'é verdade'
  } else { // parâmentro para valor falso
    console.log("é falso"); // exibe 'é falso'
  }
}

verdadeFalso(true); // é veradde
verdadeFalso(false); // é falso
verdadeFalso(''); // é falso, pois esta vazio
verdadeFalso(); // é falso, pois esta vazio
verdadeFalso('Qualquer valor como string'); // é verdade, pois não esta vazia
verdadeFalso(1); // true
verdadeFalso(-1); // é verdade
verdadeFalso(NaN); // é falso
verdadeFalso({}); // é verdade pois é um objeto

// não usar booleano como construtor em produção de software
// exemplos para fins de teste
// verdadeFalso(new Number(NaN)); // é verdade pois é um objeto
// verdadeFalso(new String('')); // é verdade, pois objetos são sempre true
// verdadeFalso(new Boolean(false)); // é verdade pois objetos são sempre true

var objeto = {nome: 'Ana'};
verdadeFalso(objeto); // é verdade pois é um objeto
verdadeFalso(objeto.nome); // é verdade, pois a variável nome faz parte do objeto
verdadeFalso(objeto.idade); // é falso pois a variável idade não faz parte do objeto
