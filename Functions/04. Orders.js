function oreder(product, quantity) {
    let sum = 0;
    if(product == 'coffee'){ 
        let price = 1.50;
        sum = quantity * price
        console.log(`${sum.toFixed(2)}`);
    } else if(product == 'coke'){ 
        let price = 1.40;
        sum = quantity * price
        console.log(`${sum.toFixed(2)}`);
    }else if(product == 'water'){ 
        let price = 1.00;
        sum = quantity * price
        console.log(`${sum.toFixed(2)}`);
    }else if(product == 'snacks'){ 
        let price = 2.00;
        sum = quantity * price
        console.log(`${sum.toFixed(2)}`);
    }
}