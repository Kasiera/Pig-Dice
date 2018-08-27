function Die() {
  this.dieRoll = 0;
}

Die.prototype.value = function() {
  this.dieRoll = Math.floor(Math.random() * (6)) + 1;
  return this.dieRoll;
};

function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
  this.turn = false;
}

Player.prototype.roll = function() {
  var die = new Die();
  var rollResult = die.value()
  if (rollResult !== 1) {
    this.turnScore += rollResult;
  } else {
    this.turnScore = 0;
    this.turn = false;
  }
};

Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  this.turn = false;
};


$(document).ready(function() {
  var player1 = new Player ("player1");
  player1.turn = true;
  var player2 = new Player ("player2");
  player2.turn = false;

$("#player1roll").click(function() {
  player1.roll();

  var newTurnScore = player1.turnScore;
  var newTotalScore = player1.totalScore;
  $(".player1TotalScore").text(newTotalScore);
  $(".player1TurnScore").text(newTurnScore);
  if(player1.turn === false) {
    player2.turn = true;
    }
});

$("#player1hold").click(function() {
  player1.hold();

  var newTurnScore = 0;
  var newTotalScore = player1.totalScore;
  $(".player1TotalScore").text(newTotalScore);
  $(".player1TurnScore").text(newTurnScore);
  if(player1.turn === false) {
    player2.turn = true;
    }
});


$("#player2roll").click(function() {
  player2.roll();

  var newTurnScore = player2.turnScore;
  var newTotalScore = player2.totalScore;
  $(".player2TotalScore").text(newTotalScore);
  $(".player2TurnScore").text(newTurnScore);
  if(player2.turn === false) {
    player1.turn = true;
    }
});

$("#player2hold").click(function() {
  player2.hold();

  var newTurnScore = 0;
  var newTotalScore = player2.totalScore;
  $(".player2TotalScore").text(newTotalScore);
  $(".player2TurnScore").text(newTurnScore);
  if(player2.turn === false) {
    player1.turn = true;
    }
});
});
