$(document).ready(function() {
$(".js").hide();
$(".oop").hide();
$(".scoreboard").hide();
  $("#submit").click(function(){
    $(".js").show();
    $(".webbased").hide();
    $(".oop").hide();
    $(".scoreboard").hide();
  });

  $("#submit1").click(function(){
    $(".js").hide();
    $(".webbased").hide();
    $(".scoreboard").hide();
    $(".oop").show();


    $("#submit1").click(function(event) {
      event.preventDefault();
      })
  });
  $("#submit2").click(function(){
    $(".js").hide();
    $(".webbased").hide();
    $(".oop").hide();
    $(".scoreboard").show();
    answer()
  });
  var result = 0;

  $("#submit").click(function(event) {
    event.preventDefault();
    var mean = 0;
    var answer1 = parseInt($('input[name=answer1]:checked').val());
    var answer2 = parseInt($('input[name=answer2]:checked').val());
    var answer3 = parseInt($('input[name=answer3]:checked').val());
    var answer4 = parseInt($('input[name=answer4]:checked').val());
    var answers = [answer1,answer2,answer3,answer4];
    console.log(answer1,answer2,answer3,answer4);
    answers.forEach(function(answer) {
      if(answer === 5) {
        mean +=10;
      alert(mean);
      result+=mean;
      }
      })
    })

      $("#submit2").click(function(event) {
        event.preventDefault();
        var sum = 0;
        var question1 = parseInt($('input[name=question1]:checked').val());
        var question2 = parseInt($('input[name=question2]:checked').val());
        var question3 = parseInt($('input[name=question3]:checked').val());
        var question4 = parseInt($('input[name=question4]:checked').val());
        var question = [question1,question2,question3,question4];
        console.log(question1,question2,question3,question4);
        question.forEach(function(answer) {
          if(answer === 5) {
            sum +=10;
            alert("Total points: "+sum);
          }
          })
          alert(sum);
          result+=sum;
          $("#scoreboard").text(result);
        })
  });
  function answer(){
    var total = 0;
    var javascript1 = parseInt($('input[name=javascript1]:checked').val());
    var javascript2 = parseInt($('input[name=javascript2]:checked').val());
    var javascript3 = parseInt($('input[name=javascript3]:checked').val());
    var javascript = [javascript1,javascript2,javascript3];
    console.log(javascript1,javascript2,javascript3);
    javascript.forEach(function(answer) {
      if(answer === 5) {
        total +=10;
        alert("Total points: "+total);
        alert("Mean is: "+mean);
      }
      })
      alert(total);
      result+=total;
    }
$("#scoreboard").hide();
$("#results").show();
$('#result').text(correctScore);
$("#next").click(function(e){
    e.preventDefault();
    oTurn.turn("next");
});
