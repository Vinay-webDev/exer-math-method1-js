//1.----------------------//
function arithmeticOperations(a, b) {
    let sum = a + b;
    let difference = a - b;
    let product = a * b;
    let quotient = a / b;

    return {
        sum: sum,
        difference: difference,
        product: product,
        quotient: quotient
    };
}

console.log(arithmeticOperations(10, 5));
//2.-----------------------------------//
function powerAndSquareRoot(num) {
    let square = Math.pow(num, 2);
    let squareRoot = Math.sqrt(num);

    return {
        square: square,
        squareRoot: squareRoot
    };
}

console.log(powerAndSquareRoot(9));
console.log(powerAndSquareRoot(16));























