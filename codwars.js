/*Напишите функцию, которая будет проверять, являются ли два заданных символа одним и тем же регистром.
Если какой-либо из символов не является буквой, верните -1
Если оба символа имеют один и тот же регистр, верните 1
Если оба символа являются буквами, но не одним и тем же регистром, верните 0 */
function sameCase(a, b) {
    if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) return -1;
    if (a === a.toUpperCase() && b !== b.toUpperCase()) return 0;
    if (a !== a.toUpperCase() && b === b.toUpperCase()) return 0;
    return 1;
}
/* Учитывая месяц как целое число от 1 до 12, вернитесь, к какому кварталу года он принадлежит как целое число.
Например: месяц 2 (февраль) является частью первого квартала; месяц 6 (июнь) является частью второго квартала; 
и месяц 11 (ноябрь) является частью четвертого квартала.*/
const quarterOf = (month) => {
    if (month <= 3) {
        return 1;
    } else if (month > 3 && month <= 6) {
        return 2;
    } else if (month > 6 && month <= 9) {
        return 3;
    } else return 4;
}

// аналог 
const quarterOf1 = (month) => {
        return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
    }
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
//--------------------------умножении заданного числа на восемь, если оно четное, и на девять в противном случае
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}
//аналог function simpleMultiplication(value){

if (value % 2 === 0) {
    return value * 8
} else {
    return value * 9;
}

//----------------------------- произвидение чисел массива
function grow(x) {
    let out = 1;
    for (let i = 0; i < x.length; i++) {
        out *= x[i];
    }
    return out;
}
// аналог const grow=x=> x.reduce((a,b) => a*b)
//--------камень ножницы бумага
const rps = (p1, p2) => {
    if (p1 == p2)
        return 'Draw!';

    if (p1 == 'rock' && p2 == 'scissors')
        return 'Player 1 won!'
    else if (p1 == 'scissors' && p2 == 'paper')
        return 'Player 1 won!'
    else if (p1 == 'paper' && p2 == 'rock')
        return 'Player 1 won!'
    else
        return 'Player 2 won!';
};
//-----------------------Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
function sumMix(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += +n[i];
    }
    return sum;
} // return x.map(a => +a).reduce((a, b) => a + b);    аналог
let result = 0;
for (let n of x) {
    result += parseInt(n);
}

// return x == w ? x*w : 2*(x + w) если x равно w то  x*w иначе 2*(x + w)
//-- -- -- -- -- -- -- -- -- -- --удалить пробелы из строк

function noSpace(x) {
    return x.split(' ').join('')
}
const str5 = '   Hello World   ';
console.log(str.replace(/ /g, ''));
//--------возвести в квадрат каждую цифру числа и объединить их. Например, если мы запустим 9119 через функцию, получится 811181, потому что 9 2 равно 
// 81, а 1 2 равно 1. Примечание: функция принимает целое число и возвращает целое число
let n2 = 3212;

function f19() {
    let b = n + ''; //преобразуем число в строку "3212"
    let m = Array.from(b) // разбиваем каждый символ в отдельный элемнент и преобразуем в массив ["3","2","1","2"]
    let out = '';
    for (let i = 0; i < m.length; i++) {
        out += m[i] * m[i];
    }
    console.log(+out); // +out преобразует обратно в число
} // аналог return +num.toString().split('').map(i => i*i).join('');
// ------строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число
function highAndLow(numbers) {
    numbers = numbers.split(' '); //азбивает объект String на массив строк путём разделения строки указанной подстрокой ['8', '3', '-5']
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;

}
//---------Ваша задача - вернуть средний символ слова. Если длина слова нечетная, верните средний символ. Если длина слова четная, верните 2 средних символа.
function getMiddle(n) {
    let x = n.length; // 3
    let z = Math.floor(x / 2); // 3/2=1.5 okrug 1 
    if (x == 1) {
        return n[z];
    } else if (x % 2 != 0) {
        return n[z];
    } else {
        return (n[z - 1] + n[z]);
    }
}
//------Учитывая целое число, определите, является ли оно квадратным числом:
function f19(n) {
    if (n < 0) {
        console.log(false);
    } else if (n == 0) {
        console.log(true);

    } else if (n % (Math.sqrt(n)) == 0) {
        console.log(true);

    } else { console.log(false); }
}
// анаог  return Math.sqrt(n) % 1 === 0;
function f19() {
    if (n < 0 && n % (Math.sqrt(n)) != 0) console.log(false);
    else if (n == 0 || n % (Math.sqrt(n)) == 0) console.log(true);
}

function f19() {
    (n < 0 && n % (Math.sqrt(n)) != 0) ?
    console.log(false): console.log(true);
}
//-----любое неотрицательное целое число в качестве аргумента и возвращать его с  цифрами в порядке убывания.
let n3 = 123456789;

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
// аналог return +(n + '').split('').sort(function(a,b){ return b - a }).join(''); //split() разбивает объект String на массив строк
// return +n.toString().split('').sort().reverse().join('');
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
//----------------------------одинаковое количество символов "x" и "o".
let n8 = "ooXx";

function f19() {
    let m = n.toLowerCase().split(''); // ['o', 'o', 'x', 'x']
    let count = 0;
    for (let i = 0; i < m.length; i++) {
        if (m[i] == 'o') count++
            if (m[i] == 'x') count--
    }
    if (count === 0) return true;
    else return false;
} // аналог return str.replace(/o/ig, '').length == str.replace(/x/ig, '').length