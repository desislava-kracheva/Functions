function solve(num1, num2, num3){

let result = sum(num1, num2);
return result - num3;

function sum(num1, num2){
    return num1 + num2
}

}

console.log(solve( 1,
    17,
    30
    ))
