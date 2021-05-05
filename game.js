// variable players
var players = []
var p1 = ""
var p2 = ""
// variable dim tabular
var col = $("#tabuleiro tr").length
var rows = $("#tabuleiro tr td").length/col

//validation to number of rows equal to number of columns
if (col == rows) {
  // array calculation tabular
  array = zeros([col, rows])
  //array tabular position
  array_tabuleiro = increm(rows, col)
}else{
   alert("Number of Rows is Difference number of Columns");
}

//Start the game
var start = 0

//var table = $("#tabuleiro #t0 #m0")
//table.css("background-color", "green")

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
  //able player1 and disable player2
  $("#player1").prop('disabled', false);
  $("#player2").prop('disabled', true);
  //initiate arrays
  array = zeros([col, rows])
  array_tabuleiro = increm(rows, col)
  //start the game
  var start = 1
})

//play

// $("#tabuleiro #t0 #m0").click(function(){
//
// })

//Create a game and validations;

//Create the validation win;
