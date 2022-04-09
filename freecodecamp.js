// && - и  || или
Помните, что для того, чтобы начать комментарий, вам нужно использовать,
<!--а чтобы закончить комментарий, вам нужно использовать-->
const one = document.querySelector('.one');

one.style.width = '150px'; //присвоение стиля элементу
one.style.paddingBottom = '40px';

// console.log(one.style);

one.classList.add('two', 'three'); // add- присвоение и добавление класса
one.classList.remove('three'); // remove-  удаление класса
one.classList.toggle('three'); // toggle- переключатель
one.classList.contains('three'); //contains- проверка на наличие класса, если есь класс .three то true, 
//если нет то false

const toggle = document.querySelector('.toggle');

toggle.onclick = function() {
    this.classList.toggle('three'); //this- элемент на котором происходит событие
}

// атрибуты data
console.log(one.getAttribute('data')); //getAttribute -- чтение атрибута data
console.log(document.querySelectorAll('link')[1].getAttribute('href'));

one.setAttribute('data-num', 6); // setAttribute- создать атрибут, data-num = "6" со значением 6

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function() {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data'); // this- кнопка на котор нажали и ее читаем
        console.log(gallons * amount);
    }
}

let a = document.createElement('div'); // createElement- создает элемент div
a.innerHTML = 'Hello!'; //добавляем в созданый выше элемент текст hello
a.classList.add('one'); // добавляем ему класс one
a.onclick = function() {
    alert('hello'); // добавляем событие, во время клика срабатывает
}

document.querySelector('.test').appendChild(a); // appendChild- метод для добавления

// ----------------------сумма элемнтов в массиве----------------------------------------
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20
let out20 = document.querySelector('.out-20');
let ar20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {
    let sum = 0;
    for (i = 0; i < ar20.length; i++) {
        sum = sum + ar20[i];
    }
    out20.innerHTML = sum;
}


document.querySelector('.b-20').onclick = f20;

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
    let out71 = document.querySelector('.out-71');
    let out72 = document.querySelector('.out-72');

    function f7() {
        let myCheckBox7 = document.querySelector('.i-7').value;
        out71.innerHTML = myCheckBox7;
        let lig = myCheckBox7.length;
        if (lig >= 6) {
            out72.innerHTML = 1;
        } else {
            out72.innerHTML = 0;

        }


    }
    Кнопка.b - 1 запускает функцию t1.Функция должна выводить в.out - 1 строку вида:
        //     1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
        // Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.
        let div = document.querySelector('.out-1');

    function t1() {
        for (let i = 1; i < 17; i++) {
            div.innerHTML += i + "_";
        };
    }
    При смене выбранного значения в s - 18, получайте из него value выбранного
        // option и присвойте данный value в input .i-18.
    let out18 = document.querySelector('.i-18');

    function f18() {
        let imput18 = document.querySelector('.s-18').value;
        out18.value = imput18;
    }
    Кнопка.b - 2 запускает функцию t2.Функция должна выводить в.out - 2 строку вида:
        // 12_14_16_18_20_22_24_26_28_30_32_34_36_38_
        //Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.
        let div2 = document.querySelector('.out-2');
    let out2 = "";

    function t2() {
        for (let i = 12; i < 39; i += 2) {
            out2 += i + "_";
        }
        div2.innerHTML = out2;
    }

    document.querySelector('.b-2').onclick = t2;
    Кнопка.b - 6 запускает функцию t6.Функция должна выводить в.out - 6 строку вида:
        //
        // ******<br>
        // ******<br>
        // ******<br>
        //
        //Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек. Перенос строки - br. Количество строк 
        //(итераций, повторений) цикла вводит пользователь в i-6.
        //
        let div6 = document.querySelector('.out-6');


    function t6() {
        // эта строка - внутри функции обязательно
        let out6 = "";
        // получаем число
        let n = +document.querySelector('.i-6').value;
        for (let i = 0; i < n; i++) {
            out6 += '******<br>';
        }
        div6.innerHTML = out6;

    }

    document.querySelector('.b-6').onclick = t6;
    Task 11
    // Кнопка .b-11 запускает функцию t11.  Функция должна:
    //     получить все div.div-11 в переменную divs11
    // перебрать их с помощью цикла. Обращение к div выглядит так divs[i].innerHTML
    // вывести в .out-11 содержимое каждого блока. Разделитель - знак подчеркивания.
    //     В результате должно получиться так:
    //     one_3_4_two_
    let divout11 = document.querySelector('.out-11');


    function t11() {
        let divs11 = '';
        let div11 = document.querySelectorAll('.div-11');
        for (let i = 0; i < div11.length; i++) {
            divs11 += div11[i].innerHTML + '_';
        }
        divout11.innerHTML = divs11;

    }

    document.querySelector('.b-11').onclick = t11;