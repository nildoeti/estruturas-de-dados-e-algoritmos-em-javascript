var num = 0;
var num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1;
num -= 1;
num *= 3;
num /= 3;
num %= 3;

console.log('num == 1: ' + (num == 1)); // false
console.log('num === 1: ' + (num === 1)); // false
console.log('num != 1: ' + (num != 1)); // true
console.log('num > 1: ' + (num > 1)); // false
console.log('num < 1: ' + (num < 1)); // true
console.log('num >= 1: ' + (num >= 1)); // false
console.log('num <= 1: ' + (num <= 1)); // true
console.log('true && false: ' + (true && false)); // false
console.log('true || false: ' + (true || false)); // true
console.log('!true: ' + (!true)); // false
