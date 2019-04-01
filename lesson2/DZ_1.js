//1
let arr = [];

for (let i = 0; i < 1000; i++) {
    arr.push(generateInt(-10, 10))
}

function generateInt(min, max) {
    return Math.floor(Math.random() * (max - min) - min);
}

function find() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i - 1; j < arr.length; j++) {
            let sum = i + j;
            if (sum === 7) {
                console.log("i=" + i + ", j=" + j);
                return true;
            }
        }
    }
}

find();


//2
function printInts() {
    for (let i = 1; i <= 100; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("ThreeFive");
        } else if (i % 3 === 0) {
            console.log("Three");
        } else if (i % 5 === 0)
            console.log("Five");

    }

}

printInts();


//3
