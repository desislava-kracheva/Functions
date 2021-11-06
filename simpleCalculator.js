function solve(numOne, numTwo, operator){

let result = 0;
numOne = Number(numOne);
numTwo = Number(numTwo);

switch(operator){

    case 'multiply': result = numOne * numTwo;break;
    case 'divide': result = numOne/ numTwo;break;
    case 'add': result = numOne + numTwo;break;
    case 'subtract': result = numOne - numTwo; break;
    
    
}
console.log(result);
}

solve(5,2, 'multiply')