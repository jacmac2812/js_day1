var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"]; //A

var all = boys.concat(girls); //b
console.log(all); 

console.log(all.join(", ")); //c
console.log(all.join("- "));


all.push("Lone", "Gitte"); //d
console.log(all);

all.unshift("Hans", "Kurt"); //e
console.log(all);


all.shift("Hans"); //E
console.log(all);


all.pop("Gitte"); //f
console.log(all);

all.splice(3,2); //g
console.log(all);


all.reverse(); //h
console.log(all);

all.sort(); //i
console.log(all);


let sortFn = function(a, b) {
    a=a.toLowerCase();
    b=b.toLowerCase();
    if(a==b) return 0;
    if(a>b) return 1;
    return -1;
}
all.sort(sortFn);
console.log(all); //j


let all2 = all.map(function(item) { return item.toUpperCase() }); //k
console.log(all2);


let all3 = all.filter(function(item) { return item.toLowerCase()[0] === "l"}); //l
console.log(all3);