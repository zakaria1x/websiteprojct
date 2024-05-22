   var users = [];
function signup() {

    var firstName = document.getElementById("first").value;
    var lastName = document.getElementById("last").value;
    var username = document.getElementById("username").value;

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;
    var gender = document.getElementById("gender").value;

    var user = {};
    user.FirstName = firstName;
    user.LastName = lastName;
    user.Username = username;
    user.Email = email;
    user.Password = password;
    user.MobileNumber = mobile;
    user.Gender = gender;

    users.push(user.Username, user.Password);

    console.log(users);
}
function showpass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else
        x.type = "password";
}

function signin() {
    var usern = document.getElementById('username').value;
    var passwordv = document.getElementById('password').value;

    for (var i = 0; i < users.length; i++) {
        if (users[i] == usern && users[i] == passwordv) {
            alert("login successful");
            return true;
        }
    }
    
     alert("login failed");
     return false;
       
    }
    