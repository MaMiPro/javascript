(function ()  {
    // функции используються для того, что бы выполнять одно и то же действие в разных частях программы

    let  a = 12;
    let  b = 22;

    let res = a + b;

    let n = 34;
    let m = 78;

    let res2 = n + m;


// функции
// bvtyyjdfyst aeyrwbb
//function sum(num1, num2){ // аргументы функции
    //тело фунции
    //  let  res = num1 + num2;
    // return res;

//}

// вызов фунции
// и передачча аргументов
//function greeting2(userName) {
    // if (!userName) {
    //  console.log(sum(a, b));
    //  res = sum(a, b);
    // res2 = sum(n, m);
    // }
//}
//function greeting2() {
    // console.log("Hello" + userName);
    // return;
//}

//greeting() ; //Hello Alex
//greeting(); // Hello Mike
//greeting(); // underfied

//res = sum()



//функция принимает на ввод два числа и возвращает минимальное их них

    function getMin(num1, num2) {
        if (!num1,num2) {
            console.log("Данные не переданны")
            return;
        }

        if (typeof num1 !==`number` && typeof num2 !== `number`){
            console.log("Данные не числа");
            return;
        }

        return(num1 < num2) ? num1 : num2;
    }

    let min = getMin (34, 78);
    console.log("min", min);




    let arr = [3,6,2,8,99];
// for (let i = 0; i <= arr.length; i++);
//     {
//     for (let j = i +1; j < arr.length; j++);
//         {}
//     }


    function sumArr (arr) {
        if (!Array.isArray(arr)) {
            console.log("Not array");
            return;
        }

        let sum = 0;
        for (let i =0; i < arr.length; i++){
            sum = sum + arr[i];
        }
        return sum;

    }

    console.log(sumArr(arr));



    function getArrSum(someArr) {
        if (!Array.isArray(someArr)){
            console.log("не массив");
            return;
        }
        let sum = 0;
        for (let i = 0; i < someArr.length; i++){
            sum += someArr[i];
        }
        return sum; //9
    }

    console.log(getArrSum(arr));



    console.log(window);

    let aVar = "some data";

    function f() {

    }



    function f1() {

    }


}()  );