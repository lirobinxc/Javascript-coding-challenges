var database = [ 
    {
    username: "Robin",
    password: "12345"
    }
];

var newsfeed = [
    {
        username: "Robin",
        timeline: ""
    },
    {
        username: "Bob",
        timeline: ""
    },
    {
        username: "Mia",
        timeline: ""
    }
];

var userNamePrompt = prompt("Enter Username: ");
var passwordPrompt = promot("Enter Password: ");

function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
        console.log("newsfeed");
    } else {
        alert("Sorry, wrong username and/or password.");
    }
};

signIn(userNamePrompt, passwordPrompt);