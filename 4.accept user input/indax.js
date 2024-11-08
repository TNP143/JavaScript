let username;
//username = window.prompt("What's your username?");
//console.log(username);
document.getElementById("submit").onclick = function(){
    username = document.getElementById("text").value
    //console.log(username)
    document.getElementById("h1").textContent = "hello ${username}"
}
