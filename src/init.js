$(document).ready(function(){
  window.dancers = [];

  $('#typeOfDancer').on('change', function(e) {
    var choice = $('#typeOfDancer').val() + 'Dancer';
    if(choice === 'PersonDancer') {
      $('body').css( { 'background': 'url(img/people/fighting-game-background.gif) no-repeat center top', 'background-size' : '100%' } );
    } else {
      $('body').css( { 'background': 'url(img/danceFloor.png) no-repeat center top', 'background-size' : '100%' } );
    }
  });
  $(".addDancerButton").on("click", function(event){
    var choice = $('#typeOfDancer').val() + 'Dancer';
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[choice];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);

    $('body').append(dancer.$node);
  });



// var dancer = new dancerMakerFunction(
//       $("body").height() * Math.random(),
//       $("body").width() * Math.random(),
//       Math.random() * 1000
//     );
//     $('body').append(dancer.$node);
});

