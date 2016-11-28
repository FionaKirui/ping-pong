function pingPong(goal) {
  var output = [];
  for (var a = 1; a <= goal; a++) {
    if (a % 15 === 0) {
      output.push("ping-pong");
    } else if (a % 3 === 0) {
      output.push("ping");
    } else if (a % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(a);
    }
  }
  return output;
}

$(document).ready(function() {
  $('#gameform').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $('#answer').append("<li>" + element + "</li>");
    });
  });
});
