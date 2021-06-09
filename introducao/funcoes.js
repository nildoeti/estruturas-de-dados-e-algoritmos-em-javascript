// exemplo de funções em javascript
function digaOla() {
  console.log('Olá');
}

digaOla();


// função com um argumento
function saida(texto) {
  console.log(texto);
}

saida('olá');
saida('estou estudando', ' javascript'); // o segundo argumento é ignorado


// função que devolve um valor
console.log('\nfunção soma');

function soma(num1, num2) {
  return num1 + num2;
}

var resultado = soma(1, 2);
console.log(resultado);

console.log('\nfuncao miltiplicação');

function multiplicacao(num1, num2) {
  return num1 * num2;
}

var resultado = multiplicacao(5, 5);
console.log(resultado);

console.log('\nfunção subtração');

function subtracao(num1, num2) {
  return num1 - num2;
}
var resultado = subtracao(90, 10);
console.log(resultado);

console.log('\nfunção dividir');

function dividir(num1, num2) {
  return num1 / num2;
}

var resultado = dividir(25, 5);
console.log(resultado);
