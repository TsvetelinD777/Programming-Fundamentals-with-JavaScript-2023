function gameDev (arr){
    let roomsInfo = arr[0];
    let rooms = roomsInfo.split('|');

    let health = 100;
    let coins = 0;

    let bestRoom = 1;

    for(let room of rooms){
        let tookens = room.split(' ');

        let command = tookens[0];
        let num = Number(tookens[1]);

    if(command == 'potion'){
        let newHp = health + num <= 100 ? num : 100 - health;
        health += newHp;
        console.log(`You healed for ${newHp} hp.`);
        console.log(`Current health: ${health} hp.`);
    } else if(command == 'chest'){
        coins += num;
        console.log(`You found ${num} coins.`);
    } else{
        health -= num;

        if(health > 0){
            console.log(`You slayed ${command}.`);
        } else { 
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${bestRoom}`);
            break;
        }    
     }
        bestRoom++; 
    }
    if(health > 0){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);      
    }
     
}