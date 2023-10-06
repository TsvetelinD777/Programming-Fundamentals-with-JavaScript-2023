
function solve(input){

    let user = input[0];
    let pass = '';
  
    
    for(let i = user.length - 1; i >= 0; i--){
      pass += user[i];
    }
  
    let guess = input[1];
    let index = 2;
    let wrongAtempts = 0;
  
    while(guess != pass){
      wrongAtempts++;
  
      if(wrongAtempts == 4){
        console.log(`User ${user} blocked!`);
        return;
      }
  
      console.log('Incorrect password. Try again.');
      guess = input[index];
      index++;
    }
  
    console.log(`User ${user} logged in.`);
  }