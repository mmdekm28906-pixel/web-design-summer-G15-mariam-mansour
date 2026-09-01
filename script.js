var form = document.getElementById("userForm");
var users = document.getElementById("users");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var div = document.createElement("div");

    div.innerHTML = name + "<br>" + email;

    users.appendChild(div);

    form.reset();
});
div.classList.add("user-box");