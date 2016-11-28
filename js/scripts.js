function pingPong(solution) {
  var output = [];
  for (var a = 1; a <= solution; a++) {
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
    var solution = $('#soution').val();
    var output = pingPong(solution);
    output.forEach(function(element) {
      $('#answer').append("<li>" + element + "</li>");
    });
  });
});
