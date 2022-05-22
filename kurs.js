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
let ar14 = [1, 2, 3, 'hello', 66];

function f14() {
    let out = '';
    for (i = ar14.length - 1; i >= 0; i--) {
        out += ar14[i] + ' '
    } //function solution(str){
    //    return str.split('').reverse().join('');
}
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