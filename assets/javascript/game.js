
// Initialize global variables
//declare variable for power-thanos
var powThanos;
var powUser=0;
var wins = 0;
var losses = 0;

// var reset = function() {}
//create function to randomize cyrstals power between 1 - 12
var crystalPower = function () {
    return Math.floor(Math.random() * 12 + 1);
}

//set power-thanos to a number between 19-120
function randomThanos() {
    // Math.floor(Math.random() * (max - min + 1)) + min;
        powThanos = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#power-thanos").text(powThanos);
        console.log(powThanos);
}
    
//declare variable for crustals: orange, red, blue, purple
var orange = crystalPower();
var red = crystalPower();
var blue = crystalPower();
var purple = crystalPower();   



//onclick listener
$("#blue").on("click", function(){
    powUser += blue;
    $("#power-user").text(powUser);
});
$("#purple").on("click", function(){
    powUser += purple;
    $("#power-user").text(powUser);
});
$("#red").on("click", function(){
    powUser += red;
    $("#power-user").text(powUser);
});
$("#orange").on("click", function(){
    powUser += orange;
    $("#power-user").text(powUser);
});


//Start of the game
randomThanos();



//display wins and losses
//Create if statements to compare powThanos and powUser

















