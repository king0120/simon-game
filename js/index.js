$(document).ready(function() {
  var orderArray = [];
  var playerArray = [];
  var level = 0;

  function randomColor() {
    var ranNum = Math.floor(Math.random() * 4);
    if (ranNum === 0) {
      return '.green';
    } else if (ranNum === 1) {
      return '.red';
    } else if (ranNum === 2) {
      return '.yellow';
    } else if (ranNum === 3) {
      return '.blue';
    }
  };

  function triggerer(a) {
    $(a).trigger('focus');
    setTimeout(function() {
      $(a).blur();
    }, 500);
  };

  function game() {
    var i = 0;
    if (level < 4) {
      setInterval(function() {
        triggerer(orderArray[i]);
        i++;
      }, 1000);
    } else if (level < 8) {
      setInterval(function() {
        triggerer(orderArray[i]);
        i++;
      }, 750);
    } else if (level < 12) {
      setInterval(function() {
        triggerer(orderArray[i]);
        i++;
      }, 500);
    }
  };

  $('input').click(function() {
    if ($('input').prop('checked')) { //turns game on
      playerArray = [];
      orderArray.push(randomColor());
      game();
      level++;
      $('.numBox').text(level);
    } else { //turns off game
      $('.numBox').text("--");
      playerArray = []
      orderArray = [];
      level = 0;
    }; //end if input prop   
  }); //end input.click  

  $('.buttons a').focus(function() {
    var buttonClicked = $(this).attr('class');

    var buttonAudio = $('#' + buttonClicked + 'Sound')[0];
    buttonAudio.play();
  }); //end button sound player

  function arrayEquals(arr1, arr2) {

    if (arr1.length !== arr2.length) {

    } else {
      for (i = 0; i < arr2.length; i++) {
        if (arr1.length === arr2.length) {
          if (arr1[i] !== arr2[i]) {
          
            return false;
          } else {}
        }
      };
      
      return true
    }
  }

  $('.buttons a').click(function() {
    if ($(this).is(':focus')) {
      setTimeout(function() {
        $('.unclick').trigger('focus');
      }, 50);
    }

    var buttonClicked = $(this).attr('class');
    playerArray.push('.' + buttonClicked);

    if (arrayEquals(playerArray, orderArray) !== true && playerArray.length !== orderArray.length) {} else if (arrayEquals(playerArray, orderArray) === false && playerArray.length === orderArray.length) {
      $('.numBox').text("--");
      playerArray = [];
      orderArray = [];
      level = 0;
      $('#loss')[0].play();
      $('input').prop('checked', false);
    } else {
      playerArray = [];
      orderArray.push(randomColor());
      game();
      level++;
      $('.numBox').text(level);
    };
  });

}); //end Ready