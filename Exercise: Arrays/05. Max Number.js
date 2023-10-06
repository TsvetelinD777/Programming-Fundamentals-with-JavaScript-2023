function maxNumber(arr){
    let topNums = [];
    
    
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        let isTop = true;
    
        for(let j = i + 1; j < arr.length; j++){
            let currentNum = arr[j];
    
            if(currentNum >= num){
                isTop = false;
                break;
            }
        }
        if(isTop){
            topNums.push(num);
        }
    }
    console.log(topNums.join(' '));
    }