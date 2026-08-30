/*var degree = prompt("Enter your degree (0-100):");

if (degree === null || degree === "") {
    alert("Please enter your degree");
}
else if (degree > 100) {
    alert("Invalid degree");
}
else if (degree > 90) {
    alert("Excellent");
}
else if (degree > 80) {
    alert("Very good");
}
else if (degree > 70) {
    alert("Good");
}
else {
    alert("Failed");
}


for (var i = 1; i <= 10; i++) {

    if (i == 3) {
        continue;
    }

    if (i == 9) {
        break;
    }

    console.log(i);
}



var start = 1;
var end = 10;
var skip = 3;
var stop = 8;

function check() {

    if (
        start !== undefined &&
        end !== undefined &&
        skip !== undefined &&
        stop !== undefined
    ) {

        for (var i = start; i <= end; i++) {

            if (i === skip) {
                continue;
            }

            if (i === stop) {
                break;
            }

            console.log(i);
        }

    } else {
        alert("invalid values try again");
    }
}

check();*/

function myLoop(start, end, skip, stop) {

    if (
        start !== undefined &&
        end !== undefined &&
        skip !== undefined &&
        stop !== undefined
    ) {

        for (var i = start; i <= end; i++) {

            if (i === skip) {
                continue;
            }

            if (i === stop) {
                break;
            }

            console.log(i);
        }

    } else {
        alert("Please enter all numbers");
    }
}

myLoop(1, 10, 3, 8);
myLoop(1, 5)