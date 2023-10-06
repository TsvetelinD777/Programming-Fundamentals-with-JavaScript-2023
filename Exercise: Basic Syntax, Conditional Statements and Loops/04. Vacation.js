function solve(count, type, day) {

    switch (type) {
      case 'Students':
        if (day == 'Friday') {
          let price = 8.45;
          if (count >= 30) {
            price *= 0.85;
            console.log(`Total price: ${(price * count).toFixed(2)}`)
          } else {
            console.log(`Total price: ${(price * count).toFixed(2)}`);
          }
        } else if (day == 'Saturday') {
          let price = 9.80;
          if (count >= 30) {
            price *= 0.85;
            console.log(`Total price: ${(price * count).toFixed(2)}`)
          } else {
            console.log(`Total price: ${(price * count).toFixed(2)}`);
          }
        } else if (day == 'Sunday') {
          let price = 10.46;
          if (count >= 30) {
            price *= 0.85;
            console.log(`Total price: ${(price * count).toFixed(2)}`)
          } else {
            console.log(`Total price: ${(price * count).toFixed(2)}`);
          }
        }
        break;
  
      case 'Business':
        if (day == 'Friday') {
          let price = 10.90;
          if (count >= 100) {
            count -= 10;
            console.log(`Total price: ${(price * count).toFixed(2)}`)
          } else {
            console.log(`Total price: ${(price * count).toFixed(2)}`);
          }
        } else if (day == 'Saturday') {
          let price = 15.60;
          if (count >= 100) {
            count -= 10;
            console.log(`Total price: ${(price * count).toFixed(2)}`)
          } else {
            console.log(`Total price: ${(price * count).toFixed(2)}`);
          }
        } else if (day == 'Sunday') {
          let price = 16;
          if (count >= 100) {
            count -= 10;
            console.log(`Total price: ${(price * count).toFixed(2)}`)
          } else {
            console.log(`Total price: ${(price * count).toFixed(2)}`);
          }
        }
        break;
  
        case 'Regular':
          if (day == 'Friday') {
            let price = 15;
            if (count >= 10 && count <= 20) {
              price *= 0.95;
              console.log(`Total price: ${(price * count).toFixed(2)}`)
            } else {
              console.log(`Total price: ${(price * count).toFixed(2)}`);
            }
          } else if (day == 'Saturday') {
            let price = 20;
            if (count >= 10 && count <= 20) {
              price *= 0.95;
              console.log(`Total price: ${(price * count).toFixed(2)}`)
            } else {
              console.log(`Total price: ${(price * count).toFixed(2)}`);
            }
          } else if (day == 'Sunday') {
            let price = 22.50;
            if (count >= 10 && count <= 20) {
              price *= 0.95;
              console.log(`Total price: ${(price * count).toFixed(2)}`)
            } else {
              console.log(`Total price: ${(price * count).toFixed(2)}`);
            }
          }
          break;
    }
  }