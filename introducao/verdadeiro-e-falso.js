/**
    TIPOS           DESCRIÇÃO
    undefined       false
    null            false
    Boolean         verdadeiro(true) e falso(false)
    Number          false +0 e -0 e NaN se não é true
    String          false se a String estiver vazia, se não true
    object          true
*/

function funcaoVerdadeFalso(valor) { // variável valor sendo usado como parâmentro para a função
    if (valor) { // parâmentro para valor true
        console.log('é verdade'); // exibe 'é verdade'
    } else { // parâmentro para valor false
        console.log('é falso'); // exibe 'é falso'
    }
}

funcaoVerdadeFalso(true); // é verdade
funcaoVerdadeFalso(false); // é falso
funcaoVerdadeFalso(''); //  é falso, pois a string esta vazia
funcaoVerdadeFalso('qualquer valor de string'); // verdade, pois a string não esta vazia
funcaoVerdadeFalso(1); // é verdade
funcaoVerdadeFalso(-1); // é verdade
funcaoVerdadeFalso(NaN); // é falso
funcaoVerdadeFalso({}); // é verdade, pois é um objeto

// não use booleano como construtor em produção de sofware, apenas para fins de teste
funcaoVerdadeFalso(new Number(NaN)); // é verdade, pois é um objeto
funcaoVerdadeFalso(new String('')); // é verdade, objetos são sempre true
funcaoVerdadeFalso(new Boolean(false)); // é verdade, objetos são sempre true

var objeto = {nome: 'Ana'};
funcaoVerdadeFalso(objeto); // é verdade, pois é um objeto
funcaoVerdadeFalso(objeto.nome); // é verdade pos a variável nome faz parte do objeto
funcaoVerdadeFalso(objeto.idade); // é falso, pois a variável idade não faz parte do objeto
