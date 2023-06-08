var readline = require('readline-sync');

var x = readline.question("x : ");

    let genap = 2;
      console.log(x);
    if (x < 0) {
        console.log("Tidak bisa input bilangan negatif");
    } else if (x % genap){
        console.log("Tidak bisa input bilangan ganjil");
    }else{
        console.log(Math.sqrt(x));
    }

