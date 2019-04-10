//DOM
console.log(document); //весь документ целиком
//console.log(document.body);

let elem = document.getElementById("list");

//для каждого элемента можно получить
console.log(elem.childNodes); // все узлы
console.log(elem.children); // узлы html теги

console.log(elem.firstChild);// первы дочерний узел
console.log(elem.lastChild);// последний дочерний узел

console.log(elem.firstElementChild); //первый дочерний тег
console.log(elem.lastElementChild); // последний дочерний тег

console.log(elem.previousSibling); //предыдущий узел
console.log(elem.nextSibling); // следующий узел

console.log(elem.previousElementSibling); // предыдущий элемент
console.log(elem.nextElementSibling); // следующий элемент

console.log(elem.parentNode); // родительский узел
console.log(elem.parentElement); // родительский узел-тег



// поиск элементов в DOM
// 1 получение элемента по id ( id  должен быть уникальным)
let list = document.getElementById("list");
console.log(list);

// 2 по атрибуту name
let elementByName = document.getElementsByName("data");
console.log(elementByName);

// 3 по имени тега
let liTag = document.getElementsByTagName("11");
console.log(liTag);
console.log(liTag[0]); // длступ к элементу по индексу

// 4 по имени класса
let someClassElem = document.getElementsByClassName("some-class");
console.log(someClassElem);

//5 по css селектору
let ulLi = document.querySelector("ul>li");
console.log(ulLi);

let  queryAll = document.querySelectorAll("input[type=text]");
console.log(queryAll);

// создание элемнотов из js в html
let ul = document.createElement("ul"); // создание елемента
console.log(ul);
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

let text = document.createTextNode("elem"); // создаёт текстовый узел

// работа с атрибутами
console.log(ul.hasAttribute("id")); // проверяет наличии атрибута
ul.setAttribute("id", "js_ul"); // устанавливает атрибут

//получить значени атрибута
console.log(ul.getAttribute("id"));

// атрибут style
ul.style.background = "blue";

//  работа с классами (css)
ul.classList.add("class-name");
ul.classList.remove("class-name");
ul.classList.toggle("class-name");
ul.classList.contains("class-name"); // проверяте наличие класса


// добавление елементов
li1.appendChild(text);
li2.appendChild(document.createTextNode("Elem 2"));
li3.appendChild(document.createTextNode("Elem 3"));


ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

let nav = document.getElementById("nav");
//nav.appendChild(ul);


// innerHtml
// document.body.innerHTML = "<h2>Заголовок</h2>";
//nav.innerHTML = "<ul><li>Elem</li></ul>";
//console.log(nav.innerHTML);

for (let i = 0; i < 3; i++){
    document.body.innerHTML += "<p>Text</p>"
}



let div = document.createElement("div");
div.innerHTML = "<p>Text</p>";

//nav.insertBefore(div, ul);
// elem.replaceChild(new_elem, old_elem); замена элемента



let allTable = document.getElementsByTagName("table");
let table = allTable[0];
table.setAttribute("border", "1");

let caption = table.createCaption();
caption.innerText = "Caption";

let row = table.insertRow(0);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);

cell1.innerText = "Cell 1";
cell2.innerText = "Cell 2";







































