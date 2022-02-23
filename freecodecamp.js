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
]
const arr1 = [1, 2, 3];
arr1.push(4); // .push()принимает один или несколько параметров и "помещает" их в конец массива. [1, 2, 3, 4]

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop(); // .pop()удаляет последний элемент из массива и возвращает этот элемент.
console.log(oneDown); // Первый console.logотобразит значение 6, а второй отобразит значение [1, 4].
console.log(threeArr);

const ourArray = ["Stimpson", "J", ["cat"]]; // .shift() он удаляет первый элемент
const removedFromOurArray = ourArray.shift(); // ["J", ["cat"]]

const ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift("Happy"); // ["Happy", "J", "cat"]

function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(5, 6);

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

// Дан select .s-110. По изменению состояния select (событие onchange) выведите value выбранного option в .out-11.
let input11 = document.querySelector('.s-110');
let div11 = document.querySelector(".out-11");

function f11() {
    let a = input11.value;
    div11.textContent = a;
}

document.querySelector('.s-110').onchange = f11;