// codwars
// Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на "0", а любую цифру 5 и выше на "1". Верните результирующую строку.
function fakeBin(x) {
    let ar = [...x]; // преобразуем строку в массив
    let out = '';
    for (i = 0; i < ar.length; i++) {
        if (ar[i] < 5) {
            ar[i] = 0;
            out += ar[i];
        } else {
            ar[i] = 1;
            out += ar[i];
        }
    }
    return out;
} // аналог 
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

function fakeBin(x) {
    let result = '';
    for (let i = 0; i < x.length; i++) {
        x[i] < 5 ? result += 0 : result += 1;
    }
    return result;
}
//------------------------------------------------------------------------------------------------------------------------------------------
// количество гласных в строке
let str = 'aiec';

function f19() {
    let count = 0;
    let ar = [...str];
    let x = new Set(['e', 'a', 'i', 'o', 'u']);
    for (let i = 0; i < ar.length; i++) {
        let a = x.has(ar[i]);
        if (a == true) {
            count++;
        }
    }
    return count;
} // аналог 
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
// еще аналог
function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelsCount = 0;

    // enter your majic here
    for (let i of str) {
        if (vowels.includes(i)) vowelsCount++;
    }

    return vowelsCount;
}
// -----------------------------------------------------------------------------------------------------------------------------------------------
//  удалить все гласные
function disemvowel(str) {
    return str.split(/[aeiou]/i).join('');
}
//В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.
let str2 = [-8, ' **#', 1, 2, 'aasf', 5, 'a', 'b', 0, '15б', '1', '123', 698];

function f19() {
    let out = [];
    for (let i = 0; i < str.length; i++) {
        if (typeof(str[i]) === 'number') { // проверяем на число или так if (Number.isFinite(str[i])) {
            out.push(str[i]);
        }
    }
    return out;
}
document.querySelector('.b').onclick = f19;
// аналог 
const filter_list = l => l.filter(c => typeof c === 'number');
//----------------------------------------------------------------------------------------------------------------------------------------
// вывести длину самого короткого слова
let x = "turns out random test cases a easier than writing out basic ones";

function f19() {
    let str = x.split(" ");
    let min = str[0].length;
    for (let i = 0; i < str.length; i++) {
        if (str[i].length < min) {
            min = str[i].length;
        }
    }
    console.log(min);
} // аналог 
function findShort(s) {
    return Math.min(...s.split(" ").map(s => s.length));
}
//------------------------------------------------------------------------------------------------------------------------------------
/*Ваша задача - написать функциюmaskify, которая преобразует все символы, кроме последних четырех, в '#'. '64607935616' -->      "#######5616"*/
function maskify(x) {
    let out = '';
    let end = x.substring(x.length - 4)
    for (let i = 0; i < x.length - 4; i++) {
        out += '#';
    }
    return out + end;
} // аналог
function maskify(x) {
    x = x.split("");
    for (var i = 0; i < x.length - 4; i++) {
        x[i] = "#";
    }

    x = x.join("");
    return x
} //analog
function maskify(cc) {
    return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4); // '#'.repeat() повторяет символ -# в строке сс от 0 индекса до -4
}
/* const str = 'The quick brown fox jumps over the lazy dog.'; str.slice(4, 19)); output: "quick brown fox"; 
str.slice(-9, -5)); output: "lazy"*/
//--------------------------------------------------------------------------------------------------------------------------------------------
function f19(weight, height) {
    let x = weight / (height * height);
    let out = '';
    if (x <= 18.5) {
        out = "Underweight";
    } else if (x <= 25.0) {
        out = "Normal";
    } else if (x <= 30.0) {
        out = "Overweight";
    } else {
        out = "Obese";
    }
    console.log(out);
    // return out;
} // analog
function bmi(weight, height) {
    var bmi = weight / (height * height);
    return bmi < 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

}
//---------------------------------------------------------------------------------------------------------------------------------------------------
// вывести все слова состоящие из 4х символов
let ar = ["Ryan", "Kieran", "Mark"];

function f19() {
    let out = [];
    for (let i = 0; i < ar.length; i++) {
        if (ar[i].length == 4)
            out.push(ar[i]);
    }
    console.log(out);
} // аналог 
function f19(frend) {
    return frend.filter(n => n.length === 4) // обалдеть как проще!!!!!!!!!!!!!!!!!!!!!!!!!!!1
}
//-------------------------сортировка по возрастанию и сумма наименьших чисел массива
let n = [5, 879, 8, 852, 321, 1];

function f19() {
    n.sort((a, b) => a - b); // в точности такой метод обязателен 
    console.log(n[0] + n[1]);
}
// ---------------------------------- находим уникальное число в массиве
function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i])) return arr[i]
    }
}