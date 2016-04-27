$(document).on('ready', function() {
  var turn = 0;
  var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,9]];
  startGame();

  function checkWinner() {
    for(var i = 0; i < winningCombos.length; i++) {
      var combo = winningCombos[i];

      if ($('.x').hasClass(combo[0]) && $('.x').hasClass(combo[1]) && $('.x').hasClass(combo[2])) {
        alert("X wins!!");
        refreshGame();
        return true
      } else if ($('.o').hasClass(combo[0]) && $('.o').hasClass(combo[1]) && $('.o').hasClass(combo[2])) {
        alert("O wins!!");
        refreshGame();
        return true
      };
      return false
    };
  function refreshGame() {
      $('td').removeClass('x').removeClass('o').html("");
      turn = 0;
      startGame();
  };

  function gameOver() {}
    if (turn === 9 && (checkWinner () === false)) {
      alert("Game Over!");
      refreshGame()
    };
  };
  function startGame() {
    $('td').on('click', function () {
      if (turn % 2 === 0) {
        $(this).html('X').addClass('x');
      } else {
        $(this).html('O').addClass('o');
      }

    $(this).off('click');
    turn++;

      checkWinner();
      // refreshGame();
    });
  };

});
