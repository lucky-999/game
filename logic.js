let players = ['x', 'o'];
//let activePlayer = 0;
let activePlayer = Math.floor(Math.random() * players.length);
let playboard;


function startGame(){
  playBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
//  if (activePlayer === players[0]) {
//    console.log("Ход игрока: номер 1");
//  } else {
//    console.log("Ход игрока: номер 2");
//  }
renderBoard(playBoard);
}

function nextPlayer() {
  activePlayer = +!activePlayer;
}

function checkWinner() {
  let i;
  let j;
  for (i = 0; i < playBoard.length; i ++) {
    for (j = 0; j < playBoard[i].length; j ++) {
      if (playBoard[i][j] === players[activePlayer] && playBoard[i][j + 1] === players[activePlayer] && playBoard[i][j + 1 + 1] === players[activePlayer]) {
        showWinner(activePlayer);
      } else if (playBoard[j][i] === players[activePlayer] && playBoard[j + 1][i] === players[activePlayer]){
        console.log('есть победитель');
      }
    }
  }
}

// function checkWinner() {
//   if (((playBoard[0][0] === players[activePlayer]) && (playBoard[0][1] === players[activePlayer]) && (playBoard[0][2] === players[activePlayer])) || 

//   ((playBoard[1][0] === players[activePlayer]) && (playBoard[1][1] === players[activePlayer]) && (playBoard[1][2] === players[activePlayer])) || 

//   ((playBoard[2][0] === players[activePlayer]) && (playBoard[2][1] === players[activePlayer]) && (playBoard[2][2] === players[activePlayer])) || 

//   ((playBoard[0][0] === players[activePlayer]) && (playBoard[1][0] === players[activePlayer]) && (playBoard[2][0] === players[activePlayer])) || 

//   ((playBoard[0][1] === players[activePlayer]) && (playBoard[1][1] === players[activePlayer]) && (playBoard[2][1] === players[activePlayer])) || 

//   ((playBoard[0][2] === players[activePlayer]) && (playBoard[1][2] === players[activePlayer]) && (playBoard[2][2] === players[activePlayer])) || 

//   ((playBoard[0][0] === players[activePlayer]) && (playBoard[1][1] === players[activePlayer]) && (playBoard[2][2] === players[activePlayer])) || 

//   ((playBoard[0][2] === players[activePlayer]) && (playBoard[1][1] === players[activePlayer]) && (playBoard[2][0] === players[activePlayer]))) {
    
//      showWinner(activePlayer);
//   } else {
//       nextPlayer();
//   }
// }
  

function click(row, col) {
  playBoard[row][col] = players[activePlayer];
  renderBoard(playBoard);
  checkWinner();
}