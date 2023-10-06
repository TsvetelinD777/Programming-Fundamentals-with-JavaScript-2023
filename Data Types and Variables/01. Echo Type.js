function solve(parm){
    let type = typeof parm;
    console.log(type);

    if(type == 'string' || type == 'number'){
        console.log(parm);
    } else{
        console.log('Parameter is not suitable for printing');
    }
}