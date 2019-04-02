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


let someStr = "Строка";
let someArr = [34, 56, 33];


function changeStr(Str) {
    str += "Новая строка";
    
}

function changeArr(Arr) {
    for (let i = 0; i < arr.length; i++){
        arr[i] += 3;
        return;
    }

    }

    changeStr(someStr);
    changeArr(someArr);

    console.log(someStr);
    console.log(someArr);



    // типы данных:
// примитивные типы данных: числа, стрки, булевый тип - передаються по значению

// объекты:  массивы, фунции и тд.  - пердаються по ссылке


    let numVar = 3;
    let numVar2 = numVar

    let arr1 = [1,2,3];
    let arr2 = arr1;

    numVar = 56;
    console.log(numVar,numVar2); // 56 3


    arr1[1] = 22;
    console.log(arr1,arr2); //


let  oldArr = [1,2,3];
let  copyArr = oldArr.slice();


// рекурсия
    // написать функцию, которая будет выводить в консоль числа от 0 до n в обратном порядке

   function printNum(num) {
       let i = num;
       while (i >= 0) {
           console.log(num: num-1);
           i--;
       }

   }

   function printNum(num) {
       console.log(num);
       printNum(num);

   }

   printNum(4)




// arguments - переменное количество аргументов
    function prinUserInfo() {
// arguments - хранит все аргументы которые передаются в фунцию при вводе
        console.log("arguments")
    }

prinUserInfo("Mike", "56")


}()  );










