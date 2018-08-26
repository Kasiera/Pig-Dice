var player1, player2;

function rollDice() {
  var die1 = document.getElementById('die1');
  var die2 = document.getElementById('die2');
  var status =document.getElementById("status");
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  status.innerHTML = "You rolled " + diceTotal + ".";
  if (d1 == d2){
    status.innerHTML += " DOUBLES!! You earned an extra roll!"
  }
  $('#output').show();
}
 $(document).ready(function () {
   $("#btn").click(rollDice);
   $("#players").click(function functionName() {
    $("div#setup").hide();
    $("#btn").show();
    player1 = $("#player1").val();
    player2 = $("#player2").val();

   });
 });
