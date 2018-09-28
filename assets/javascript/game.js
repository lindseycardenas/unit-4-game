$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

    var counter = 0;

    var win = 0; 
    var lose = 0; 
  
    $("#number-to-guess").text(targetNumber);
    $("#wins").text(win); 
    $("#losses").text(lose); 


    $("#j1").on("click", function () {
        var jewel1 = Math.floor(Math.random() * 12) + 1;
         counter += jewel1; 
         $("#playerScore").text(counter);

         if (counter === targetNumber){
             alert("You win!");
             win++;
         }
         else if (counter > targetNumber){
             alert("You went over! You lose!");
             lose++;
         }
    });

    $("#j2").on("click", function () {
        var jewel2 = Math.floor(Math.random() * 12) + 1;
        counter += jewel2; 
        $("#playerScore").text(counter);
        if (counter === targetNumber) {
            alert("You win!");
            win++;
        }
        else if (counter > targetNumber){
            alert("You went over! You lose!");
            lose++;
        }
    });

    $("#j3").on("click", function () {
        var jewel3 = Math.floor(Math.random() * 12) + 1;
        counter += jewel3; 
        $("#playerScore").text(counter);
        if (counter === targetNumber) {
            alert("You win!");
            win++
        }
        else if (counter > targetNumber){
            alert("You went over! You lose!");
            lose++;
        }
    });

    $("#j4").on("click", function () {
        var jewel4 = Math.floor(Math.random() * 12) + 1;
        counter += jewel4; 
        $("#playerScore").text(counter);
        if (counter === targetNumber) {
            alert("You win!");
            win++; 
        }
        else if(counter > targetNumber){
            alert("You went over! You lose!");
            lose++;
        }
    });



    