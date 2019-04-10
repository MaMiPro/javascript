var obj = {1:'пн', 2:'вт', 3:'ср', 4:'чт', 5:'пт', 6:'сб', 7:'вс'};
alert(obj[4]);


function date() {
    let d = new Date();
    let  date = d.getDate();
    let month = d.getMonth();
    document.body.innerHTML = date + "."+month;
}
setInterval(date, 1000);