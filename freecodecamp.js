!+кнопка tab = выводит шаблон html страницы!!!!
    // && - и 
    // || или
    // if (i % 2 === 0)
    // Помните, что для того, чтобы начать комментарий, вам нужно использовать,
    <!--а чтобы закончить комментарий, вам нужно использовать-->
    const one = document.querySelector('.one');
//  if (Number.isInteger(x) || x <= 0 || x >= 0) проверка на валидность число ни число....
// второй вариант if (typeof x === 'number')
перевести в число
document.querySelector('.out-17-1').innerHTML = +a;
document.querySelector('.out-17-2').innerHTML = parseInt(a, 10);
document.querySelector('.out-17-3').innerHTML = Number(a);
exp % 1 === 0 проверка на целое число
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
// номер телефона Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), которая возвращает строку этих чисел в виде номера телефона.
//Пример
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
function createPhoneNumber(numbers) {
    var phoneNumber = "(xxx) xxx-xxxx";
    for (var i = 0; i < numbers.length; i++) {
        //regex will only replace first x found
        phoneNumber = phoneNumber.replace('x', numbers[i]);
    }
    return phoneNumber;
}

//повтор символов циклом и аналог одной строкой 
function repeatStr(n, s) {
    let out = '';
    for (let i = 0; i < n; i++) {
        out += s;
    }
    console.log(out);
    return out;
}
document.querySelector('.b').onclick = repeatStr(3, '*');
//аналог
repeatStr = (n, s) => s.repeat(n)
    // аналог 2
function repeatStr(n, s) {
    var myString = '';
    while (n > 0) {
        myString += s;
        n--;
    }
    return myString;
}
//Возвращает массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни
// отрицательным.
function countPositivesSumNegatives(t) {
    let col = [];
    let sum = 0;
    let out = [];
    for (let i = 0; i < t.length; i++) {
        if (t[i] > 0) {
            col.push(t[i]);
        }
        if (t[i] < 0) {
            sum += t[i];
        } else {
            return [];
        }
    }

    let x = col.length;
    out.push(x);
    out.push(sum);
    return out;
}

let a = document.createElement('div'); // createElement- создает элемент div
a.innerHTML = 'Hello!'; //добавляем в созданый выше элемент текст hello
a.classList.add('one'); // добавляем ему класс one
a.onclick = function() {
        alert('hello'); // добавляем событие, во время клика срабатывает
    }
    // есть массив м = [7, 3, 21].умножьте каждый его элемент на 2, и выведите в .out через пробел.
    // Добавить в массив «myObject» фразу «С праздником », заменить значение «Март» на « Марта!». Вывести в консоли фразу
    // «С праздником 8 Марта!» использую данные только с массива.

var myObject = {
    "name": "Поздравление",
    "month": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август"],
    "random array": [5, true, { year: 2018, number: 8 }, 12, 25.4],
    "year array": [2017, 2018]
};
//ответ myObject.praz = "С праздником";
// myObject.month[2] = "Марта!";
document.write(myObject.praz + " " + myObject["random array"][2].number + " " + myObject.month[2]);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
let m = [7, 3, 21];

function t1() {
    let p = [];
    // операции- изменение значений, структуры, кол-ва элементов.
    for (let i = 0; i < m.length; i++) {
        p[i] = m[i] * 2;
    }
    // вывод массива
    let out = '';
    for (let i = 0; i < m.length; i++) {
        out += p[i] + ' ';
    }
    console.log(p);
}
document.querySelector('.test').appendChild(a); // appendChild- метод для добавления
// Task 18 так правильно?
// При нажатии b-18 выполняете функцию f18. Функция должна в out-18 вывести станции метро из массива a18 той ветки, которую пользователь
//  ввел в i-18. Вывод станций - через пробел. Если ветка не найдена выводите пустую строку.

let a18 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f18() {
    let out = '';
    let x = document.querySelector('.i-18').value;
    if (a18[x] !== undefined) {
        for (let i = 0; i < a18[x].length; i++) {
            out += a18[x][i] + ' ';
        }
    }
    document.querySelector('.out-18').innerHTML = out;
}
document.querySelector('.b-18').onclick = f18;


// При нажатии b-19 выполняете функцию f19. Функция должна в out-19 вывести цвет ветки станции которую пользователь ввел в i-19. 
// Пользователь может вводить текст как с большой, так и с маленькой буквы. Если ветка не найдена - выводите пустую строку.
// Пользователь ввел Lisova - вывод red, ввел Obolon - вывод blue.

let a19 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f19() {
    let out = '';
    let x = document.querySelector('.i-19').value.toLowerCase();

    for (let color in a19) {
        for (let i = 0; i < a19[color].length; i++) {
            if (a19[color][i].toLowerCase() == x) {
                out = color;
            }

        }
    }
    document.querySelector('.out-19').innerHTML = out;
}

document.querySelector('.b-19').onclick = f19;

/ Task 20
// При нажатии b-20 выполняете функцию f20. Функция должна в out-20 вывести название станции которые содержат переход на другую ветку. 
// Такие станции маркируются 2. Вывод через пробел

let a20 = {
    "red": [
        ['Akademmistechko', 1],
        ['Nyvky', 0],
        ['Universytet', 3],
        ['Lisova', 1]
    ],
    "blue": [
        ['Minska', 1],
        ['Obolon', 0],
        ['Pochaina', 2],
        ['Holosiivska', 0]
    ],
    "green": [
        ['Syrets', 1],
        ['Zoloti Vorota', 2],
        ['Klovska', 0],
        ['Vidubichi', 1]
    ],
}

function f20() {
    let out = '';
    for (let key in a20) {
        let branch = a20[key];
        console.log('branch это вложенные массивы');
        console.log(branch);
        console.log('================================');

    }
    document.querySelector('.out-20').innerHTML = out;
}

document.querySelector('.b-20').onclick = f20

function f20() {
    let out = '';
    for (let key in a20) {
        let branch = a20[key];
        // перебираем ветки
        for (let i = 0; i < branch.length; i++) {
            // это массив станций 
            console.log(branch[i]);
            // и обращение
            console.log(branch[i][0]); // обращение к имени станции
            console.log(branch[i][1]); // обращение к типу станции

        }

    }
    document.querySelector('.out-20').innerHTML = out;
}

document.querySelector('.b-20').onclick = f20

// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
let out19 = document.querySelector('.out-19');
let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];

function f19() {
    let min = ar19[0];
    let a = ar19[0];
    for (i = 0; i < ar19.length; i++) {
        if (ar19[i] < min)
            min = ar19[i];
    }
    out19.innerHTML = min;
}
document.querySelector('.b-19').onclick = f19;

// ----------------------сумма элемнтов в массиве----------------------------------------
function squareSum(numbers) {
    return numbers.reduce((sum, num) => sum + num;
    }

    function countSheeps(arr) {
        return arr.filter(Boolean).length;
    }

    // Выведите в .out-20 сумму элементов в массиве ar20
    // Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
    // Вывод - по нажатию кнопки b-20
    // Вывод в out-20
    let out20 = document.querySelector('.out-20');
    let ar20 = [4, 5, 6, 7, 8, 9, 10];
    // ----------------------max в массиве----------------------------------------
    let b = [45, 2, 23, 5];
    let max = b[0];
    for (let i = 0; i < b.length; i++) {
        if (b[i] > max) {
            max = b[i];
        }
    }
    console.log(max);
    добавление нового элемeнtа в конец массива
    let d6 = ['test', 5, 12];

    function f6() {
        let out6 = document.querySelector('.i-6').value;
        d6[d6.length] = +out6;
    }
    // Напишите функцию f8, которая эмулирует работу метода unShift - добавляем значение из i-8 в начало массива d8.
    // Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
    // Вывод - по нажатию кнопки b-8
    // Вывод в out-8
    let d8 = [2, '4', 12, 67, 'hello'];

    function f8() {
        let out8 = document.querySelector('.i-8').value;
        let t = [];
        t[0] = out8;
        for (let i = 0; i < d8.length; i++) {
            t.push(d8[i]);
        }
        d8 = t;
        showArr('.out-8', d8);
    }
    document.querySelector('.b-8').onclick = f8;
    // Task 14
    // Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
    // Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
    // Вывод - по нажатию кнопки b-14
    // Вывод в out-14
    let out14 = document.querySelector('.out-14');

    let ar14 = [1, 2, 3, 'hello', 66];

    function f14() {
        let out = '';
        let a = ar14[ar14.length - 1];
        for (i = ar14.length - 1; i >= 0; i--) {
            out += ar14[i] + ' '
        }
        out14.innerHTML = out;
    }
    document.querySelector('.b-14').onclick = f14;


    function f20() {
        let sum = 0;
        for (i = 0; i < ar20.length; i++) {
            sum = sum + ar20[i];
        }
        out20.innerHTML = sum;
    }
    // Task 13
    //  При нажатии b-13 выполняете функцию f13. Функция должна преобразовать строку str13 в массив, причем каждая буква - отдельный элемент массива. Потом создать набор на
    // основе массива. Затем, перебирая набор поэлементам, найти сколько раз каждый символ встречается в исходном массиве. Результат - в виде объекта типа
    // { символ : количество, символ : количество } вывести в консоль и возвратить.
    // пример результата для строки 'Hello ho'
    // { "H" : 1, 'e' : 1, 'l' : 2, "o" : 2, " ": 1}

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

    // Напишите функцию f10, которая применяет к массиву d10 метод reverse и выводит полученный массив в out-10.
    // Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
    // Вывод - по нажатию кнопки b-10
    // Вывод в out-10

    let d10 = [3, 14, 15, 92, 6];

    function f10() {
        let t = [];
        for (i = d10.length - 1; i >= 0; i--) {
            t.push(d10[i]);
        }
        d10 = t;
        showArr('.out-10', d10);
    }

    document.querySelector('.b-10').onclick = f10;
    document.querySelector('.b-20').onclick = f20;

    // Напишите функцию f12, которая эмулирует работу метода indexOf - ищет введенное число в массиве d12 (перебором). Если числа нет - 
    // выводит -1, если есть - его позицию в массиве.

    let d12 = [6, 62, 60, 70, 1, 5];
    let out12 = document.querySelector('.out-12');

    function f12() {
        let rez = -1;
        let n = +document.querySelector('.i-12').value;
        for (i = 0; i < d12.length; i++) {
            if (d12[i] == n) {
                rez = i;
                break;
            }
        }
        out12.innerHTML = rez;
    }
    document.querySelector('.b-12').onclick = f12;
    // Напишите функцию f13, которая эмулирует работу метода reverse. Т.е. создает новый массив на основе d13 с обратным порядком элементов 
    // и выводит в out-13.
    let d13 = [6, 0, 22, 1, 4, 76];

    function f13() {
        let c = [];
        for (i = d13.length - 1; i >= 0; i--) {
            c.push(d13[i]);
        }
        d13 = c;
        showArr('.out-13', d13);
    }
    document.querySelector('.b-13').onclick = f13;

    // Напишите функцию, которая получает i-14, переводит в число, а потом заполняет массив d14 так, что количество элементов равно 
    // введенному числу, и каждый элемент равен 1. Т.е. пользователь ввел 5, массив будет [1,1,1,1,1]. Выведите массив в out-14.
    let out14 = document.querySelector('.out-14');
    let d14 = [];

    function f14() {
        let a = [];
        let int14 = +document.querySelector('.i-14').value;
        for (let i = 0; i < int14; i++) {
            a.push(1);
        }
        d14 = a;
        showArr('.out-14', d14);
    }
    document.querySelector('.b-14').onclick = f14;

    // Task 15
    // Напишите функцию f15, которая вначале проверяет, есть ли элемент из i-15 в массиве d15  (переводим в число), а потом - если нет - 
    // добавляет его в массив.
    // Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
    // Вывод - по нажатию кнопки b-15
    // Вывод в out-15

    let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    let out15 = document.querySelector('.out-15');

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

        showArr('.out-15', d15);
    }

    document.querySelector('.b-15').onclick = f15;
    // Даны два массива d161 и d162 - используя метод concat - добавьте в массив d16 результат применения concat между массивом d161 и d162.
    let d16 = [];
    let d161 = [5, 6, 7, 8, 9];
    let d162 = [23, 24, 56, 87];

    function f16() {
        d16 = d161.concat(d162);
        showArr('.out-16', d16);
    }

    document.querySelector('.b-16').onclick = f16;

    // Напишите функцию f17, которая эмулирует работу метода concat. Функция должна объедиять массивы d171 и d172 и записывать результат
    // в d17. Для эмуляции используйт цикл.
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
        showArr('.out-17', d17);
    }
    document.querySelector('.b-17').onclick = f17;
    / Task 19
    // Напишите фукнцию f19, которая выводит самую длинную строку maxString из массива d19 в out-19.
    // Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
    // Вывод - по нажатию кнопки b-19
    // Вывод в out-19
    let out19 = document.querySelector('.out-19');

    let d19 = ['Your', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every'];

    function f19() {
        let s = d19[0];
        for (let i = 0; i < d19.length; i++) {
            if (d19[i].length > s.length) {
                s = d19[i];
            }
        }
        out19.innerHTML = s;
    }

    document.querySelector('.b-19').onclick = f19;
    // Task 5
    // При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 четные значения из массива a5. Для перебора используем цикл.
    function f5() {
        let out = '';
        let a5 = [
            [1, 2],
            [3, 4],
            [5, 6],
            [21, 34],
            [44, 56]
        ];
        for (let i = 0; i < a5.length; i++) {
            if (a5[i][0] % 2 == 0) out += a5[i][0] + ' ';
            if (a5[i][1] % 2 == 0) out += a5[i][1] + ' ';
        }
        document.querySelector('.out-5').innerHTML = out;
    }

    document.querySelector('.b-5').onclick = f5;

    // Task 7
    // При нажатии b-7 выполняете функцию f7. Функция должна вывести в out-7 четные значения из массива a7. Как видите, вложенные массивы
    // имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.

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

    document.querySelector('.b-7').onclick = f7;
    // Task 11
    // При нажатии b-11 выполняете функцию f11. Функция должна вывести в out-11 значения из массива a11, причем каждый вложенный массив 
    //должен идти в обратном порядке. Вывод через пробел. Т.е. вы должны получить в out-10 строку вида 6 5 4 8 7 13 12 11 10 9. Решаем 
    // задачу двумя циклами, без reverse.

    let a11 = [
        [4, 5, 6],
        [7, 8],
        [9, 10, 11, 12, 13]
    ];

    function f11() {
        let out = '';
        for (i = 0; i < a11.length; i++) {
            for (k = a11[i].length - 1; k >= 0; k--) {
                out += a11[i][k] + ' ';
            }
        }
        document.querySelector('.out-11').innerHTML = out;
    }

    document.querySelector('.b-11').onclick = f11;
    // Task 13
    // При нажатии b-13 выполняете функцию f13. Функция должна присвоить переменной a13 массив эмулирующий шахматную доску. Причем массив
    // должен создаваться с помощью циклов. Для проверки - выведите массив в консоль.
    // -- -- -- -- - создаем вложенный массив такого вида:  [-----------------
    //   [0, 1, 0, 1, 0, 1, 0, 1],
    //   [1, 0, 1, 0, 1, 0, 1, 0],
    //   [0, 1, 0, 1, 0, 1, 0, 1],
    //   [1, 0, 1, 0, 1, 0, 1, 0],
    //   [0, 1, 0, 1, 0, 1, 0, 1],
    //   [1, 0, 1, 0, 1, 0, 1, 0],
    //   [0, 1, 0, 1, 0, 1, 0, 1],
    //   [1, 0, 1, 0, 1, 0, 1, 0],
    //];
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
        console.log(a13);

    }
    // Task 14
    // При нажатии b-14 выполняете функцию f14. Функция должна в out-14 выводить нулевые (по индексу)  элементы вложенных массивов в a14. 
    // Вывод через пробел.
    // Ожидаемый вывод - 1 3 6 9

    let a14 = {
        'prim': [1, 2, 23],
        'one': [3, 4, 5],
        'testt': [6, 7, 8],
        'ivan': [9, 10]
    };

    function f14() {
        let out = '';
        for (let key in a14) {
            out += a14[key][0];
        }
        document.querySelector('.out-14').innerHTML = out;
    }

    document.querySelector('.b-14').onclick = f14;

    document.querySelector('.b-13').onclick = f13;
    // ------------передвижение 1 без циклов------
    let d = [1, 0, 0, 0, 0];
    document.querySelector('.out2').innerHTML = d;
    let k = 0;
    document.querySelector('button').onclick = () => {
            if (k + 1 < 5) {
                d[k] = 0;
                d[k + 1] = 1;
                k++;
            }
            document.querySelector('.out2').innerHTML = d;
        }
        //-----------------massiv---------------
    var myObject = {
        "name": "Поздравление",
        "month": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август"],
        "random array": [5, true, { year: 2018, number: 8 }, 12, 25.4],
        "year array": [2017, 2018]
    };
    console.log(myObject);
    // Добавить в массив «myObject» фразу «С праздником », заменить значение «Март» на « Марта!». Вывести в консоли фразу 
    // «С праздником 8 Марта!» использую данные только с массива.
    myObject.ima = "С праздником";
    console.log(myObject);
    myObject.month[2] = "Марта!";
    console.log(myObject["ima"] + ' ' + myObject["random array"][2].number + ' ' + myObject["month"]["2"]);

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

        var min = function(list) {
            let min = list[0];
            for (i = 0; i < list.length; i++) {
                if (list[i] < min) {
                    min = list[i];
                    return min;
                }
            }
        }
        Найдите максимальное и минимальное значения списка

        var min = function(list) {
            var mi = Math.min.apply(null, list);
            return mi;
        }

        var max = function(list) {
                var m = Math.max.apply(null, list);
                return m;
            }
            // создать функцию, которая удаляет первый и последний символы строки.
        function removeChar(str) {
            return str.slice(1, -1)
        }
        //метод 2
        function removeChar(str) {
            //You got this!
            var input_str = str;
            var output_str = '';

            for (var i = 1; i < input_str.length - 1; i++) {
                output_str += input_str[i];
            }

            return output_str;
        }
        // сумма двумерного массива
        function arrayPlusArray(arr1, arr2) {
            let out = [];
            for (let i = 0; i < arr1.length; i++) {
                out.push(arr1[i]);
            }
            for (let i = 0; i < arr2.length; i++) {
                out.push(arr2[i]);
            }
            let sum = 0;
            for (i = 0; i < out.length; i++) {
                sum = sum + out[i];
            }
            return sum;
        }
        //второй способ 
        function arrayPlusArray(arr1, arr2) {
            return arr1.concat(arr2).reduce((a, b) => a + b)
        }
        //третий способ
        function arrayPlusArray(arr1, arr2) {
            var suma = 0;
            for (var i = 0; i < arr1.length; i++)
                suma += arr1[i];
            for (var i = 0; i < arr2.length; i++)
                suma += arr2[i];
            return suma;
        }

        function arrayPlusArray(arr1, arr2) {
            let r = 0;
            for (let i = 0; i < arr1.length; i++) {
                r += arr1[i] + arr2[i];
            }
            return r;
        }
        // Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.
        function digitize(n) {
            let str = String(n);
            let arr = [];
            for (let i = str.length - 1; i >= 0; i--) {
                arr.push(Number(str[i]));
            }
            return arr;
        }
        //второй способ
        function digitize(n) {
            return String(n).split('').map(Number).reverse()
        }
        // -------------интересный метод!!!!!!!!!!!-------------------
        function digitize(n) {
            let arr = [];
            do {
                arr.push(n % 10);
                n = Math.floor(n / 10);
            } while (n !== 0)
            return arr;
        }
        //Реализуйте функцию, которая преобразует данное логическое значение в его строковое представление.
        function booleanToString(b) {
            let str = String(b);
            return str;
        }

        function booleanToString(b) {
            return b.toString();
        }
        /* регулярные выражения =========================================================================================================
        "Hello, World!".match(/Hello/); // Здесь первое совпадение вернет ["Hello"], а второе — ["expressions"]
        let ourStr = "Regular expressions"; // Обратите внимание, что синтаксис .match является «противоположным» методу .test
        let ourRegex = /expressions/;
        ourStr.match(ourRegex);
         . - любой одиночный символ
         $ - конец строки  // ^ - начало строки
         [] -любой из них
         /ignorecase/i игнорирует регистр -i
         testStr.match(/Repeat/g) 
         g- найдет все выражения с этим флагом
         /k.l/  . точка замена символа в выражении
         /Например, вы хотите сопоставить bag, big, и bug, но не bog. Для этого вы можете создать регулярное /b[aiu]g/выражение.
         [aiu]Это класс символов , который будет соответствовать только символам a, i, или u.
         /[aeiou]/gi найти все гласные, g- флаг все, i- игнорирует регистр
        Классы символов позволяют вам определить группу символов, которые вы хотите сопоставить, поместив их внутри квадрата ([ и ])
         Существует также опция, которая сопоставляет символы, которые встречаются ноль или более раз - /go*/
        *
        // /^Ricky/ -поиск повтора символов в начале строки ^   а это- /story$/ в конце строки $
        // /\w/- поиск всех букв, а большая W  все КРОМЕ букв и цифр - /\W/
        //   / \d /- все цифры, а заглавная буква все кроме цифр - /\D/
        // \s  - пробелы,  заглавна все кроме пробелов  -\S
        // \b -граница слова
        // квантификация это - {}
        // n{4} - искать символ n подряд 4 раза.  n{4,6} - искать от 4рех до 6 символов n
        // * - от нуля и больше /k*/
        // + - от еденицы и больше
        // ? - либо ноль льбо 1
        // /\d{4}(\s|-)\d{4}/ - любые цифры повторяющиеся 4 раза между ними либо(|) пробел -\s  либо (|) тире - 4444-5552, 4444 2354.
        // /^\+\d\(d{3}\)(\s|-)\d{7}/  - пример телефона +7918-4668300
        // /\w+@\w+\.\w+/  - почта поиск всех букв от еденицы и больше

        /* Имена пользователей могут содержать только буквенно-цифровые символы.Единственные цифры в имени пользователя должны быть в конце. В конце их 
        может быть ноль или больше. Имя пользователя не может начинаться с номера. Буквы имени пользователя могут быть низкимиrcase и прописные буквы.
        Имена пользователей должны быть длиной не менее двух символов. Двухсимвольное имя пользователя может использовать только буквы алфавита в качестве символов.
        /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i 
 ^ - начало ввода
[a-z] - первый символ - буква
[0-9]{2,0} - заканчивается двумя или более числами
| - или
[a-z]+ - имеет одну или несколько букв рядом
\d* - и заканчивается нулем или более чисел
$ - конец ввода
i - игнорировать регистр ввода
        искать пробелы с помощью /\s/g
        Ищите непробельные символы, используя /\S/g 
        Например, чтобы соответствовать только букве a, встречающейся от 3 до 5 раз в строке ah, вашим регулярным выражением будет /a{3,5}h/.
        let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); --true
multipleA.test(A2);  --false

let haStr = "Hazzzzah";   Измените регулярное выражение Regex, чтобы оно соответствовало слову Huzzah, только если оно состоит из четырех или более букв z.
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr) 
    let rainbowRegex= /colou?r/ - буква перед знаком вороса ? не обязательная

    let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); найдет слово silver и заменит его на blue
let a = 'ghhgjkj 2242 jjgg'
let res = a.replace(/[0-5]gi/, '-')  -заменить все цифры от 0 до 5 знаком тире-
---удалить все гласные крому y 
function disemvowel(str) {
  return str.replace(/[aeiou]/gi,'');
}
аналог
const disemvowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let newStr = '';
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i);
    if (vowels.indexOf(char) == -1) {
      newStr += char;
    }
  }
    return newStr;
    
  
}; 
        
        
        
        
        
        */