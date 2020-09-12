
//1
//Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

//Function Expression
var sub = function(n1,n2){
  return n1 - n2;
} 

var mul = function(n1,n2){
   return n1 * n2;
}

let div = function (n1, n2){
    return n1 / n2;
}

//Callback example
var cb = function(n1,n2, callback){
    try {
        typeof n1 === "number";
        typeof n2 === "number";
        typeof callback === "function";
        return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    } catch (e) {
        console.error(e.name + ': ' + e.message);
    }

};

//2

//console.log( add(1,2) )     // What will this print?
//console.log( add )          // What will it print and what does add represent?
//console.log( add(1,2,3) ) ; // What will it print
//console.log( add(1) );	  // What will it print 	
//console.log( cb(3,3,add) ); // What will it print
//console.log( cb(4,3,sub) ); // What will it print
//console.log(cb(3,3,add())); // What will it print (and what was the problem)
//console.log(cb(3,"hh",add));// What will it print
//console.log(cb(3,3,mul));
//console.log(cb(30,4,div));



    let names = ["Lars", "Jan", "Peter", "Bo", "Fredrik"];
    
    let names1 = names.filter(function(item) { return item.length <=3 });

names.forEach(element => console.log(element));
names1.forEach(element1 => console.log(element1));


let names3 = names.map(function(item) { return item.toUpperCase() });
console.log(names3);


function listHTML(array) {
    array2 = array.map(function (item) {
        return '<li>' + item + '</li>';
    });

    array2.push('</ul>');
    array2.unshift('<ul>');
    array3 = array2.join('');

    console.log(array3);
}

listHTML(names);

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

let cars1 = cars.filter(function(car) { return car.year > 1999}); 
console.log(cars1);

let cars2 = cars.filter(function(car) { return car.make === 'Volvo'}); 
console.log(cars2);

let cars3 = cars.filter(function(car) { return car.price < 5000}); 
console.log(cars3);


function sql(array) {
    array2 = array.map(function (car) {
        return 'INSERT INTO cars (id,year,make,model,price) VALUES (' + car.id + ', ' + car.year + ', ' + car.make + ', ' + car.model + ', ' + car.price + ');';
    });
    array3 = array2.join(' ')
    console.log(array3);
}
//sql(cars);


var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");


