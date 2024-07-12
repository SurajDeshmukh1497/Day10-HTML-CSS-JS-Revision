// console.log("Hello World")


let x = 5
let y = 5
console.log(5+5)

if (x<=10) {
    console.log("x is smaller")
} else{
    console.log("x is bigger")
}

// numbers
let a = 5
console.log(a)
console.log(typeof(a))

const Name = "suraj"
const lastName = "Deshmukh"
console.log(Name + lastName)
console.log(typeof(Name))

const bool1 = true
console.log("Value of bool1 is"+ bool1)

const sym1= Symbol("123")
console.log(sym1)

// Object 
const user ={
    name: "Rohit Sharma",
    age: 27,
    place: "Mumbai"
}
console.log(user)

// Array
colors = ["red","yellow","black","blue"]
console.log(colors)

conversion
console.log("100"+ 24)

console.log('100'- 50)
console.log('100'* 50)

let num1 = 100 + null
console.log(num1)

const x= Number("100")
console.log(typeof(x))

// operations
let a = 17
const b = 5
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// Object 
 const user ={
 name: "Rohit Sharma",
 age: 27,
 place: "Mumbai"
}
delete(user["place"]);
console.log(user)

for( let  x=0; x<10; x = x + 1) {
    console.log(x)
}
console.log("loop stopped")

var x = 0
while (x < 10) {
    console.log(x)
    x++;
}
console.log("loop stopped")

let x = 10;
switch(x){
    case 9 :
        console.log("nine")
        break;
    
    case 10 :
        console.log("ten")
        break;
        
    case 11:
        console.log("eleven")
        break;
}

// function
function hey(){
console.log("hello world")
}
hey();

const add= function(a=0,b=0){
    console.log(a + b)
}
console.log(add(50,))

// array
array = [1,2,3,4,5,6]
console.log(array[2])
console.log(array.length)
array[3]= 50;
console.log(array)

let list = [1,2,3,4,5,6];
for(let n=0; n < list.length; n++) {
    console.log(list[n]);
}

let array = new Array[1,2,3,4,5,6]
let set1= new Set([1,2,3,4,5,6])
set1.add(6); //insert element
set1.delete(3); // delete element
set1.has(45); // check set has 45 or not

console.log(set1)