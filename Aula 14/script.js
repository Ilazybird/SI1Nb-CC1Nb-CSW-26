var issoEumastring = 'Isso é uma string';
let issoEumNumero = 42;
const issoEumbooleano = true;
let issotambemEumaString = '42';


if (issoEumNumero === issotambemEumaString) {
    console.log("As strings são iguais");
} else {
    console.log("As strings são diferentes");
};


console.log(issoEumNumero + issotambemEumaString);

console.log(issoEumNumero + issoEumNumero);

var issoEumaGlobal = "Eu sou uma variável global";

{
    let issoEumaLocal = "Eu sou uma variável local";
    console.log(issoEumaGlobal);
    console.log(issoEumaLocal);
}

console.log(issoEumaGlobal);
//console.log(issoEumaLocal);

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;

console.log(sum.toPrecision(2))

for (let i = 0; i < 5; i ++) {
    console.log(i);
    console.log(i*2);
    console.log(i*2+1);
}

let i = 0;
while (i < 5) {
    console.log(i*2+1);
    i++; // Avança de 1 em 1
}


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 1; i <= 100; i++) {
    isPrime(i) ? console.log(i) : null
}