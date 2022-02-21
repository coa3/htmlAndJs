let lastNameLength = 0;
const lastName = "Lovelace";
console.log(lastName.lenght);
// Only change code below this line
lastNameLength = lastName;

const myArray = [
    ["John", 23],
    ["cat", 2]
];
let removedFromMyArray = myArray.pop();
const myArray = [
    ["John", 23],
    ["dog", 3]
];
let removedFromMyArray = myArray.shift();
const myArray = [
    ["John", 23],
    ["dog", 3]
];
myArray.shift();
myArray.unshift(["Paul", 35]);

function reusableFunction() {
    console.log('Hi World');
}
reusableFunction(); //вызов функции

function functionWithArgs(one, two) {
    console.log(one + two);
}
functionWithArgs(1, 2);

function timesFive(num) {
    return num * 5;
}
const outerWear = "T-Shirt";

function myOutfit() {

    var outerWear = 'sweater';

    return outerWear;
}
myOutfit(); //переопределение функции

let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);