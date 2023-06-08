var json = require('./soal2.json');
var total = 0;

for (i = 0; i < json.data.length; i++) {
    console.log(json.data[i].quantity);
    total += json.data[i].quantity;  
}

console.log("_____ +")
console.log(total);