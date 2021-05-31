var myVariable = 'global';
var myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    var myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable); // global
console.log(myFunction()); // local
console.log(myOtherVariable); // global
console.log(myOtherFunction()); // local
