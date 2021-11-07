function solve(arr){

let result = '';

for(let num of arr){
    let isPalindrome = true;
    num = String(num)
    let mid = parseInt(num.length / 2);
for(let i = 0; i <= mid; i++){

if(num[i] !== num[num.length -1- i]){

isPalindrome = false;

break; 
}

}
result += isPalindrome + '\n';

}

return result;

}


console.log(solve([123,323,421,121]));