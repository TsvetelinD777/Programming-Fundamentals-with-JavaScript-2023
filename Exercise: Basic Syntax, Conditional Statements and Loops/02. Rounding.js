
function solve(num,raund){
    let a = Number(num);
    let b = Number(raund);

    if(b > 15){
        b = 15;
    }
    a = a.toFixed(b);
    console.log(parseFloat(a))
}