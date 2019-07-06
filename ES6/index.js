//INTERPOLATION
let name = "Farid",
    mail = "farahardcore161@gmail.com",
    age = 24;

// document.write("ПОльзователю " + name + "" + age + " лет. Его почтовый адресс: " + mail) - old way
document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес : ${mail} `); // this is interpolation on es6

//var let const
//var
// function makeArray() {
//     var items = [];
//     for(var i = 0; i < 10;i++){
//         var item = function(){
//             console.log(i);
//         };
//         items.push(item);
//     };
//     return items;
// };
// var arr = makeArray();
// arr[1]();
// arr[3]();
// arr[7]();
//when we call our function we get three complete cycles, but we wanted got every element [i]. We dont happy

//mother - let 
// function makeArray() {
//     var items = [];
//     for(let i = 0; i < 10;i++){
//         var item = function(){
//             console.log(i);
//         };
//         items.push(item);
//     };
//     return items;
// };
// var arr = makeArray();
// arr[1]();
// arr[3]();
// arr[7]();
//in this way we get than elements what we wanted 
//mother - let , father - const 
function makeArray() {
    const items = [];
    for(let i = 0; i < 10;i++){
        const item = function(){
            console.log(i);
        };
        items.push(item);
    };
    return items;
};
let arr = makeArray();
arr[1]();
arr[3]();
arr[7]();
//complete variant with use es6


//ARROW FUNCTION 

let fun = () => {
    console.log(this);
}

fun();

//in console we got object window - it because arrow function havent own personal name , we cant set her different name, she anonimous;
//second aspect we cant control event listeners also we cant call her inside her (recurs) and she havent own "this";

let obj = {
    number : 5,
    sayNumber : function (){
        let say = () => {
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();
//we got in console sayNumber because arrow function havent own context and she show us obj her parent;

let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let show = () => {
        console.log(this);
    };
    show();
})
// this showing us on element <button/> just cause arrow function havent own context

//parameters on default

function calcOrDouble(number, basis = 2){
    // basis = basis || 2; - ES5
    console.log(number * basis);
};
calcOrDouble(3, 5);
calcOrDouble(6);

//class

class Rectangle{
    constructor(height, width = 20){
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    };
}

const square = new Rectangle(10);
console.log(square.calcArea());
console.log(square);

//SPREAD - operator

const arr1 = [1,2,3];
const arr2 = [4,5,6];
let completeArray = [...arr1, ...arr2];
console.log(completeArray);
// it working yet with objects



