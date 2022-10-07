know = {

    "Hello": "<hr>  Hi there! Which medicine You are lookig for ?<hr>",
    "hello": "<hr>  Hi there! Which medicine You are lookig for ?<hr>",
    "HELLO": "<hr>  Hi there! Which medicine You are lookig for ?<hr>",
    "Who are you?": "<hr> I am MedBuddy's Assistant<hr>",
    "who are you?": "<hr> I am MedBuddy's Assistant<hr>",
    "WHO ARE YOU?": "<hr> I am Medbuddy's Assistant<hr>",
    "How are you?": "<hr> I am Fine<hr>",
    "How old are you?": "<hr> I am infinity in age<hr>",

};

function talk() {
    var user = document.getElementById("userBox").value;
    document.getElementById("userBox").value = "";
    document.getElementById("chatLog").innerHTML += user + "<br>";

    if (user in know) {
        document.getElementById("chatLog").innerHTML += know[user] + " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <br>";
    } else {
        document.getElementById("chatLog").innerHTML += " <hr> Fill The form given Below <hr><br>";
        setTimeout(function(){ 
            var a =document.getElementById("medForm");
            a.style.visibility="visible"; }, 200);
    }
}

        