var friends = ["Bobby", "Billy", "Joey", "Frank", "Fred"];
var city = ["Birmingham", "San Fansisco", "Fargo", "Tokyo", "Paris", "Dallas", "New York", "Boston", "Jacksonville", "Knoxville"];
var weapons = ["Knife", "Pistol", "Rifle", "Fork", "Spork", "Bat", "Pencil", "Hammer", "Mallet", "Rocket", "Num-Chucks", "Fist", "Rock", "Sharpend Stick", "Shoestring", "Piano Wire", "Judy Chop", "Falcon Kick", "Golf Club", "Paperclip"];

$(document).ready(function(){
    for(var i = 1; i <= 100; i++){
        var clue = $("<h3 id=" + i + ">Accusation " + i + "</h3>");
        $("body").append(clue);

        var master = {
            friend: random(friends),
            weapon: random(weapons),
            town: random(city)
        };

        $(clue).click(text.bind(master));

        $(clue).click(function(){  
        });
    }     
});

function text(){
    alert("I  accuse " + this.friend + ", with the " + this.weapon + " in the city of " + this.town );   
}

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}