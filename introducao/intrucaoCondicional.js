// bloco de instrução somnete para condicional if
var num = 1;
if (num == 1) {
  console.log('num é igual e idêntico a 1');
}

// bloco de instrução para condicional if-else
var num2 = 0;
if (num2 === 1) {
  console.log('num2 é igual e idêntico a 1');
} else {
  console.log('num2 não é igual e nem idêntico a 1');
}

// instrução if-else representado pelo operador tenário

var num3 = 1;
if (num3 === 1) {
  num3--;
} else {
  num3++;
}

// Várias expressões if-else
var mes = 5;
if (mes === 1) {
  console.log('janeiro');
} else if (mes === 2) {
  console.log('fevereiro');
} else if (mes === 3) {
  console.log('marco');
} else {
  console.log('O mês não é janeiro, fevereiro ou março');
}

// instrução switch
var mes = 6;

switch (mes) {
  case 1:
    console.log('janeiro');
    break;
  case 2:
    console.log('fevereiro');
    break;
  case 3:
    console.log('março');
    break;
  default:
    console.log('O mês não é janeiro, fevereiro ou março');
}

var nome = 'emma';
switch(nome) {

    case 1:
        console.log('marcos');
        break;
    case 2:
        console.log('pedro');
        break;
    case 3:
        console.log('maria');
        break;
    default:
        console.log('Os nomes não é marcos, pedro ou  maria');
}
