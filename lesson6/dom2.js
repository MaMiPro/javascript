let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25,
        img: ''
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: ''
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: ''
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50,
        img: ''
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: ''
    }
};



function creatElems(obj) {
    for (let key in obj){
        console.log(obj[key].title);
        let  title = document.createElement("h2")
        title.innerText = obj[key].title;

        console.log(obj[key].img);

        let img = document.createElement("img");
        img.setAttribute("src", "img/" + obj[key].img);

        console.log(obj[key].price);

        let div = document.createElement('div');
        div.appendChild(title);
        div.appendChild(img);

        let goodsDiv = document.createElement('div');
        goodsDiv.appendChild(div);

    }

}
 creatElems(goods);




