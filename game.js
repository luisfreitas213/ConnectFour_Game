var players = []
var p1 = ""
var p2 = ""
array = zeros([7, 7]);
var table = $("#tabuleiro #t0 #m0")
table.css("background-color", "green")
//press Restart
$("#bottonRestart").click(function(){
  //choose name of players
  players = playername()
  p1 = players[0]
  p2 = players[1]
  //choose player 1 turn
  turn = p1
  //change bottons name
  $("#player1").text(p1)
  $("#player2").text(p2)
  //change information text
  $("#infotext1").text(p1 + ", it's your turn!")
  //initiate array
  array = zeros([7, 7]);
})


//Create vectors for the game;

//Create a game and validations;

//Create the validation win;
