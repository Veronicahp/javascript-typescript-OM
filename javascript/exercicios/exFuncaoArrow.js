// Escreva uma funcao que receba 2 numeros e retorne o maior deles

function max(num1, num2) {
    return num1 > num2 ? num1 : num2; 
}
console.log(max(500, 100));

const max2 = (x, y) => x > y ? x : y;
console.log(max2(700, 100));

function max3(x, y) {
    if (x > y) {
       return x; 
    } else {
        return y;
    }
}
console.log(max3(200, 100));



