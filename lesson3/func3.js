(function () {
// arguments - переменное количество аргументов
    function prinUserInfo() {
// arguments - хранит все аргументы которые передаются в фунцию при вводе
        console.log(arguments);
        console.log(arguments[0])
        for (let i = 0; i < arguments.length; i++) {
            console.log("info: " + arguments[i]);
        }

    }

    prinUserInfo("Mike", "56")


//es6 - опертор spread  ...
    function prinUserInfo2(login, pwd, ...other_args) {
        console.log(login);
        console.log(pwd);
        console.log(other_args);
    }


    prinUserInfo2("Mike", "56", 56, "+79991112233")

    function sum3(a, b, c) {
        return a - b + c;

    }

    let numArr = [2, 3, 5];
    console.log(sum3(...numArr))


// анонимные функции
    let sumNums = function (a, b) {
        return a + b;
    };
    console.log(sumNums(2, 3));


// стрелочныке функции => es6
    let subatraction = (a, b) => a - b;
    console.log(subatraction(1, 1));  // две верхнии функции одинаковые только по разному записаны
    // если функция в одну строчку то rerurn писать не нужно


//
    let fnArr = [1, 2, 3];

    function sqrt(num) {
        return num * num;

    }

    zadachka = (fn, Arr) => {
        let ArrNew = [];
        for (let i = 0; i < Arr.length; i++) {
        ArrNew[i] = fn(Arr[i]);
        }
        return ArrNew;
    }
console.log(zadachka(sqrt,fnArr));



//методы массивов
/*arr = [12, 9, 0, -12, 1, -7]  ;
arr.forEach(function (elem, index, array) {
    //elem = 23;
    array[index] = 89; // достпуп к элементу по индексу
    // элементы можно изменить
    console.log("Элемент " + elem + " с индексом" + index);
});*/


//фильтр для прошедших проверку элементов
    arr = [12, 9, 0, -12, 1, -7]  ;
    //let filterArr = arr.filter(function (elem, index, arrey) {
        //return elem < o;

    //});

    filterArr = arr.filter((elem, index, arrey) => elem <= 0);
    console.log(filterArr);




// создаёт новй массив с результотом вызова указанной функции для каждого элемента
    arr = [12, 9, 0, -12, 1, -7] ;
    let mapArr = arr.map((elem, undex, arrey)=> elem*elem);
    console.log(mapArr);

// метод some проверят, удовлетворяет ли хоть какой нибудь элемент массива уловию функции
    arr = [12, 9, 0, -12, 1, -7]  ;
    let someResult = arr.some((elem, index, arrey)=>elem < 0);
    console.log(someResult);

// метод every, проверят, удовлетворяют ли все элементы массива условию заданному в функции
    arr = [12, 9, 0, -12, 1, -7]  ;
    let someEvery = arr.every((elem, index, arrey)=>elem < 0);
    console.log(someResult);
}() );


