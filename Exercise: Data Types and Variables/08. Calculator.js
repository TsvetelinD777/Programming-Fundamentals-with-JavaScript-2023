function solve(num, operator, anatherNum){

    let result = 0;

    if(operator == '+'){
        result = num + anatherNum;
        console.log(result.toFixed(2));
    } else if(operator == '-'){
        result = num - anatherNum;
        console.log(result.toFixed(2));
    } else if(operator == '/'){
        result = num / anatherNum;
        console.log(result.toFixed(2));
    } else { 
        result = num * anatherNum;
        console.log(result.toFixed(2));
    }


}