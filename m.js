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
myLoop(1, 5); 
*/
var courses = ["HTML", "CSS", "javascript", "python"];

var UserCourse = prompt("Enter course name");

if (courses.includes(UserCourse)) {
    alert("Found");
} else {
    courses.push(UserCourse);
    alert(" your Course was added successfully");
}

console.log(courses);
