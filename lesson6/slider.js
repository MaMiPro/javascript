let slider = {
    init: function (id) {
        this.elem = document.getElementById(id);

    },

    add: function (image, alt) {
        let li = document.createElement("li"); // создали ЛИ
        let img = document.createElement("img"); // создали ИМГ
        img.setAttribute("src", image);
        img.setAttribute("alt", alt);
        li.appendChild(img);
        this.elem.appendChild(li);


    },

    start: function () {

    }


};