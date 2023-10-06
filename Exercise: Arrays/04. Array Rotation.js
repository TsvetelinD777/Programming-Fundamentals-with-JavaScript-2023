function arrRotation(arr, rotationCount){
    for(let rotation = 1; rotation <= rotationCount; rotation++){
        let firstEll = arr.shift();
        arr.push(firstEll);
    }
    console.log(arr.join(' '));
}