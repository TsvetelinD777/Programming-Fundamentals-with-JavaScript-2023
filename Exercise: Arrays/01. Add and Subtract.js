function solve(arr){
    let sum = 0;
    let newSum =0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    if(arr[i] % 2 == 0){
        arr[i] += i;
    } else{
        arr[i] -= i;
    }
    newSum += arr[i];
}
console.log(arr);
console.log(sum);
console.log(newSum);

}