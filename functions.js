//initiate array function
function zeros(dimensions) {
    var array = [];
    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }
    return array;
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
