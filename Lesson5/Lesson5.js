
 (function () {
   /* `use strict`;
    // объекты как ассоциативные массивы
    let obj = {};

    // что бы добавить элементы в объект есть два способа
    // литеральный:
    let articleArr = [1, "фотография", "описание статьи"];
    let article = {
        id: 1,
        title: "фотография",
        description: "описание статьи",
        author: "Peter",
        //date: null,
    };
    console.log(article);


    //доступ к свойству объекта
    // имя оъекта.имя свойстава
    console.log(article.title); // фотография
    console.log(article["title"]); // фотография


    //доступ к несуществующему объекту
    console.log(article.date);


    //изменить значение свойства
    article.title = "Путешестивя";
    console.log(article);


    //добавить нове свойство
    article.date = new Date().toDateString();
    console.log(article);


    //проверка на наличие свойств в объекте
    //1вариант:
    if (article.img === undefined){
        console.log("В объекте нет свойств img");
    }

    //2 вариант:
    if ("img" in article){
        console.log("В объекте есть свойства img");
    }

    //3 вариант:
    console.log(article.hasOwnProperty("img"));



    //доступ к свойству объекта через переменную
    let propName = `title`;
    article[propName] = " Автомобили";


    let imgProp = "img";
    article[imgProp] = "car.png";
    console.log(article);



    // перебор объекта
    for (let propName in article) {
        console.log(propName, article[propName]);

    }

    let arr = [45, 67, 89];
    console.log(arr);
    for (let ind in arr) {
        console.log(ind, arr[ind]);
    }

    console.log(Object.keys(arr));
    console.log(Object.getOwnPropertyNames(arr));



    let articles = [
        {
            id: 1,
            title: "JS",
            description: "Описание",
            author: "Mike"
        },
        {
            id: 2,
            title: "PHP",
            description: "Описание",
            author: "Mike"
        },
        {
            id: 3,
            title: "HTML",
            description: "Описание",
            author: "Alex"
        },
        {
            id: 4,
            title: "Базы Данных",
            description: "Описание",
            author: "Peter",
            //метод объекта
            logInfo: function () {
                console.log(`Article: ${id}, ${title}, автора ${author}`);
            }
        }
    ];
    //доступ к методам объекта
    // вызов метода logInfo объекта Article
    article.logInfo = function(){
        console.log(this);
    };


    //добавить метод объекту
    article.logInfo(this);*/


  /*  function perebor(arr, propName, propValue) {
        let resArr = [];
        for (let i = 0; i <  arr.length; i++) {
            if (arr[i] ["id"] === propValue) {
                resArr.push(arr[i]);
            }
        }
            console.log(resArr);
            return resArr;

    }
    perebor('', "id",4);
    perebor('',"author", "Mike");
    perebor('',"img", "pic.png");
    perebor('',"autor", "Mark");
*/


//деструктуризация es6
   /* let userData = ["qwe", "23A434DF", 56, "Peter"];

    let  [login, pwd, age, name] = userData;
    let login =userData[0];
    let pwd =userData[1];
    let age =userData[2];
    let name =userData[3];*/







}());
