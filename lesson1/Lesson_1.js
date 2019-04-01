// однострочный комментарий

/* многострочный
 * комментарий
 */

// вывод информации в консоль (для отладки)
console.log("Выводимая информация");

// переменные

// объявление переменных
var login;
let pwd;
// константы
const CONST_VALUE = 123;

// присвоим переменным значения
login = "qwe";
pwd = "1234";

// переопределим значение переменной
login = "asd";
pwd = "56Ad56";

console.log(login, pwd);

// let height, width;
// let height;
// let width;

let height = 123, width = 346;

// типы данных
// число - тип number
height = 23.4;
width = 789;

// строки - тип string
let str = "Строка";
let str2 = 'Строка';
str = '"Строка"';
console.log(str);
str = '\'Строка\'';
console.log(str);

// логический - тип boolean
let active = true;
let stopped = false;

console.log(active, stopped);

// значение не известно - null тип
let unknownValue = null;
console.log(unknownValue);

// значение не присвоено undefined
let undefinedVal;
console.log(undefinedVal);

// определить тип данных
console.log(typeof active);

let age = '13 лет';
height = '300.67px';

// преобразование строки в целое число
age = parseInt(age);

// преобразование строки
// в число с плавающей точкой
height = parseFloat(height);

console.log(age);
console.log(typeof age);

console.log(height);
console.log(typeof height);

// арифметические операторы
// + - * / %(взятие остатка от деления)
height = 45;
height = height * 2;
console.log(height);

console.log(3 + 5); // 8
console.log('3' + 5); // 35
console.log(+'3' + 5); // 8
console.log("строка " + "еще строка"); // строка еще строка

console.log(34 / '2'); // 17
console.log(34 * '2'); // 68
console.log(34 - '2'); // 32

console.log(34 / "str"); //NaN

// проверка на NaN - функция isNan()
console.log(isNaN("str")); // true
console.log(isNaN("23")); // false
console.log(isNaN("23er"));  // true
console.log(isNaN(45));  // false
console.log(isNaN(false)); // false
console.log(isNaN(true)); // false

console.log(34 / 0); // Infinity
console.log(-34 / 0); // -Infinity

// взятие остатка
console.log(9 % 2); // 1
console.log(8 % 2); // 0
console.log(348 % 10); // 8


// 64-бит
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// операторы присваивания
// = += -= *= /= %=
let a = 12;
a = a + 10;
console.log(a);
a += 10;
console.log(a);

a = a * 10; // a *= 10;
console.log(a);

a = a / 10; // a /= 10;
console.log(a);

a = a - 10; // a -= 10;
console.log(a);

a = a % 10; // a %= 10;
console.log(a);

// операторы сравнения
// > < >= <=
// ==(равенство) !=(неравенство)
// === (строгое равенство) !== (строгое неравенство)

height = 123;
width = '123';
let num = 500;

login = "asd";
login2 = "fre";

console.log(height > width); // false
console.log(height >= width); // true

console.log(login > login2); // false

console.log(height == width); // true
console.log(height === width); // false

// инкремент (увеличивает значение на 1) ++
// и декремент (уменьшает значение на 1) --
// префиксная форма ++i
num = 2;
console.log(++num); // 3
console.log(num); // 3

// постфиксная форма i++
num = 2;
console.log(num++); // 2
console.log(num); // 3

// чему равен res?
num = 7;
let res = num++ - num++ + num++ - --num; // -1
console.log(res);

// тернарный оператор
height = 23;
width = '65px';

// (условие) ? значение1 : значение2;
/*
проверка условия, если условие true,
оператор вернет значение1, если false -
значение2
*/

// (условие) ? значение1 : (условие) ? значение1 : значение2;

res = (height >= parseInt(width))
    ? "высота больше или равна"
    : "ширина больше";

console.log(res);


// alert("Сообщение");
// document.body.innerHTML = "Сообщение";

let data = prompt("Введите данные");
console.log(data);