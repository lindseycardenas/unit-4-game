$(document).ready(function () {

    //make a function that generates a number between 19 and 120
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    $("#randomNumber").text(randomNumber(19, 120));


    //make jewels clickable and generate number 1-12

    $("#j1").on("click", function () {
        console.log(randomNumber(1, 12));
    })

    $("#j2").on("click", function () {
        console.log(randomNumber(1, 12));
    })

    $("#j3").on("click", function () {
        console.log(randomNumber(1, 12));
    })

    $("#j4").on("click", function () {
        console.log(randomNumber(1, 12));
    })

    //add jewels to players score
    var jewel1 = 0;
    var jewel2 = 0; 
    var jewel3 = 0; 
    var jewel4 = 0;  

    function playerScore(){
        if (jewel1)
        console.log(jewel1 + jewel2 + jewel3 + jewel4); 
    }

    //wins counter

    //losses counter

});