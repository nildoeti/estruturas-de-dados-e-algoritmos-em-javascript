/**
    Funcionalidade dos operadores de igualdade == e ===.


*/

// para entender
console.log(true == 1); // true sempre retorna valor 1
console.log(false == 0); // false sempre retornar valor 0

var texto = 'Eu sou uma cadeia de caracteres';
if (texto) { // testa se variável texto tem conteúdo
  console.log('É verdade que variável texto tem conteúdo.'); // para true
} else {
  console.log('Não é verdade que variável texto tem conteúdo.'); // para false
}
/**
  IMPORTANTE: A cadeia de caracteres atribuido na variável texto, torna a saida da
  instrução condicional verdadeira, do contrário, vazia, torna sua condicional
  falsa.
  O valor para a condicional verdadeira(true), é igual a 1.
  O valor para a condicional falsa(false), é igual a 0;

  Porntanto, essa lógica justifica os exemplos abaixo para as diferenças entre
  os operadores de igualdade do JavaScript.
*/
// valor lógico true convertido por toNumber
console.log('texto'? true:false);

// 'Ola mundo!' não é igual a isNaN(não é um número).
// Porém toNumber acaba convertendo 'Ola mundo!', para valor = 1, e sua saida é false
// pois 1 não é igual a NaN.
console.log('Ola mundo!' == isNaN); // é false

// 'Ola mundo!' não é igual a true(verdade)
console.log('Ola mundo!' == true); // false, pois não é um número NaN
