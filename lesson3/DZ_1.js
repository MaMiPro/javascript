//1. Написать функцию сравнения двух массивов. Функция принимает на вход два массива,
  //  сравнивает их и возвращает true, если массивы равны и false, если не равны.
//2. Дано натуральное число N. Вычислите сумму его цифр, использую рекурсию (строки, массивы и циклы использовать запрещено).
//3. Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона,
 //   третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
   // Функция возвращает массив, который содержит все числа из него, включая начальное и конечное.
    //Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
//4. Напишите функцию,  которая в зависимости от переданного в нее целочисленного аргумента count,
  //  будет выводить слово «товар» в нужно форме («12 товаров», но «22 товара» и тд).

//1
let a = [1,2,3,4,5],
    b = [2,3,4];

function srv() {
    for (i = a; i = a < b; i++) {
        if (a === b) {
            return true;
        } else if (a !== b) ;
        return false;
    }

}
srv();


function sumFromTo(from, to) {
    if (to === from) return from;
    if (to === from + 1) return from + to;
    return from + to + sumFromTo(from + 1, to - 1);
}

console.log(sumFromTo(1, 55));
console.log(sumFromTo(1, 37));