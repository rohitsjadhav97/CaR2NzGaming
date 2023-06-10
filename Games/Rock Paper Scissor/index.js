function gameOn(user_choice){
    $(".option-img img").addClass("unclick");
    $(".user img").attr("src","./images/rock.png");
    $(".computer img").attr("src","./images/comp_rock.png");

    const array=["rock","paper","scissor"];
    const computer_choice=array[Math.floor(Math.random()*array.length)];
    
    // console.log(computer_choice);
    $(".container .images").addClass("start");
    $(".container .computer img").removeClass("rotate");

    let time = setTimeout(()=>{
        
        $(".container .images").removeClass("start");
        $(".container .computer img").addClass("rotate");
        $(".user img").attr("src","./images/"+user_choice+".png");
        $(".computer img").attr("src","./images/"+computer_choice+".png");
        if(user_choice==="rock" && computer_choice==="scissor" || user_choice==="scissor" && computer_choice==="paper" || user_choice==="paper" && computer_choice==="rock"){
            $(".game-result").text("You Won!!!");
            // console.log("You WOn");
        }else if(user_choice===computer_choice){
            $(".game-result").text("Draw!");
            // console.log("Draw");
        }else{
            $(".game-result").text("You Lose!!!");
            // console.log("You Lose");
        }
        $(".option-img img").removeClass("unclick");

    },2500);

}