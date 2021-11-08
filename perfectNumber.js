function solve(num){
let arr = [];
let sum = 0;
    for(i = 1; i<num; i++){

if(num % i  === 0){

    arr.push(i);


};
    }
for(let j = 0; j <= arr.length-1; j++){

sum += arr[j];
}


if(sum === num ){

    console.log(` We have a perfect number!`);
}   else {

    console.log(`It's not so perfect.`);
}
}

solve(28)