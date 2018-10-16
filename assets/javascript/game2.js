// Initialize global variables
//declare variable for power-thanos
var powThanos;
var powUser = 0;
var wins = 0;
var losses = 0;

//onclick listener
$(".crystals").click(function() {

    //adds value to the crystals
    var crystalValue = $(this).val();

    //adds up user power for every crystal clicked on the click function
    powUser = parseInt(crystalValue) + powUser;

    //adding user power text to HTML
    $("#power-user").text(powUser);

    //check Win/Lose
    if (powUser > powThanos) {
        alert("sorry you lost");
        console.log("you lost");
        losses++;
        $("#losses").text(losses);
        var image = $(".thanos");
        image.fadeOut( 500, function () {
            image.attr({src: 'assets/images/spidey.jpg', height: 320, padding: 10});
            image.fadeIn(1000);
        });
        image.fadeIn( 4000 , function() {
            image.attr('src', 'assets/images/thanos2.jpg');
            image.fadeIn('fast');
        });
        
        reset();
    
        
    } else if (powUser === powThanos) {
        alert("you won!");
        console.log("you won");
        wins++;
        $("#wins").text(wins);
        reset();
    }
});

//set power-thanos to a number between 19-120
function randomThanos() {
    // Math.floor(Math.random() * (max - min + 1)) + min;
        powThanos = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#power-thanos").text(powThanos);
        console.log(powThanos);
}

//generate random number to the crystals
function crystalPower() {
    $(".crystals").each(function(){
        crystalValue = Math.floor(Math.random() * 12 + 1);
        $(this).val(crystalValue);
    }); 
}

//specify a function to start the game
function reset() {
    
    //generate power for Thanos
    randomThanos();

    //generate random number for crystals
    crystalPower();

    powUser = 0;

    $("#power-user").text(powUser);
}


//start game
reset();














