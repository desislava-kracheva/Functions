function solve(num){

num = num.toString();
let sumEven = 0;
let sumOdd = 0;

for(let i = 0; i< num.length; i++){
if(Number(num[i]) % 2 == 0){

    sumEven += Number(num[i]);
} else {
    sumOdd += Number(num[i]);

}

}
console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);

}

solve(1000435)