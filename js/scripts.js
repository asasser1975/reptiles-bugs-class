$(document).ready(function() {

  $("#animal-selection").submit(function() {
    event.preventDefault();
    var animal = $("#animal").val();
    alert(animal);

    if (animal === '1') {
      $('#turtles').show();
    } else if (animal === '2') {
      $('#snakes').show();
    }  else  {
      $('#bugs').show();
    }
  });
});
