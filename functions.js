//initiate array function
function zeros(dimensions) {
    var array = [];
    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }
    return array;
}

// turn all grey
function allGrey(){
  for (i = 0; i<rows; i++){
    for(j = 0; j<col; j++){
      var table = $("#tabuleiro #t"+i+" #m"+j)
      table.css("background-color", "grey")
    }
  }
}

// initiate array position tabular function
function increm(rows, col){
  array_vector = zeros([col, rows])
  for (var i = 0; i<rows; i++){
    x = 0
    for (var j = 0; j<col; j++){
      array_vector[i][j] = x
      x += 1
    }
  }
  return array_vector
}

//Connect Players;
function playername(){
  player1 = prompt("Nome do Jogador 1: ")
  if (player1 == "" || player1 == null){
    player1 = "Player 1"
  }
  player2 = prompt("Nome do Jogador 2: ")
  if (player2 == "" || player2 == null){
    player2 = "Player 2"
  }
  return [player1, player2]
}


function playgame(column){
  //validate start the game
  if (start == 1){
    //validate this column is full
    if (array[0][column] == 0){
      //validation the last chip
      if (array[rows-1][column] > 0){
        insertChip(column)
        //insert last ship
      }else if (turn == p1){
        array[rows-1][column] = 1
        $("#tabuleiro #t"+ (rows-1) + " #m"+ (column)).css("background-color", "green")
        turn = p2
        game = 1
        //change information text
        $("#infotext1").text(p2 + ", it's your turn!")
        //able player1 and disable player2
        $("#player1").prop('disabled', true);
        $("#player2").prop('disabled', false);
      }else{
        array[rows-1][column] = 2
        $("#tabuleiro #t"+ (rows-1) + " #m"+ (column)).css("background-color", "black")
        turn = p1
        game = 1
        //change information text
        $("#infotext1").text(p1 + ", it's your turn!")
        //able player1 and disable player2
        $("#player1").prop('disabled', false);
        $("#player2").prop('disabled', true);
      }
    }
  }else{
    alert("Please Click in Restart")
  }
}


function insertChip(column){
  //verifing all chips
  stop = 0
  for (i = 1; i<(rows); i++){
    //stop criteria
    if (stop == 0){
      //if array with chip
      if (array[i][column] > 0){
        // push in last position
        if (turn == p1){
          array[i-1][column] = 1
          position = "#tabuleiro #t"+ (i-1) + " #m"+ (column)
          $(position).css("background-color", "green")
          turn = p2
          stop = 1
          game = 1
          //change information text
          $("#infotext1").text(p2 + ", it's your turn!")
          //able player1 and disable player2
          $("#player1").prop('disabled', true);
          $("#player2").prop('disabled', false);
        }else{
          array[i-1][column] = 2
          position = "#tabuleiro #t"+ (i-1) + " #m"+ (column)
          $(position).css("background-color", "black")
          turn = p1
          stop = 1
          game = 1
          //change information text
          $("#infotext1").text(p1 + ", it's your turn!")
          //able player1 and disable player2
          $("#player1").prop('disabled', false);
          $("#player2").prop('disabled', true);
        }
      }
    }
  }
}
