var courses = ["HTML" , "CSS" , "JS" , "Python"];

var userCourse = prompt("enter course name");

var index = courses.findIndex(function(item)
{
    return item == userCourse;

});
if(index != -1){
    alert("found");
}
else{
    courses.push(userCourse);
    alert("course added successfully")
}
console.log(courses)