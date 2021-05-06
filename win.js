//function to win by column
function win_col(){
  for (j = 0; j< col;j++){
    result = array[0][j]
    rep = 1
    for (i = 1; i < rows; i++){
      if (array[i][j] > 0 && array[i][j] == array[i-1][j]){
        result += array[i][j]
        rep += 1
      }else{
        result = array[i][j]
        rep = 1
      }
      if (result == 4 && rep == 4){
        $("#infotext1").text(p1 + " WON!")
        start = 0
      }else if (result == 8 && rep == 4){
        $("#infotext1").text(p2 + " WON!")
        start = 0
      }
    }
  }
}
// function to win by row
function win_row(){
  for (j = 0; j< rows; j++){
    result = array[j][0]
    rep = 1
    for (i = 1; i < col; i++){
      if (array[j][i] > 0 && array[j][i] == array[j][i-1]){
        result += array[j][i]
        rep += 1
      }else{
        result = array[j][i]
        rep = 1
      }
      if (result == 4 && rep == 4){
        $("#infotext1").text(p1 + " WON!")
        start = 0
      }else if (result == 8 && rep == 4){
        $("#infotext1").text(p2 + " WON!")
        start = 0
      }
    }
  }
}

//function to win by diagonal
function diag_top_win(){
  for (i=0; i<rows; i++){
    for(j=0;j<col;j++){

      pos_row = i
      pos_col = j
      result = array[i][j]
      rep = 1
      stp = 0
      while (stp == 0){
        if (pos_row-1>=0 && pos_col+1>=0 && pos_row-1< rows && pos_col+1< col){
          if(array[pos_row][pos_col] == array[pos_row-1][pos_col+1]){
            result += array[pos_row-1][pos_col+1]
            rep += 1
            if (result == 4 && rep == 4){
              $("#infotext1").text(p1 + " WON!")
              start = 0
            }else if (result == 8 && rep == 4){
              $("#infotext1").text(p2 + " WON!")
              start = 0
            }
          }else{
            result = array[j][i]
            rep = 1
          }
        }else{
          stp = 1
        }
        pos_row = pos_row - 1
        pos_col = pos_col + 1
      }

    }
  }
}

//function to win by diagonal
function diag_bottom_win(){
  for (i=0; i<rows; i++){
    for(j=0;j<col;j++){

      pos_row = i
      pos_col = j
      result = array[i][j]
      rep = 1
      stp = 0
      while (stp == 0){
        if (pos_row+1>=0 && pos_col+1>=0 && pos_row+1< rows && pos_col+1< col){
          if(array[pos_row][pos_col] == array[pos_row+1][pos_col+1]){
            result += array[pos_row+1][pos_col+1]
            rep += 1
            if (result == 4 && rep == 4){
              $("#infotext1").text(p1 + " WON!")
              start = 0
            }else if (result == 8 && rep == 4){
              $("#infotext1").text(p2 + " WON!")
              start = 0
            }
          }else{
            result = array[j][i]
            rep = 1
          }
        }else{
          stp = 1
        }
        pos_row = pos_row + 1
        pos_col = pos_col + 1
      }

    }
  }
}
