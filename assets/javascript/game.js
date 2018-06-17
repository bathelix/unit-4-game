//this hides the instructions
$(document).ready(function () {
    
    $("#btnSlideTog").click(function () {
        $("ul").slideToggle();
    });
});

//Game Variables
var ranNum;
var loss = 0;
var win = 0;
var previous = 0;
var counter = 0;
var numberOptions = [10, 5, 3, 7];
var score = score;


// Getting the numbers generated & for loop making the crystals appear on the page, used/modified from example1.	
ranNum = Math.floor(Math.random() * 65) + 23;
$("#numTarget").html(ranNum);



for (var i = 0; i < numberOptions.length; i++) {
   
    var imageCrystal = $("<img>");
    
    imageCrystal.addClass("crystal-image");
    
    imageCrystal.attr("src", "assets/images/jaxcrystal.jpeg");
    
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
   
    $("#crystals").append(imageCrystal);
}

//Game Values 
$(".crystal-image").on("click", function () {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
   
    counter += crystalValue;
    console.log("counter: "+ counter)
   
    $("#score").text(counter);

    if (counter == ranNum) {
        win++;
        $("#win").html("Win:   " + win);
        $(".winner").html("You're the best around, no one ever gonna keep ya down!!!");
    }

    if (counter > ranNum) {
        loss++;
        $("#loss").html("Loss:   " + loss);
        $(".loser").html("You lose! Must have focus!!");
    }
});
