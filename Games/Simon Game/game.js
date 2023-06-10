var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var randomChoosenColour;
var level=0;
var started= false;
function nextSequence()
{
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level "+level);
  var randomVarible=Math.floor(Math.random()*4);
  randomChoosenColour=buttonColours[randomVarible];
  gamePattern.push(randomChoosenColour);
  $("#" + randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChoosenColour);
}

$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  //console.log(userClickedPattern);
});



function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  }, 100);
}

$(document).keydown(function(){
  if(!started){
    $("#level-title").text("Level "+level);
    nextSequence();
    started=true;
}
});

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    if(gamePattern.length===userClickedPattern.length){
        setTimeout(function(){
        nextSequence();
        },1000);
  }
}
  else
    {
      $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over");
      }, 200);
      playSound("wrong");
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }
}

function playSound(name){
  var sound=new Audio("sounds/"+name+".mp3");
  sound.play();
}

function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}