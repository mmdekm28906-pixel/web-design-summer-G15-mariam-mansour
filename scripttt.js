var users = [
    {name: "Mariam", email: "mariam@gmail.com"},
    {name: "mohamed",email: "mohamed@gmail.com"},
    {name: "farah",email: "farah@gmail.com"}
]


localStorage.setItem("users", JSON.stringify(users));
var data = JSON.parse(localStorage.getItem("users"));
var container = document.getElementById("container");

data.forEach(function(user) {

    var div = document.createElement("div");

    div.innerHTML = 
        "<h2>" + user.name +"</h2>"  +
        "<p>" + user.email  + "</p>";
    

    container.appendChild(div);
});