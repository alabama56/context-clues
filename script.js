var friends = ["Bobby", "Billy", "Joey", "Frank", "Fred"];
var city = ["Birmingham", "San Fansisco", "Fargo", "Tokyo", "Paris", "Dallas", "New York", "Boston", "Jacksonville", "Knoxville"];
var weapons = ["Knife", "Pistol", "Rifle", "Fork", "Spork", "Bat", "Pencil", "Hammer", "Mallet", "Rocket", "Num-Chucks", "Fist", "Rock", "Sharpend Stick", "Shoestring", "Piano Wire", "Judy Chop", "Falcon Kick", "Golf Club", "Paperclip"];
var buddyTotal = friends.length;
var weaponTotal = weapons.length;
var cityTotal = city.length;


$(document).ready(function(){
    for(var i = 1; i <= 100; i++){
        var clue = $("<h3 id=" + i + ">Accusation " + i + "</h3>");
        $("body").append(clue);

        

        $(clue).click(text.bind(null, random(friends), random(weapons), random(city)));

        $(clue).click(function(){
            
        });
    }  


      
    
});

$('h3').bind('click', function() { alert("I  accuse " + random(friends) + ", with the " + random(weapons) + " in the city of " + random(city) )});

function text(){
    alert("I  accuse " + one + ", with the " + two + " in the city of " + three );   
}

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}


