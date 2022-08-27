// !+кнопка tab = выводит шаблон html страницы!!!!
// && - и 
// || или
// if (i % 2 === 0)
// == проверка по значению
// === проверка по значению и типу, строгая проверка
// +'16'=== 16  перевод в число строки
// 5+""  перевод числа в стринг
// 2**8 возведение 2 в 8ю степень
// [a,b]=[b,a] меняем присвоенное значение местами без третьего временного значения const [a, b, c] = [1, 2, 3]  быстрое присвоение 
// let a = [1,2,3];
// let b = [4,5,6];
// let c = [...a, ...b] это объединяет массивы [1, 2, 3, 4, 5, 6]
// -----------------сделать все первые буквы главными
let n6 = "How can mirrors be real if our eyes aren't real";

function f19() {
    let m = n.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
        //n.split(' ');   ['How', 'can', 'mirrors', 'be', 'real', 'if', 'our', 'eyes', "aren't", 'real']
        // (/\s+/)  \s - пробелы +  от еденицы и больше (от еденицы и больше это все что идет сразу после пробелов, как раз все первые буквы каждого слова!!!!)
        // .map(word => word[0].toUpperCase() [0] преобразовать в верхний регистр
        // .substring(1). substring()- возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки. от 1 индекса и до конца слова
        // join(' ') - ставим пробел между словами
}

let n = 5248971;

function f19() {
    let r = n + ''; // преобразуем число в строку
    let m = Array.from(r) // разбиваем каждый символ в отдельный элемнент и преобразуем в массив ['5', '2', '4', '8', '9', '7', '1']
    let out = [];
    for (let i = 0; i < m.length; i++) {
        out.push(+m[i]); // каждый элемент массива переводим в число [5, 2, 4, 8, 9, 7, 1]
    }
    out.sort((a, b) => b - a) // сортируем по убыванию [9, 8, 7, 5, 4, 2, 1], a - b  сортировать по убыванию
    let x = +out.join(""); // преобразовать массив чисел в одно число 987654321
};
let a22 = {
    c: 300,
    b: 200,
    color: 'red'
}
let z = { color: 'blue' };
let x = {...a22, ...z }; // заменяет любой одинаковый параметр на последний, в данном случае ключ
console.log(x);
[...x]; // преобразуем строку в массив
// из предложения создать массив слов
let x5 = "Let's travel abroad shall we";
let str = x.split(" ");
//--------------------------------фильтрует элементы массива по нашим заданым характеристикам
// «arr.filter(callback[, thisArg]) Он создаёт новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true.
var arr = [1, -1, 2, -2, 3];
var positiveArr = arr.filter(function(number) { // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    return number > 0;
}); // 1,2,3
//-----------------------------------------выводит длинну каждого элемента  массива
// «arr.map(callback[, thisArg])» 
var names = ['HTML', 'CSS', 'JavaScript'];
var nameLengths = names.map(function(name) {
    return name.length;
}); // получили массив с длинами 4,3,10
//---------------------------------------- сумма элементов массива
var arr = [1, 2, 3, 4, 5]
var result = arr.reduce(function(sum, current) {
    return sum + current;
}, 0); // 15
//------------------------------------
// parseFloat разбирает текстовую строку, ищет и возвращает из неё десятичное число. Если функция встретит знак, отличный от (+ или -), 
//цифр(0-9), разделительной точки, или показателя степени, она вернёт значение, предшествующее этому знаку, игнорируя все последующие символы . 
//Допускаются позади и впереди идущие пробелы.
// Если вы хотите проверить, является ли переменная числом, лучше всего использовать Number.isFinite() .

// this. элемент на котором происходит событие----------------------
// Math.max(...[1, 2, 3, ]) // Math.max не принимает массива и что бы найти здесь максимальное число, надо взять в скобки и поставить три точки ...
// let a = [0, 1, 2, 8] Array.slice(-1)[0]  // находим последнее число массива
// Помните, что для того, чтобы начать комментарий, вам нужно использовать,
//   <!--а чтобы закончить комментарий, вам нужно использовать-->
// Ctrl+/ для однострочного комментария и что-то вроде Ctrl+Shift+/ – для многострочных комментариев (выделите кусок кода и нажмите комбинацию клавиш)
/* Пример с двумя сообщениями.
Это - многострочный комментарий.
*/
//  if (Number.isInteger(x) || x <= 0 || x >= 0) проверка на валидность число ни число....
// второй вариант if (typeof x === 'number')
'Interface'.toUpperCase() // перевести в верхий регистр
'Interface'.toLowerCase() // перевести в нижний регистр
    // перевести в число
document.querySelector('.out-17-1').innerHTML = +a;
document.querySelector('.out-17-2').innerHTML = parseInt(a, 10);
document.querySelector('.out-17-3').innerHTML = Number(a);
// out11.innerHTML = x + ' ' + y; вывести через пробел два числа либо так `${x}  ${y}`
// exp % 1 === 0 проверка на целое число
// let out = '';  =============  если ''; то out += ....... + ' '; будет выводить последовательно элементы, так 4 5 6 7
// let out = 0;  =============  если 0; то out += ....... + ' '; будет выводить сумму элементов...
// знака ? вместо if ----------------------------------------
let age = prompt('Возраст?', 18);
let message = (age < 3) ? 'Здравствуй, малыш!' :
    (age < 18) ? 'Привет!' :
    (age < 100) ? 'Здравствуйте!' :
    'Какой необычный возраст!';

/*   2 Основы ввода данных(update 2021 - 05 - 12)
      3 Оператор If, else, switch case 
      4 Работаем с формами: input, range, textarea
      5 Циклы в JavaScript(часть 1)
      6 Вложенные циклы в JavaScript(часть 2)
      7 Функции и все о них
      8 Цикл While, Do While
      9 Работаем с DOM
      10 Массивы в JavaScript
      11 Добавление и удаление элементов в массиве, pop, push, splice
      12 Двумерные массивы
      13 Ассоциативный массив(объект) в JavaScript +
      14 Практика по массивам - получаем прогноз погоды по API +
      15 Set в JavaScript
      16 Перебор массивов: for, for in, for of 
      17 Методы массивов: map, filter(часть 1) 
      18 Методы массивов: join, split, forEach(часть 2)
      19 События мыши в JavaScript
      20 События клавиатуры в JavaScript
      21 Краткий обзор touch событий
      22 Обрабатываем ошибки с помощью Try Catch
      23 LocalStorage.Сохраняем все +
      24 Немного теории - работа с POST, GET запросами +
      25 AJAX - асинхронный JavaScript +
      26 Учим FETCH на практике
      27 Работаем с промисами(Promise) +
      28 ООП в ES6
      29 Бонусы - замыкания +
      30 Бонус - Рекурсия
      */

//урок 2,3==========================================================================================================================================================
document.getElementById('out').innerHTML = 2019; //обрашение к id элементу <div id="out">
document.querySelector('#one').innerHTML = 777; // обрашение к id элементу <div id="out">
// выделить и контер слэш нажать, это закоментировать
// else if позволяет создать еще одно условие
switch (num) {
    case 15:
        console.log('Еще год потерпи!');
        break;
    case 16:
        console.log('Урраааа можно!!!');
        break;
    default:
        console.log('oooook');
}
// случайное число из массиваlet a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {
    let min = 0;
    let max = a8.length - 1;
    let q = Math.floor(Math.random() * (max - min + 1)) + min;
    document.querySelector('.div-8').style.background = a8[q];
}

// урок 4 Работаем с формами: input, range, textarea, checkbox============================================
document.querySelector('#btn-1').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('Нажат');
    } else {
        console.log('Не Нажат');
    }
}

document.querySelector('#btn-2').onclick = (event) => {
        event.preventDefault(); // останавливает перезагрузку формы, страницы
        // let text = document.querySelector('#two');
        // console.log(text.value);
        // text.value = 'one';
        let form = document.querySelector('form');
        console.log(form);
        console.log(form.elements.two.value);
        console.log(form.elements.three.value);


    }
    // урок 5 ЦИКЛЫ В JAVASCRIPT =======================================================================================
document.querySelector('button').onclick = () => {
        let r = document.querySelectorAll('input[type="radio"]');
        console.log(r);
        for (let i = 0; i < r.length; i++) {
            if (r[i].checked) {
                console.log(r[i].value);
            }
        }
    }
    //  Task 4  Кнопка .b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида: 77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
    // от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.
let div4 = document.querySelector('.out-4');

function t4() {
    let out4 = "";
    for (let i = 77; i > 34; i -= 3) {
        out4 += i + "_";
    }
    div4.innerHTML = out4;
}
document.querySelector('.b-4').onclick = t4;
// урок 6 ВЛОЖЕННЫЕ ЦИКЛЫ ==================================================================================================
let out = document.querySelector('.out');
console.log(out);
for (let i = 1; i < 10; i++) {
    for (let k = 1; k < 10; k++) {
        out.innerHTML += `${i}*${k}=${k * i}<br>`;
    }
    out.innerHTML += '<hr>';
}
// *
// **
// ***
// ****
let out7 = document.querySelector('.out-7');

function t7() {
    let out = '';
    for (let i = 1; i < 5; i++) {
        for (let k = 1; k < i + 1; k++) {
            out += '*';
        }
        out += '<br>';
    }
    out7.innerHTML = out;
}

// сортировка массива пузырьковым методом, от меньшего к большему---------------
let m = [1, 2, 3, 4, 10, 6, 7, 8, 9, 5, -25];

function f18() {
    for (let n = 0; n < m.length; n++) {
        for (let j = 0; j < m.length - 1; j++)
            if (m[j] > m[j + 1]) {
                [m[j], m[j + 1]] = [m[j + 1], m[j]];
                /*let max = m[j];
                m[j] = m[j + 1];
                m[j + 1] = max;*/
            }
    }
    console.log(m);
}
document.querySelector('.b').onclick = f18;
// UNIT 7. ФУНКЦИИ И ВСЕ О НИХ =========================================================================================
function one() {
    console.log('work');
}
one();
f1.onclick = one;
// Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра.
function t6(a, b) {
    min = Math.ceil(a);
    max = Math.floor(b);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.querySelector('.b-6').onclick = function() {
        document.querySelector('.out-6').textContent = t6(100, 107);
    }
    // Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки. 
function t8(str) {
    return str.trim(); // удаления пробелов
}
// UNIT 9. РАБОТАЕМ С DOM ===================================================================================================================================
const one = document.querySelector('.one');
one.style.width = '150px'; //присвоение стиля элементу
one.style.paddingBottom = '40px';
// console.log(one.style);
one.classList.add('two', 'three'); // add- присвоение и добавление класса
one.appendChild(a) // добавить див
one.classList.remove('three'); // remove-  удаление класса
one.classList.toggle('three'); // toggle- переключатель
one.before(a); // Созданный div добавляется перед другим дивом, а если after то после
one.replaceWith(a); // заменяет существующий див на указанный вами, новый
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
console.log(a);
// UNIT 10. МАССИВЫ В JAVASCRIPT ==============================================================================================================================
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 
let ar12 = ['test', 'west', 'list', 'class', 'best'];

function f12() {
    let c = ar12[0];
    ar12[0] = ar12[ar12.length - 1];
    ar12[ar12.length - 1] = c;
    let out = '';
    for (i = 0; i < ar12.length; i++) {
        out += ar12[i] + ' ';
    }
}
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
let ar13 = ['test', 'west', 'list', 'class', 'best'];

function f13() {
    let out = '';
    for (i = 0; i < ar13.length; i++) {
        out += `${ar13.indexOf(ar13[i])} ${ar13[i]} `;
    }
}
// Используя цикл выведите на страницу массив ar14 в обратном порядке.
let d13 = [6, 0, 22, 1, 4, 76];

function f13() {
    let c = [];
    for (i = d13.length - 1; i >= 0; i--) {
        c.push(d13[i]);

    }
    d13 = c;
} //function solution(str){
//    return str.split('').reverse().join('');

// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
let ar18 = [15, 24, 13, 78, 21, 4, 45, 67, ];

function f18() {
    let max = '';
    let a = ar18[0];
    for (let i = 0; i < ar18.length; i++) {
        if (ar18[i] > a) {
            max = ar18[i];
        }
    }
}
// минимал элемент массива

function f19() {
    let ar18 = [78, 8, 56, 232, 12, 22, 555];
    let min = ar18[0];
    for (let i = 0; i < ar18.length; i++) {
        if (ar18[i] < min) {
            min = ar18[i];

        }
    }
    console.log(min); //  аналог ==     return Math.min(...args)
}
// Выведите в .out-19 индекс минимального элемента в массиве ar19
let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];

function f19() {
    let min = ar19[0];
    for (i = 0; i < ar19.length; i++) {
        if (ar19[i] < min)
            min = ar19[i];
    }
}
// Выведите в .out-20 сумму элементов в массиве ar20
let ar20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {
    let sum = 0; // ЕСЛИ SUM = 0; ВЫВЕДЕТ СУММУ, ЕСЛИ SUM = ''; ВЫВЕДИТ ПОСЛЕДОВАТЕЛЬНЫЙ РЯД ЗНАЧЕНИЙ...
    for (i = 0; i < ar20.length; i++) {
        sum += ar20[i];
    }
}
// d1.pop(); удаляет последний элемент массива
// d1.shift(); удаляет первый элемсент массива
//  d1.unshift(); добавляет элемент в начало массива
// метода array.indexOf(element); ищет в массиве есть ли такой элемент и если есть то выводит его индекс
//Метод array.includes(elem) определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

// эмулирует работу метода push и добавляет элемент в конец массива
let d6 = ['test', 5, 12];

function f6() {
    let out6 = document.querySelector('.i-6').value;
    d6[d6.length] = +out6;
}
// эмулирует метод pop, т.е. удаляет последний элемент массива
let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
    d7.length = d7.length - 1;
}

// эмулирует работу метода unShift
let d8 = [2, '4', 12, 67, 'hello'];

function f8() {
    let out8 = document.querySelector('.i-8').value;
    let t = [];
    t[0] = out8;
    for (let i = 0; i < d8.length; i++) {
        t.push(d8[i]);
    }
    d8 = t;
}
// эмулирует работу метода shift
let d9 = [100, 200, 300, 400, 700, 121];

function f9() {
    let t = [];
    for (let i = 1; i < d8.length + 1; i++) {
        t.push(d9[i]);
    }
    d9 = t;
}
// эмулирует метод reverse
let d10 = [3, 14, 15, 92, 6];

function f10() {
    let t = [];
    for (i = d10.length - 1; i >= 0; i--) {
        t.push(d10[i]);
    }
    d10 = t;
}
// эмулирует работу метода indexOf
let d12 = [6, 62, 60, 70, 1, 5];

function f12() {
    let rez = -1;
    let n = +document.querySelector('.i-12').value;
    for (i = 0; i < d12.length; i++) {
        if (d12[i] == n) {
            rez = i;
            break;
        }
    }
}
// Напишите функцию, которая получает i-14, переводит в число, а потом заполняет массив d14 так, что количество элементов равно 
// введенному числу, и каждый элемент равен 1. Т.е. пользователь ввел 5, массив будет [1,1,1,1,1]
let out14 = document.querySelector('.out-14');
let d14 = [];

function f14() {
    let a = [];
    let int14 = +document.querySelector('.i-14').value;
    for (let i = 0; i < int14; i++) {
        a.push(1);
    }
    d14 = a;
}
// Напишите функцию f15, которая вначале проверяет, есть ли элемент из i-15 в массиве d15  (переводим в число), а потом - если нет - 
// добавляет его в массив.
let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
    let int15 = +document.querySelector('.i-15').value;
    let res = true;
    for (i = 0; i < d15.length; i++) {
        if (d15[i] === int15) {
            res = false;
            break;
        }
    }
    if (res) d15.push(int15);
}
// Даны два массива d161 и d162 - используя метод concat - добавьте в массив d16 результат применения concat между массивом d161 и d162.
let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87];

function f16() {
    d16 = d161.concat(d162);
}
// Напишите функцию f17, которая эмулирует работу метода concat
let d17 = [];
let d171 = ['a', 'b', 'c', 'd'];
let d172 = [1, 2, 3, 4, 5];

function f17() {
    d17 = [];
    for (let i = 0; i < d171.length; i++) {
        d17.push(d171[i]);
    }
    for (let i = 0; i < d172.length; i++) {
        d17.push(d172[i]);
    }
}
// Напишите фукнцию f19, которая выводит самую длинную строку maxString
let d19 = ['Your', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every'];
let maxString = '';

function f19() {
    let s = d19[0];
    for (let i = 0; i < d19.length; i++) {
        if (d19[i].length > s.length) {
            s = d19[i];
        }
    }
}
// применяет к массиву d20 метод join с параметрами и соединяет элементы массива в одну строку. вывод: 45678910
let d20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {
    out20.innerHTML = d20.join('');
}
// UNIT 12. ДВУМЕРНЫЕ МАССИВЫ==============================================================================================================================
//  произвидение всеъ чисел массива

multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];

        }

    }
    return product;
}


// выводим весь массив 123456789
let b = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
for (let i = 0; i < b.length; i++) {
    for (let k = 0; k < b[i].length; k++) {
        out += b[i][k];
    }
    out += '<br>';
}
// нажимая кнопку передвигайте 1 еденицу.
let d = [1, 0, 0, 0, 0];
document.querySelector('.out2').innerHTML = d;
let k = 0;
document.querySelector('button').onclick = () => {
        if (k + 1 < 5) { // if не обязателен...
            d[k] = 0;
            d[k + 1] = 1;
            k++;
        }
        document.querySelector('.out2').innerHTML = d;
    }
    // Функция должна вывести в out-7 четные значения из массива a7.
function f7() {
    let out = '';
    let a7 = [
        [1, 2, 3, 9],
        [3, 4, 7],
        [5, 6, 8, 32],
        [21, 34, 43],
        [44, 56]
    ];
    for (let i = 0; i < a7.length; i++) {
        for (let k = 0; k < a7[i].length; k++) {
            if (a7[i][k] % 2 == 0) out += a7[i][k] + ' ';
        }
    }
    document.querySelector('.out-7').innerHTML = out;
}
// Функция должна вывести в out-11 значения из массива a11, причем каждый вложенный массив должен идти в обратном порядке.
let a11 = [
    [4, 5, 6],
    [7, 8],
    [9, 10, 11, 12, 13]
];

function f11() {
    let out = '';
    for (i = 0; i < a11.length; i++) {
        for (k = a11[i].length - 1; k >= 0; k--) out += a11[i][k] + ' ';
    }
}
// Функция должна присвоить переменной a13 массив эмулирующий шахматную доску.
let a13 = [];

function f13() {
    let p = 0;
    for (let i = 0; i < 8; i++) {
        let t = []; // сюда складываем вложенный массив
        for (let k = 0; k < 8; k++) {
            if (p % 2 === 0) {
                t.push(1);
            } else {
                t.push(0);
            }
            p++;
        }
        a13.push(t)
        p++;
    }
}
// Функция должна вывести в out-14 длины вложенных в a14 массивов
let a14 = [
    [],
    [1, 0],
    [1, 0, 0, 0],
    [3, 4, 5, 6, 7, 8],
    [1, 2]
];

function f14() {
    let out = '';
    for (let i = 0; i < a14.length; i++) {
        out += a14[i].length + ' ';
    }
}
// При нажатии b-15 выполняете функцию f15. Функция должна вывести в out-15 длину самого большого вложенного массива в a15
let a15 = [
    [],
    [1, 0],
    [1, 0, 0, 0],
    [3, 4, 5, 6, 7, 8],
    [1, 2]
];

function f15() {
    let out = '';
    let max = a15[0];
    for (let i = 0; i < a15.length; i++) {

        if (max.length < a15[i].length) {
            max = a15[i];
        }

    }
    document.querySelector('.out-15').innerHTML = max.length;
}
// работа с индексами
let a20 = [0, [0, [0, 9]],
    [0, 0, 18], 12

];
console.group('Task 20 ================');
console.log(a20[1][1][1] == 9);
console.log(a20[2][2] == 18);
console.log(a20[3] == 12);
console.groupEnd();
// UNIT 13. АССОЦИАТИВНЫЙ МАССИВ=============================================================================================================
const a = {
    "a": 5,
    "b": 'Hello',
    "z2": 'Hi',
    y43: 1999,
    'villa de': 3040,
};
a.yyyy = 555;
a.b = 'uuu'; // присвоить ключу b новое значение uuu
delete a.a; // удалить ключ а
let k2 = 'y43'; // переменной(к2) присваиваем значение ключа у43...
let out2 = '';
for (let key in a) {
    out += key + ' --- ' + a[key] + '<br> '; // key ключ' a[key] значение ключа
}
// Функция f4 жестко привязана к массиву a4. Это не удобно. Давайте напишем функцию f5, которая принимает массив как параметр и выводит
//  его в формате указанном в функции в указанный блок (как второй параметр).
function f5(arr, block) {
    let out = '';
    for (let key in arr) {
        out += `${key} : ${arr[key]} <br>`;
    }
    document.querySelector(block).innerHTML = out;
}
document.querySelector('.b-5').onclick = () => {
        let a5 = {
            "one": 1,
            "two": 2
        }
        f5(a5, '.out-5');
    }
    //  Функция должна получать из i-7 ключ. Если такой ключ есть в a7 то выводить 1 в out-7, если нет - 0.

let a7 = {
    "b": 17,
    "e": 22
};

function f7() {
    let out = '';
    let key = document.querySelector('.i-7').value;
    if (a7[key] !== undefined) {
        out = '1';
    } else {
        out = '0';
    }
}
// Давайте напишем полезную функцию f10, которая проверяет есть ли значение в ассоциативном массиве. Фукнция должна возвращать true если
//  есть, и false если нет. Массив и значение передавать функции в качестве параметров.

function f10(arr, val) {
    for (let key in arr) {
        if (arr[key] == val) {
            return true;
        }
    }
    return false;
}
document.querySelector('.b-10').onclick = () => {
    let a10 = {
        "k": 22,
        "d": 54,
        "m": 22,
    }
    document.querySelector('.out-10').innerHTML = f10(a10, 54);
};
// Функция должна в out-13 выводить сумму значений массива a13 (только числа)
let a1 = {
    'prim': 'hello',
    'one': -10,
    'testt': 'vodoley',
    'ivan': 11
};

function f13() {
    let sum = 0;
    for (let key in a1) {
        if (typeof a1[key] === 'number') {
            sum += a1[key];
        }
        document.querySelector('.out-13').innerHTML = sum;
    }
}
// в out-14 выводить нулевые (по индексу)  элементы вложенных массивов в a14. 
let a2 = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f14() {
    let out = '';
    for (let key in a2) {
        out += a2[key][0] + ' ';
    }
    document.querySelector('.out-14').innerHTML = out;
}
// Функция должна в out-17 выводить элементы name вложенных массивов в a17 для который age > 30.
let a17 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f17() {
    let out = '';
    for (let key in a17) {
        if (a17[key]['age'] > 30) {
            out += a17[key]['name'] + ' ';
        }
    }
}
// в out-19 вывести цвет ветки станции которую пользователь ввел в i-19. 
let a19 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f19() {
    let out = '';
    let x = document.querySelector('.i-19').value.toLowerCase();

    for (let key in a19) {
        for (let i = 0; i < a19[key].length; i++) {
            if (a19[key][i].toLowerCase() == x) {
                out = key;
            }
        }
    }
}
// UNIT 15. SET =============================================================================================================================================
let a = new Set();
a.add(1); // добавить в массив 1
a.clear(); //очистить весь массив
a.delete('Hello'); // удаляет значение из массива
a.size; // выводит кол-во элементов
// проверяем наличие
a.has(2); // true проверяет наличие элемента 2
for (let item of a) {} // работает только этот цикл
let arr = [1, 2, 3, 1, 4, 5, 'hello', 5, 1, 3];
let b1 = new Set(arr); // создает уникальную коллекцию
let bArr = Array.from(b1); // превращает set  в обычный массив

// Функция должна принимать набор set в качестве параметра и выводить его в указанный элемент. 
// Элемент указывается как второй параметр функции f10.
const f10 = (out_set, elem) => {
    let out = '';
    for (let i of out_set) {
        out += i + ' ';
    }
    document.querySelector(elem).innerHTML = out;
}
document.querySelector('.b-10').onclick = () => {
    let a10 = new Set(['4', '5', '6']);
    f10(a10, '.out-10');
};

//  преобразовать строку str13 в массив, причем каждая буква - отдельный элемент массива. Потом создать набор на
// основе массива. Затем, перебирая набор поэлементам, найти сколько раз каждый символ встречается в исходном массиве. Результат - в виде объекта типа
// { символ : количество, символ : количество } вывести в консоль и возвратить.
let str13 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';
const f13 = () => {
    let y = [];
    let x = new Set(str13);
    for (let item of x) {
        let count = 0;
        for (let i = 0; i < str13.length; i++) {
            if (item === str13[i]) count++;
        }
        y[item] = count;
    }
    return y;
}
document.querySelector('.b-13').onclick = () => {
        console.log(f13());
        // UNIT 16. ПЕРЕБОР МАССИВОВ: FOR, FOR IN, FOR OF ===========================================================================================================
        // Task 5
        // При нажатии .b-5 выполняете функцию f5. Функция должна с помощью for of перебрать массив a5 и возвратить новый массив куда входят элементы из a5 большие 7.
        let a5 = [3, 4, 5, 2, 1, 7, 8, 2, 4, 6, 8, 11, 23, 17];

        function f5() {
            let out = [];
            for (let item of a5) {
                if (item > 7) {
                    out.push(item);
                }
            }
            return out;
        }
        document.querySelector('.b-5').addEventListener('click', () => {
            document.querySelector('.out-5').innerHTML = f5();
        });
        // Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.
        let a6 = [
            [1, 2],
            [3, 4],
            [5, 6]
        ];

        function f6() {
            let out = [];
            for (let item of a6) {
                for (let i = 0; i < item.length; i++) {
                    out.push(item[i]) + ' ';
                }
            }
            a6 = out;
            document.querySelector('.out-6').innerHTML = a6.join(' ');
        }
        document.querySelector('.b-6').addEventListener('click', f6);
        // Функция должна переиндексировать массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные 
        //объекты. Вам необходимо сделать из a7 объект, где ключи - значения id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}. Функция должна возвращать
        // результирующий массив.
        let a7 = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];

        function f7() {
            let out = {};
            for (let i = 0; i < a7.length; i++) {
                let x = a7[i];
                let id = x.id;
                let name = x.name;
                out[id] = name;
            }
            a7 = out;
            return a7;
        }
        document.querySelector('.b-7').addEventListener('click', () => {
            console.log(f7());
        });
        //При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать массив a8. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты.
        // Вам необходимо сделать из a8 массив, который будет содержать только числовые id. Т.е. [23, 45]. Функция должна возвращать результирующий массив.
        let a8 = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];

        function f8() {
            let out = [];
            for (let i = 0; i < a8.length; i++) {
                let x = a8[i];
                let id = x.id;
                out.push(id);
            }
            a8 = out;
            return a8;
        }
        document.querySelector('.b-8').addEventListener('click', () => {
            console.log(f8());
        });
        // Функция должна возвращать в out-9 самый большой индекс из вложенных в a9 массивов. В данном случае это 4. Т.е. самый 
        // большой вложенный массив это [0,0,0,0,0], а в нем самый большой индекс 4.
        let a9 = [
            [4, 3, 2],
            [2, 5, 5, 8, 9, 78],
            [0, 0, 0, 0, 0]
        ];

        function f9() {
            let s = a9[0];
            for (let i = 0; i < a9.length; i++) {
                if (a9[i].length > s.length) {
                    s = a9[i];
                }
            }
            console.log(s);
            return s.length - 1;
        }
        document.querySelector('.b-9').addEventListener('click', () => {
            document.querySelector('.out-9').innerHTML = f9();
        });
        // Функция должна преобразовывать массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"}
        let a10 = [4, 6, 9, 'Hello'];

        function f10() {
            let out = {};
            for (let key in a10) {
                out[a10[key]] = a10[key];
            }
            return out;
        }
        document.querySelector('.b-10').addEventListener('click', () => {
            console.log(f10());
        });
        //При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через
        let a11 = {
            one: 11,
            two: 7,
            three: 13,
            four: 0
        }

        function f11() {
            let out = '';
            for (let key in a11) {
                if (a11[key] > 10) {
                    out += a11[key] + ' ';
                }
            }
            document.querySelector('.out-11').innerHTML = out;
        }
        document.querySelector('.b-11').addEventListener('click', f11);
        // UNIT 17. МЕТОДЫ МАССИВОВ: MAP, FILTER ==============================================================================================================
        // Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.
        // forEach перебирает каждый элемент вместо цикла
        // filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в функции.
        // includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

        // с помощью map переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Возвратите массив  a1_res. */
        let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

        function t1() {
            a1_res = a1.map(elem => {
                return elem * 2;
            });
            return a1_res;
        }
        document.querySelector('.b-1').onclick = () => {
                console.log(t1());
            }
            /*  C помощью map переберите массив a7 и создайте  a7_res, который содержит элементы массива a7 приведенные к нижнему регистру. Функция должна возвращать a7_res. */
        let a_7 = ['Alto`s Adventure', 'Angry Birds 2', 'Anno 2205', 'Assassin`s Creed Chronicles'];

        function t7() {
            a7_res = a_7.map(elem => {
                return elem.toLowerCase();
            });
            return a7_res;
        }
        document.querySelector('.b-7').onclick = () => {
                console.log(t7());
            }
            /*  С помощью forEach, переберите массив a9 и преобразуйте все записи в массиве в нижний регистр. Функция должна возвращать a9. */
        let a_9 = ['Quantum Break', 'Gears of War 4', 'Mass Effect: Andromeda', 'Far Cry Primal'];

        function t9() {
            let t = [];
            a9.forEach(elem => { // forEach перебирает каждый элемент вместо цикла
                let b = elem.toLowerCase();
                t.push(b);
            });
            a_9 = t;
            return a_9;
        }
        document.querySelector('.b-9').onclick = () => {
                console.log(t9());
            }
            /*  С помощью filter, переберите массив a11 и создайте новый массив a11_res куда добавьте только те элементы массива ИНДЕКС которых - четный. Возвратите a11_res.*/
        let a_11 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

        function t11() {
            a11_res = a_11.filter(function(item, index) { // filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в функции.
                if (index % 2 === 0) {
                    return true;
                }
            });
            return a11_res;
        }
        document.querySelector('.b-11').onclick = () => {
                console.log(t11());
            }
            /*  С помощью метода includes функция t14 должна определить, есть ли значение из переменной a14_sym в массиве. 
            Если да - то функция возврaщает true, если нет false. Обратите внимание, функция должна искать независимо от регистра. Т.е. если в a14_sym будет строка 'd' 
            то возвратить true, однако и на строку 'D' тоже возвратить true. */
        let a14 = ['c', 'C', 'd', 'e', 'E'];
        let a14_sym = 'd';

        function t14() {
            let a = a14_sym.toLowerCase()
            if (a14.includes(a14_sym) || a14.includes(a)) {
                return true;
            } else {
                return false;
            }
        }
        document.querySelector('.b-14').onclick = () => {
                console.log(t14());
            }
            /* С помощью метода filter функция t15 должна создать на его основе массив a15_res содержащий записи только тех пользователей, номер паспорта (pnum) 
            которых не пустая строка и длина номера - 6 символов.*/
        let a15 = [{
                "name": "ivanov",
                "pnum": 'tr7862'
            },
            {
                "name": "petrov",
                "pnum": ''
            },
            {
                "name": "sedanov",
                "pnum": 'im7961'
            },
            {
                "name": "dou",
                "pnum": 'tr786259'
            },
        ];

        function t15() {
            a15_res = a15.filter(function(item, index) {
                if (item.pnum.length == 6) {
                    return true;
                }
            });
            return a15_res;
        }
        document.querySelector('.b-15').onclick = () => {
                console.log(t15());
            }
            // UNIT 18. МЕТОДЫ МАССИВОВ: JOIN, SPLIT, FOREACH ======================================================================================================
            // split(); разбивает объект String на массив строк путём разделения строки указанной подстрокой.
            // join() объединяет все элементы массива  в строку

        /*  переберите массив и создайте новый массив a3_res куда добавьте элементы данного массива являющиеся числом. .*/
        function t3() {
            let a3 = [2, 'hello', 3, 'hi', 4, 'Mazai'];
            let out = a3.forEach(elem => {
                if (elem === Number(elem))
                    a3_res.push(elem);
            });
            document.querySelector('.out-3').innerHTML = a3_res;
        }
        document.querySelector('.b-3').onclick = t3;
        /*  На странице созданы 3 p.task-5 c атрибутом data. С помощью forEach переберите их и добавьте событие клик.  и добавлять атрибут data элемента,
         по которому кликнули в массив a5_res.*/
        function t5() {
            a5_res.push(this.getAttribute('data'));
            console.log(a5_res);
        }
        document.querySelectorAll('.task-5').forEach(elem => {
            elem.onclick = t5;
        });
        /*  Дана строка str6='helloworld' - преобразуйте ее в массив и присвойте a6_res. */
        function t6() {
            let str6 = 'helloworld';
            a6_res = str6.split(); // разбивает объект String на массив строк путём разделения строки указанной подстрокой.
            document.querySelector('.out-6').innerHTML = a6_res;
            console.log(a6_res);
        }
        document.querySelector('.b-6').onclick = t6;
        /*  Дан массив a8 = [1,2,66,77,15] - преобразуйте ее в строку. Разделитель - дефис. */
        function t8() {
            let a8 = [1, 2, 66, 77, 15];
            a8_res = a8.join('-'); // join() объединяет все элементы массива в строку
            document.querySelector('.out-8').innerHTML = a8_res;
            console.log(a8_res);
        }
        document.querySelector('.b-8').onclick = t8;

        // UNIT 19. СОБЫТИЯ МЫШИ В JAVASCRIPT ==============================================================================
        document.querySelector('.two').onclick = function() { // одинарныйф клик
            console.log('click2');
        }
        document.querySelector('.two').ondblclick = () => { // двойной клик
            console.log('double');
        }
        document.querySelector('.two').oncontextmenu = () => { // правой кнопкой мышки вывод меню
                console.log('right button');
                return false;
            }
            // let w = 75;
            // document.querySelector('.three').onmousemove = () => {  // при движении внутри объекта мышкой, увеличивается на +75px объект при каждом движении
            //     document.querySelector('.three').style.width = w + 'px';
            //     w++;
            // }
        document.querySelector('.three').onmouseenter = () => { // при наведении мышки на объект, он становится красным
            document.querySelector('.three').style.background = 'red';
            console.log(1);
        }
        document.querySelector('.three').onmouseleave = () => { // при выведении мышки из границ объекта он становится зеленым
            document.querySelector('.three').style.background = 'green';
            console.log(2);
        }
        document.querySelector('.three').onmousedown = () => { // при нажатии и УДЕРЖАНИИ кнопки мыши, объект становится оранжевым
            document.querySelector('.three').style.background = 'orange';
            console.log(2);
        }
        document.querySelector('.three').onmouseup = () => { // при отпускании кнопки мыши на объекте, он становится голубым
            document.querySelector('.three').style.background = 'blue';
            console.log(2);
        }
        let p = 10;
        document.querySelector('button').onclick = function(e) {
                p++;
                document.querySelector('progress').value = p;
            }
            /* Функция должна возвращать и выводить на экран содержимое блока (только текст). */
        let p1 = document.querySelector('.div-1');

        function t1() {
            document.querySelector('.out-1').innerHTML = p1.innerHTML;
            return p1.innerHTML;
        }
        document.querySelector('.div-1').onclick = t1;
        /*  Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. */
        let p2 = document.querySelector('.div-2');

        function t2(event) {
            p2.innerHTML = event.altKey;
            return event.altKey;
        }
        document.querySelector('.div-2').onclick = t2;
        /*  При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. */
        let out3 = document.querySelector('.out-3');
        let w3 = 75;

        function t3() {
            document.querySelector('.div-3').style.width = w3 + 'px';
            w3 += 5;
            out3.innerHTML = w3;
        }
        document.querySelector('.div-3').onclick = t3;
        /*  Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */
        let out5 = document.querySelector('.div-5');

        function t5() {
            out5.classList.toggle('active'); //  Если класс у элемента отсутствует - добавляет, иначе - убирает. 
        }
        document.querySelector('.div-5').ondblclick = t5;
        /*  Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */
        let out8 = document.querySelector('.ch-8');

        function t8() {
            if (out8.checked) {
                document.oncontextmenu = function(event) { return false; }
            } else {
                document.oncontextmenu = null;
            }
        }
        document.querySelector('.ch-8').onchange = t8;
        /*  При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши -mouseleave - возвращайте исходное изображение. */
        function t11() {
            document.querySelector('.div-11 img').src = 'img/2.png';
        }

        function t111() {
            document.querySelector('.div-11 img').src = 'img/1.png';
        }
        document.querySelector('.div-11').onmouseenter = t11;
        document.querySelector('.div-11').onmouseleave = t111;
        /*  при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */
        let out13 = document.querySelector('.div-13');
        out13.onmousedown = () => {
            out13.classList.add('active'); //  add Добавляет элементу указанные классы
        }
        out13.onmouseup = () => {
            out13.classList.remove('active'); // remove удаляет указанные классы
        }

        /*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */
        function t17On() {
            out57.onmousemove = t16;
        }

        function t17Off() {
            out58.onmousemove = function(event) { return false; }
        }
        document.querySelector('.b-17_on').onclick = t17On;
        document.querySelector('.b-17_off').onclick = t17Off;
        /*  Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
        let out18 = document.querySelector('.div-18');

        function t18() {
            out18.innerHTML = document.querySelector('.div-18').offsetWidth; // возвращает ширину элемента. 
        }
        document.querySelector('.div-18').onmouseenter = t18;
        /*  Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
        let out19 = document.querySelector('.div-19');

        function t19() {
            out19.innerHTML = out19.classList; // classList возвращает псевдомассив, содержащий все классы элемента.
        }
        document.querySelector('.div-19').onmouseout = t19;
        /*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
        let p20 = 0;

        function t20() {
            document.querySelector('progress').value = p20;
            p20++;
        }
        document.querySelector('progress').onmousemove = t20;
    }
    // 20.   UNIT 20. СОБЫТИЯ КЛАВИАТУРЫ  ====================================================================================================================
document.querySelector('.i-1').onkeypress = function(event) { // для букв и некоторых вспомогательных клавиш срабатывает при 
    console.log('keypress'); // НАЖАТИИ И ОТПУСКАНИИ клавиши
    console.log('charCode: ' + event.charCode); //q 113 Q 81
    console.log('code: ' + event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: ' + event.keyCode);
}

document.querySelector('.i-1').onkeydown = function(event) { // клавиша нажата но еще не отпущена, допустим нажимая стрелочки работать  
    console.log('keydown'); // будет только это событие
    console.log('charCode: ' + event.charCode); //q 113 Q 81
    console.log('code: ' + event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: ' + event.keyCode);
    if (event.key == 'CapsLock') {
        document.querySelector('.ch-1').checked = true;
    } else {
        document.querySelector('.ch-1').checked = false;
    }
}

document.querySelector('.i-1').onkeyup = function(event) { // срабатывает когда клавишу отпускаешь
    console.log('keyup');
    console.log('charCode: ' + event.charCode); //q 113 Q 81
    console.log('code: ' + event.code);
    console.log('key: ' + event.key);
    console.log('keyCode: ' + event.keyCode);
}

document.querySelector('.i-2').onkeypress = function(event) {
        console.log('keypress');
        console.log('charCode: ' + event.charCode); //q 113 Q 81
        console.log('code: ' + event.code);
        console.log('key: ' + event.key);
        console.log('keyCode: ' + event.keyCode);
        const a = {
            q: 'w',
            w: 'e'
        }
        document.querySelector('.i-2').value += a[event.key];
        return false;
    }
    /* только символы в нижнем регистре. Т.е. ввели ab4Bci в out-4 получаем ab4ci. */
function t4(event) {
    document.querySelector('.out-4').innerHTML += event.key.toLowerCase();
}
/*  только символы в нижнем регистре. */
let string6 = '';

function t6(event) {
    if (event.keyCode > 96 && event.keyCode < 123) {
        string6 = event.key;
        document.querySelector('.i-6').value += string6;
    }
    if (event.keyCode > 47 && event.keyCode < 58) {
        string6 = event.key;
        document.querySelector('.i-6').value += string6;
    }
    return false;
}


document.querySelector('.i-6').onkeypress = t6;

/*  выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
const a8 = ['a', 'z', 'x', 'w', 'y', 't'];

function t7() {
    let min = 0;
    let max = a8.length - 1;
    let q = Math.floor(Math.random() * (max - min + 1)) + min;
    document.querySelector('.out-7').innerHTML += a8[q];
}
document.querySelector('.i-7').onkeydown = t7;

/* количество (число) нажатых клавиш стрелка вниз. */
let out9_1 = 0; // если out9_1  оставить внутри функции, то прибавления не будет!!!!!!!!!!!!!!!!!!!!!!
function t9(event) {
    if (event.keyCode === 40) {
        out9_1++
    }
    document.querySelector('.out-9').innerHTML = out9_1;
}
document.querySelector('.i-9').onkeydown = t9;
/*  Проект. 
1. Изучите верстку клавиатуры.
2. При вводе символа в i-11 ( латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым 
фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится. 
4. Самостоятельно добавьте все цифры и второй ряд клавиш от a до l
5. Самостоятельно добавьте клавишу alt, enter.
*/
const keyboard = document.querySelectorAll('.keyboard');
const s = {
    "Control": "ctrl",
    "Enter": "enter",
    " ": "space",
    "Alt": "alt",
}

function t11(event) {
    let key = event.key;
    console.log(event.key)
    if (s[key] !== undefined) {
        key = s[key];
    }

    for (let i = 0; i < keyboard.length; i++) {
        keyboard[i].classList.remove('active')
    }

    let button = document.querySelector(`.keyboard[data="${key}"]`);
    if (button) button.classList.add('active');

}

document.querySelector('.i-11').onkeydown = t11;
// UNIT 21. КРАТКИЙ ОБЗОР TOUCH СОБЫТИЙ =====================================================================================================================

document.querySelector('.block-1').addEventListener("touchstart", myTouch);
document.querySelector('.block-1').addEventListener("touchend", myTouchEnd);
document.querySelector('.block-2').addEventListener("touchmove", myTouchMove);

function myTouch(event) { // клик мыши
    console.log(event);
    console.log('touch');
    document.querySelector('.out-1').innerHTML = event.touches.length; // кол- во одновременных нажатий пальцами
    document.querySelector('.out-2').innerHTML += 'work ';
}

function myTouchEnd(event) { // нажал и отпустил пальцем
    document.querySelector('.out-2').innerHTML += 'end';
}

function myTouchMove(event) { // нажать и потянуть
    event.preventDefault(); //  что бы блок не сдвигался, плюс в конце события return false;
    console.log(event);
    document.querySelector('.out-2').innerHTML += 'move ';
    return false;
}
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let out22 = document.querySelector('.out-2');
let schet = 0;

function t2(event) {
    schet++;
    out22.innerHTML = schet;
}
document.querySelector('.div-2').addEventListener("touchstart", t2);

/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */
let out3 = document.querySelector('.out-3');

function t3(event) {
    console.log(event);
    let a = event.target;
    if (a.classList.contains('div-3_1')) {
        out3.innerHTML = 1;
    }
    if (a.classList.contains('div-3_2')) {
        out3.innerHTML = 2;
    }
}
document.querySelector('.div-3_1').addEventListener("touchstart", t3);
document.querySelector('.div-3_2').addEventListener("touchstart", t3);

/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */
function t4() {
    document.querySelector('.div-4').ontouchstart = t41;
}

function t41() {
    document.querySelector('.out-4').innerHTML += 'touch';
}
document.querySelector('.b-4').onclick = t4;

/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').innerHTML = 'touchend';
}
document.querySelector('.div-4').ontouchend = t6;
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    document.querySelector('.div-7').style.background = 'red';
}
document.querySelector('.div-7').addEventListener('touchstart', t7);

/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {
    document.querySelector('.out-9').innerHTML = event.touches.length;
}
document.querySelector('.div-9').addEventListener('touchstart', t9);
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let w = 75;

function t10() {
    document.querySelector('.div-10').style.width = w + 'px';
    w++
}
document.querySelector('.div-10').addEventListener('touchmove', t10);

/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным 
классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом 
active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/
let bigImg = document.querySelector('.img-12-max');
const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelectorAll('.next');
next.onclick = nextFunction;

const prev = document.querySelectorAll('.prev');
prev.onclick = prevFunction;

function nextFunction() {
    if (count + 1 < images.length) {
        count++
    } else {
        count = 0;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img');
    }
    images[count].classList.add('active-img');
    bigImg.src = images[count].src
}

function prevFunction() {
    if (count - 1 >= 0) {
        count--;
    } else {
        count = images.length - 1;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img');
    }
    images[count].classList.add('active-img');
    bigImg.src = images[count].src

}

function resetFunction() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img');

    }
    count = 0;
    images[count].classList.add('active-img');
    bigImg.src = images[count].src
}
document.querySelector('.next').addEventListener('touchstart', nextFunction);
document.querySelector('.prev').addEventListener('touchstart', prevFunction);
document.querySelector('.reset').addEventListener('touchend', resetFunction);

// UNIT 22. ОБРАБАТЫВАЕМ ОШИБКИ С ПОМОЩЬЮ TRY CATCH =============================================================================================================

let a = 5;
a = a * 2;
try { // код который возможно ошибочный помещаем сюда
    document.querySelector('.test').innerHTML = a; // !
} catch (err) { // если в коде есть ошибка то сюда выведет то что в коде
    alert('ошибки!!!!');
    console.log(err);
    console.log('1');
} finally { // в любом случае выведет то что в коде
    console.log('программа работает');
}
console.log(a);
t1();

function t1() {
    console.log('hello');
}
// Добавьте try, catch, finnaly так, чтобы в out-5 выводился 0 при ошибки. А в out-5-1 всегда выводилось слово 'finnaly';

function t5() {
    let out5 = document.querySelector('.out-5');
    try {
        let p = document.querySelectorAll('p');
        p.push(3);
    } catch (err) {
        out5.innerHTML = 0;
    } finally {
        document.querySelector('.out-5-1').innerHTML = 'finnaly';
    }
}

document.querySelector('.b-5').onclick = t5;
// UNIT 23. LOCALSTORAGE. СОХРАНЯЕМ ВСЕ=============================================================================================================================

window.addEventListener('storage', function(e) {
    console.log('change');
    document.querySelector('.out').textContent = localStorage.getItem('b1');
});
localStorage.setItem('data', 5); // добавляем в память ключ 'data', значение 5
console.log(localStorage.getItem('data')); // достаем из памяти значения
const a = [3, 4, 5];
localStorage.setItem('a', JSON.stringify(a)); // приводим к string
let b5 = localStorage.getItem('a');
b = JSON.parse(b); // приводим к объекту в число
console.log(b);
console.log(b[1]);
console.log(typeof b); // проверяем каким значением является объект b
const c = {
    hello: 5,
    k: 2,
    4: 'hi'
};
localStorage.setItem('c', JSON.stringify(c));
let d5 = localStorage.getItem('c');
d = JSON.parse(d);
console.log(d);
console.log(typeof b);
let count5 = 0;
document.querySelector('.ls').onclick = () => {
        count++;
        localStorage.setItem('b1', count);
    }
    /* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Запускается ф-я по кнопкуе b-2. */
const a21 = [7, 6, 5]

function t2() {
    localStorage.setItem('a2', JSON.stringify(a2));
}
document.querySelector('.b-2').onclick = t2;
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
    let out = ''; // зависит от того что вы хотите. Если нужно при запуске функции строку создавать заново - то внутри. Если хотите накапливать между запусками 
    // функций - то снаружи.
    let b = localStorage.getItem('a2');
    b = JSON.parse(b);
    for (let i = 0; i < b.length; i++) {
        out += `${i} ${b[i]}<br>`;
    }
    document.querySelector('.out-3').innerHTML = out;
}
document.querySelector('.b-3').onclick = t3;
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

function t5() {
    let out = ''; // 
    let b = localStorage.getItem('a4');
    b = JSON.parse(b);
    for (let key in b) {
        out += `${key} ${b[key]}<br>`;
    }
    document.querySelector('.out-5').innerHTML = out;
}
document.querySelector('.b-5').onclick = t5;
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число 
должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
let a9 = []; // если эту строку поместить в функцию, то работать будет НЕ ПРАВИЛЬНО!!!!

function t7() {
    let int = document.querySelector('.i-7').value;
    a7.push(int);
    console.log(a7);
    localStorage.setItem('a7', JSON.stringify(a7));
}
document.querySelector('.b-7').onclick = t7;
/// UNIT 25. AJAX - АСИНХРОННЫЙ JAVASCRIPT =================================================================================

// XMLHttpRequest это API, для обмена данными между клиентом и сервером, простой способ получения данных по ссылке без перезагрузки страницы.
// Это позволяет обновлять только часть веб-страницы не прерывая пользователя. 
let xhttp = new XMLHttpRequest();
let a = 0;
xhttp.onreadystatechange = function() { // .onreadystatechange эта функция вызывается каждый раз когда изменяется значение, что то происходит
    if (this.readyState == 4 && this.status == 200) { // .readyState отследить изменения значения по кодам. .status статус ответа на 
        // запрос, прошел не прошел или  другие варианты
        myFunction(this.responseText) // возвращает текст ответа от сервера на отправленный запрос.в виде строки или null в случае если 
            // запрос не успешен или ответ ещё не получен.
    }
}
xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1", true); // позволяет запустить запрос
xhttp.send();

function myFunction(data) {
    a = data;
    console.log(data);
}
let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction2(this.responseText)
    }
}
xhttp2.open("POST", "http://getpost.itgid.info/index2.php?", true);
xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp2.send('auth=zhrgB3DxC8LoG7Gcilzg&action=1')

function myFunction2(data) {
    console.log('POSt');
    a = data;
    console.log(data);
}
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.  */
function t1() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=1", true);
    xhttp.send();

    function myFunction(data) {
        document.querySelector('.out-1').innerHTML = data;
    }
}
document.querySelector('.b-1').onclick = t1;
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. .*/

function t10() {
    let xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhttp2.open("POST", "http://getpost.itgid.info/index2.php");

    xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp2.send('auth=7859d9d42a8834141d529577207c9596&action=1')

    function myFunction(data) {
        document.querySelector('.out-10').innerHTML = data;
    }
}
document.querySelector('.b-10').onclick = t10;


// UNIT 26. УЧИМ FETCH НА ПРАКТИКЕ ======================================================================================================

fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1')
    .then(data => {
        console.log(data);
        // data.text().then(data2 => {
        //     console.log(data2);
        // })
        return data.text();
    })
    .then(data => {
        console.log(data);
    })

fetch("http://getpost.itgid.info/index2.php", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            //'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=alex', // тип данных в body должен соответвовать значению заголовка "Content-Type"
    })
    .then(response => response.text())
    .then(response => {
        console.log(response);
    })
    /* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. 
    Запускаться функция должна по нажатию b-1. */
    // 7859d9d42a8834141d529577207c9596
function t1() {
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=1')
        .then(data => {
            return data.text();
        })
        .then(data => {
            document.querySelector('.out-1').innerHTML = data;
        })
}
document.querySelector('.b-1').onclick = t1;
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите 
m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате).  */

function t18() {
    fetch("http://getpost.itgid.info/index2.php", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=7859d9d42a8834141d529577207c9596&action=9&m=1&d=1&y=1', // тип данных в body должен соответвовать значению заголовка "Content-Type"
        })
        .then(response => response.text())
        .then(response => {
            document.querySelector('.out-18').innerHTML = response;
        })
}
document.querySelector('.b-18').onclick = t18;
// UNIT 27. РАБОТАЕМ С ПРОМИСАМИ (PROMISE) ==============================================================================================

let a23 = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1')
        .then(data => {
            resolve(data.text());
        })

});

let b23 = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=alex')
        .then(data => {
            resolve(data.text());
        })

});

Promise.all([a23, b23]).then(value => {
    console.log(value);
    console.log(value[0]);
    console.log(value[1]);
});
/*<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. 
*/
//    7859d9d42a8834141d529577207c9596
function t1() {
    let a24 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=1')
            .then(data => {
                resolve(data.text());
            })
    });

    let b24 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=2&name=oleg')
            .then(data => {
                resolve(data.text());
            })
    });

    Promise.all([a24, b24]).then(value => {
        document.querySelector('.out-1').innerHTML = value;
    });
}
document.querySelector('.b-1').onclick = t1;
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    let a25 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php", {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'auth=7859d9d42a8834141d529577207c9596&action=1', // тип данных в body должен соответвовать значению заголовка "Content-Type"
            })
            .then(data => {
                resolve(data.text());
            })
    })
    let b25 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php", {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'auth=7859d9d42a8834141d529577207c9596&action=2&name=oleg', // тип данных в body должен соответвовать значению заголовка "Content-Type"
            })
            .then(data => {
                resolve(data.text());
            })
    })
    Promise.all([a25, b25]).then(value => {
        document.querySelector('.out-5').innerHTML = value;
    });
}
document.querySelector('.b-5').onclick = t5;

// UNIT 28. ООП В ES6 ================================================================================================================

function myAlert(a, c, d) {
    let b = `<p class="${c}">${a}</p>`; // создаем класс в дж без хтмл
    document.querySelector(d).innerHTML = b;
}

myAlert('Hi', 'red', '.test');
myAlert('Hello', 'orange', '.test2');


// class!!!!!!!!!!!!!!!!!!!!!
class Alert { // класс это специальные функции,  пишутся с большой буквы
    constructor(a, c, d) { // конструктор это метод (функция) которая на основании класса запускается объект,
        this.message = a; // свойства .message - имя свойства даем сами
        this.cssClass = c; //  свойства
        this.out = d; //  свойства класса
    }
    showAlert() { // метод который выполняется при вызове класса
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
    }
    myAlert() {
        alert(this.message);
    }
}
class Alert2 extends Alert { // создание класса алерт2 который расширяет (увеличивает) с помощью команды extends возможности класса алерт
    constructor(a, c, d, icon) {
        super(a, c, d); //  super- вызов конструктора родительского класса, по сути краткий повтор свойств конструктора
        this.icon = icon; // new proper
    }
    showIconAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}"><i class="material-icons">${this.icon}</i> ${this.message}</p>`;
    }
    myAlert() {
        alert('hi!!!' + this.message);
    }
}

let m4 = new Alert('My message', 'red', '.test');
console.log(m4);
m.showAlert(); // m -имя объекта. .showAlert- имя метода

let m2 = new Alert2('My message', 'red', '.test', 'account_balance');
m2.showIconAlert();
m2.myAlert(this.message);

// рекурсия=============================================
// умножьте первые nэлементы массива, чтобы создать произведение этих элементов. Используя forцикл, вы могли бы сделать это:

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}
// аналог без цикла рекурсия
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

//Напишите рекурсивную функцию, sum(arr, n), которая возвращает сумму первых nэлементов массива arr.
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

// дополнить курс на работе этим ===============================================================================================================>>>>
function findGreaterOrEqual(a, b) {
    if (a === b) {
        return "a and b are equal";
    } else if (a > b) {
        return "a is greater";
    } else {
        return "b is greater";
    }
} // аналог
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
const myFunc1 = () => {
        const myVar = "value";
        return myVar;
    } // analog
const myFunc = () => "value";
//------------------------------
const doubler = (item) => item * 2;
//analog const doubler = item => item * 2;
//---------------------------------analog
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);