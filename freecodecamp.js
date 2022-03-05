// && - и  || или
Помните, что для того, чтобы начать комментарий, вам нужно использовать,
<!--а чтобы закончить комментарий, вам нужно использовать-->

let lastNameLength = 0;
const lastName = "Lovelace";
console.log(lastName.lenght);
// Only change code below this line
lastNameLength = lastName;

function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

function testGreaterThan(val = 1) {
    if (val > 100) { // Change this line
        return "Over 100";
    }

    if (val > 10) { // Change this line
        return "Over 10";
    }

    function testElse(val) {
        let result = "";
        if (val > 5) {
            result = "Bigger than 5";
        } else {
            result = "5 or Smaller";
        }
        return result;
    }

    function testLogicalAnd(val) {
        if (val <= 50 && val >= 25) {
            return "Yes";
        }
        return "No";
    }
}

function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            return 'alpha';
            break;
        case 2:
            return 'beta';
            break;
        case 3:
            return 'gamma';
            break;
        case 4:
            return 'delta';
            break;

    }
    return answer;

    function chainToSwitch(val) {
        let answer = "";
        switch (val) {
            case 'bob':
                answer = "Marley";
                break;
            case 42:
                answer = "The Answer";
                break;
            case 1:
                answer = "There is no #1";
                break;
            case 99:
                answer = "Missed me by this much!";
                break;
            case 7:
                answer = "Ate Nine";
                break;
        }
        return answer;
    }
    chainToSwitch(7);

}

function switchOfStuff(val) {
    let answer = "";
    switch (val) {
        case 'a':
            return 'apple';
            break;
        case 'b':
            return 'bird';
            break;
        case 'c':
            return 'cat';
        default:
            return 'stuff';
            break;
    }

}

function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
    }
    return answer;

    function phoneticLookup(val) {
        let result = "";

        // это эдентично коду нижнему
        //  switch(val) {
        //  case "alpha":
        //  result = "Adams";
        // break;
        // case "bravo":
        // result = "Boston";
        // break;
        // case "charlie":
        // result = "Chicago";
        // break;
        // case "delta":
        // result = "Denver";
        //  break;
        //  case "echo":
        //   result = "Easy";
        //   break;
        // case "foxtrot":
        //   result = "Frank";
    }

    // Only change code above this line
    //  return result;
    // }

    phoneticLookup("charlie");

    function phoneticLookup(val) {
        var result = "";
        var lookup = {
            "alpha": "Adams",
            "bravo": "Boston",
            "charlie": "Chicago",
            "delta": "Denver",
            "echo": "Easy",
            "foxtrot": "Frank"
        };
        result = lookup[val];
        return result;
    }
    phoneticLookup("charlie");
}

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}
//Мы можем использовать .hasOwnProperty(propname)метод объектов, чтобы определить, имеет ли этот объект заданное имя свойства. .hasOwnProperty()возвращает trueили falseесли свойство найдено или нет.

Пример

const myObj = {
    top: "hat",
    bottom: "pants"
};

myObj.hasOwnProperty("top");

sequentialSizes(1);

function isEqual(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return;
    } else {
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
}
let count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

function cc(card) {
    var regex = /[JQKA]/;
    if (card > 1 && card < 7) {
        count++;
    } else if (card === 10 || regex.test(card)) {
        count--;
    }

    if (count > 0) return count + " Bet";
    return count + " Hold";
}
const myDog = {
    name: "dog",
    legs: 3,
    tails: 1,
    friends: ["water", "red"]
}
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.name = 'Happy Coder';
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "гав";
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails;



abTest(2, 2);
// аналогично:
function isEqual(a, b) {
    return a === b;
}


function testGreaterOrEqual(val = 20) {
    if (val >= 20) { // Change this line
        return "20 or Over";
    }

    if (val >= 10) { // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

function testLessThan(val = 20) {
    if (val < 25) { // Change this line
        return "Under 25";
    }

    if (val < 55) { // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

function testLessOrEqual(val = 12) {
    if (val <= 12) { // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) { // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

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

function nextInLine(arr, item) { // Затем nextInLineфункция должна вернуть элемент, который был удален
    arr.push(item);
    return arr.shift();
    return item;
}

const testArr = [1, 2, 3, 4, 5];
testArr.push(); // Добавьте число в конец массива
testArr.shift(); // удалите первый элемент массива


function numberToString(num) {
    return num + ""; // Преобразование числа в строку!
}
вариант№ 2

function numberToString(num) {
    return num.toString();
}

function numberToString(num) {
    // Return a string of the number here!
    return String(num);
}
const numberToString = num => num.toString();

function f15() {
    let selectEl1 = +document.querySelector('.s-151').value;
    let selectEl2 = +document.querySelector('.s-152').value;
    let selectEl3 = document.querySelector('.s-153').value;
    let divEl = document.querySelector('.out-15');

    switch (selectEl3) {
        case '&&':
            divEl.innerHTML = selectEl1 || selectEl2;
            break;
        case '||':
            divEl.innerHTML = selectEl1 && selectEl2;
            break;
    }
}

document.querySelector('.b-15').onclick = f15;
// Создайте функцию, которая проверяет, nделится ли число на два числа x AND y . 
//Все входные данные являются положительными, ненулевыми цифрами.
function isDivisible(n, x, y) {
    let a = n % x;
    let b = n % y;
    if (a == 0 && b == 0) {
        return true;
    } else {
        return false;
    }

}

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}

function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
}

function isDivisible(n, x, y) {
    return !(n % x || n % y)
}
const isDivisible = (n, x, y) => n % x == 0 && n % y == 0;
isDivisible = (n, x, y) => n % x == 0 && n % y == 0

function isDivisible(n, x, y) {
    return (n % x) == 0 && (n % y) == 0;
}
// Напишите функцию, которая принимает два целых числа и возвращает остаток от деления большего значения на меньшее.
// Деление на ноль должно вернуть NaN.
function remainder(n, m) {
    // Divide the larger argument by the smaller argument and return the remainder