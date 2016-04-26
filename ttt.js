$(document).on('ready', function() {
  var turn = 0;
  var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,9]];

  function checkWinner() {
    // check for a winner here
    for(var i = 0; i < winningCombos.length; i++) {
      var combo = winningCombos[i];

      if ($('.x').hasClass(combo[0]) && $('.x').hasClass(combo[1]) && $('.x').hasClass(combo[2])) {
        alert("We have a winner!")
        return
      } else if ($('.o').hasClass(combo[0]) && $('.o').hasClass(combo[1]) && $('.o').hasClass(combo[2])) {
        alert("We have a winner!")
        return
    };

      if

      // combo will be [1,2,3]
      // compare each combo to a playerState array or use the DOM => $('.x')
      // alert("We have a winner!")
    }
  }


//   If a combo (of Xs or Os) is the same as a winning combo,
//   then alert("We have a winner!")




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




// $.inArray( combo[0], [ $('.x').attr('id').each ] );
// $.inArray( combo[1], [ $('.x') ] );
// $.inArray( combo[2], [ $('.x') ] );
