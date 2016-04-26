$(document).on('ready', function() {
  var turn = 0;
  var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,9]];

  function checkWinner() {
    // check for a winner here
    for(var i = 0; i < winningCombos.length; i++) {
      var combo = winningCombos[i];

      if ($('.x').hasClass(combo[0]) && $('.x').hasClass(combo[1]) && $('.x').hasClass(combo[2])) {
        alert("X wins!!")
        return
      } else if ($('.o').hasClass(combo[0]) && $('.o').hasClass(combo[1]) && $('.o').hasClass(combo[2])) {
        alert("O wins!!")
        return
      // } else if (turn === 9) {
      //   alert("Game Over..")
      };

    };
  };

  $('td').on('click', function () {
    if (turn % 2 === 0) {
      $(this).html('X').addClass('x');
    } else {
      $(this).html('O').addClass('o');
    }

    checkWinner();

    $(this).off('click');
    turn++
  });


});
