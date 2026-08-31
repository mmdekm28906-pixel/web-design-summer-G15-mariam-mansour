var users = []; 

function addUser(){ 
    var name = prompt("enter your name: "); 
    var id = prompt("enter your id: "); 
    var balance = Number(prompt("enter your balance: ")); 
 
    var user = { 
        name: name, 
        id: id, 
        balance: balance 
    }; 

    var foundUser = users.find(function(user) {
        return user.id === id; 
    });

    if (foundUser !== undefined){ 
        alert("id already exist"); 
    } 
    else{ 
        users.push(user); 
        alert("user added successfully"); 
    }
}


function EditUserBalanceByID(){
    var id = prompt("enter your id: ")
    var index = users.findIndex(function(user){
        return user.id === id;
    })
     if (index!== -1){
            var newBalance = prompt("enter new balance: ");
            users[index].balance=newBalance;
            alert("balance updated successfully")
        }
        else{
            alert("user do not exist")
        }
}


function transferBalance(){ 
    var FromID = prompt("enter sender ID"); 
    var ToID = prompt("enter receiver ID"); 
    var amount = Number(prompt("enter amount to transfer: ")); 
     
    var FromIDIndex = users.findIndex(function(user){ 
        return user.id === FromID; 
    });

    var ToIDIndex = users.findIndex(function(user){ 
        return user.id === ToID; 
    });

    if(FromIDIndex !== -1 && ToIDIndex !== -1){ 
        if (users[FromIDIndex].balance >= amount){ 
            users[FromIDIndex].balance -= amount; 
            users[ToIDIndex].balance += amount; 
            alert("transfer successfully"); 
        } 
        else{ 
            alert("insufficient balance"); 
        } 
    } 
    else{ 
        alert("user do not exist"); 
    } 
}



function deleteUserById() {
    var id = prompt("enter your id: ");

    var index = users.findIndex(function(user) {
        return user.id === id;
    });

    if (index !== -1) {
        users.splice(index, 1);
        alert("user deleted successfully");
    }
    else {
        alert("user do not exist");
    }
}
console.table(users);
addUser();
addUser();
addUser();
deleteUserById();
transferBalance();