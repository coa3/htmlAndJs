// !+кнопка tab = выводит шаблон html страницы!!!!
// && - и 
// || или
// if (i % 2 === 0)
// == проверка по значению
// === проверка по значению и типу, строгая проверка
// Помните, что для того, чтобы начать комментарий, вам нужно использовать,
//   <!--а чтобы закончить комментарий, вам нужно использовать-->
//  if (Number.isInteger(x) || x <= 0 || x >= 0) проверка на валидность число ни число....
// второй вариант if (typeof x === 'number')
// перевести в число
document.querySelector('.out-17-1').innerHTML = +a;
document.querySelector('.out-17-2').innerHTML = parseInt(a, 10);
document.querySelector('.out-17-3').innerHTML = Number(a);
// exp % 1 === 0 проверка на целое число

//урок 2,3===========================================================================================
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
// UNIT 9. РАБОТАЕМ С DOM
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
console.log(a);
// UNIT 10. МАССИВЫ В JAVASCRIPT
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
// UNIT 12. ДВУМЕРНЫЕ МАССИВЫ
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
// UNIT 13. АССОЦИАТИВНЫЙ МАССИВ
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
// UNIT 15. SET
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
    }
    // UNIT 16. ПЕРЕБОР МАССИВОВ: FOR, FOR IN, FOR OF
    //Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.
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
//Функция должна переиндексировать массив a8. Сейчас у нас обычный массив, который содержит вложенные объекты.
// Вам необходимо сделать из a8 массив, который будет содержать только числовые id. Т.е. [23, 45].
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
//Функция должна возвращать в out-9 самый большой индекс из вложенных в a9 массивов. 
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