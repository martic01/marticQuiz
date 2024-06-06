

function currentValue() {
    let new1 = $("#cash-count").val()
    let Value = parseInt(new1)
    return Value
}


function addCash() {
    return currentValue() + 50
}
function removeCash() {
    return currentValue() - 100
}

function  value (){


    if (currentValue() >= 700){
        $(".content-cont").hide();
        $(".pp1").text("You are the best");
        $(".himg").html('<img src="img/real gif 3.gif" alt="happy face">');
        $("#endbut").text("Play again");
        $(".pp2").text("You earned $" + currentValue() );
        $("#end").show();
    }
    else if(currentValue() <= 300){
        $(".content-cont").hide();
        $(".himg").html('<img src="img/real gif 2.gif" alt="calm face">');
        $(".pp1").text("You escaped");
        $("#endbut").text("Play again");
        $(".pp2").text("You earned $" + currentValue() );
        $("#end").show();
    }else{
        $(".content-cont").hide();
        $(".pp1").text("You did well");
        $("#endbut").text("Play again");
        $(".himg").html('<img src="img/real gif 2.gif" alt="calm face">');
        $(".pp2").text("You earned $" + currentValue() );
        $("#end").show();
    }

}

function startTimer() {
    let timeLeft = 61; 
    let timerInterval;

    timerInterval = setInterval(function() {
      if (timeLeft > 0) {
        timeLeft--;
        $('#countdown').text(timeLeft);
      } else {
        $(".content-cont").hide();
        $("#end").show();
        
      }
    }, 1000); 
  }

  function checkAmount() {
    if (currentValue() <= 0){
        $(".content-cont").hide();
        $(".pp1").text("Sorry you failed");
        $(".pp2").text("Out of funds" );
        $("#end").show();
        console.log(currentValue())
       }
       else if ( currentValue() < 250){
        $("#cash-count").addClass("low")
       }
       else if ( currentValue() >= 700){
        $("#cash-count").addClass("high")
       }
    else {
        $("#cash-count").removeClass("low")
        $("#cash-count").removeClass("high")
    }
  }
 
 


$(document).ready(function () {
    console.log(currentValue())

   
  
   
    $(".ans").click(function () {
        let answer = $(this).val()
        let index = $(".ans").index(this);
        $("#cash-count").addClass("big")

        if (answer === "1") {
            $(".ans").eq(index).addClass("correct")
            $("#cash-count").val(addCash())
            $("#next1").show()
            $("#audio2").html('<audio src="audio/correct-6033.mp3" autoplay></audio>');

        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans").eq(0).addClass("correct")
            $(".ans").eq(index).addClass("wrong")
            $("#next1").show()
            $("#audio2").html('<audio src="audio/wrong-47985.mp3" autoplay></audio>');
        }

        $(".ans").prop("disabled", true);
        checkAmount()
    });

    $(".ans2").click(function () {
        let answer = $(this).val()
        let index = $(".ans2").index(this);
        $("#cash-count").addClass("big")

        if (answer === "3") {
            $(".ans2").eq(index).addClass("correct")
            $("#cash-count").val(addCash())
            $("#next2").show()
            $("#audio2").html('<audio src="audio/correct-6033.mp3" autoplay></audio>');
        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans2").eq(2).addClass("correct")
            $(".ans2").eq(index).addClass("wrong")
            $("#next2").show()
            $("#audio2").html('<audio src="audio/wrong-47985.mp3" autoplay></audio>');
        }

        $(".ans2").prop("disabled", true);
        checkAmount()
    });

    $(".ans3").click(function () {
        let answer = $(this).val()
        let index = $(".ans3").index(this);

        if (answer === "2") {
            $(".ans3").eq(index).addClass("correct")
            $("#cash-count").val(addCash())
            $("#next3").show()
            $("#audio2").html('<audio src="audio/correct-6033.mp3" autoplay></audio>');
        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans3").eq(1).addClass("correct")
            $(".ans3").eq(index).addClass("wrong")
            $("#next3").show()
            $("#audio2").html('<audio src="audio/wrong-47985.mp3" autoplay></audio>');
        }

        $(".ans3").prop("disabled", true);
        checkAmount()
    });

    $(".ans4").click(function () {
        let answer = $(this).val()
        let index = $(".ans4").index(this);

        if (answer === "1") {
            $(".ans4").eq(index).addClass("correct")
            $("#cash-count").val(addCash())
            $("#next4").show()
            $("#audio2").html('<audio src="audio/correct-6033.mp3" autoplay></audio>');
        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans4").eq(0).addClass("correct")
            $(".ans4").eq(index).addClass("wrong")
            $("#next4").show()
            $("#audio2").html('<audio src="audio/wrong-47985.mp3" autoplay></audio>');
        }

        $(".ans4").prop("disabled", true);
        checkAmount()
    });

    $(".ans5").click(function () {
        let answer = $(this).val()
        let index = $(".ans5").index(this);

        if (answer === "4") {
            $(".ans5").eq(index).addClass("correct")
            $("#cash-count").val(addCash())
            $("#next5").show()
            $("#audio2").html('<audio src="audio/correct-6033.mp3" autoplay></audio>');
        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans5").eq(3).addClass("correct")
            $(".ans5").eq(index).addClass("wrong")
            $("#next5").show()
            $("#audio2").html('<audio src="audio/wrong-47985.mp3" autoplay></audio>');
        }

        $(".ans5").prop("disabled", true);
    });

    $(".ans6").click(function () {
        let answer = $(this).val()
        let index = $(".ans6").index(this);

        if (answer === "2") {
            $(".ans6").eq(index).addClass("correct")
            $("#cash-count").val(addCash())
            $("#next6").show()
            $("#audio2").html('<audio src="audio/correct-6033.mp3" autoplay></audio>');
        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans6").eq(1).addClass("correct")
            $(".ans6").eq(index).addClass("wrong")
            $("#next6").show()
            $("#audio2").html('<audio src="audio/wrong-47985.mp3" autoplay></audio>');
        }

        $(".ans6").prop("disabled", true);
        checkAmount()
    });

    $(".ans7").click(function () {
        let answer = $(this).val()
        let index = $(".ans7").index(this);

        if (answer === "3") {
            $(".ans7").eq(index).addClass("correct")
            $("#cash-count").val(addCash())
            $("#next7").show()
            $("#audio2").html('<audio src="audio/correct-6033.mp3" autoplay></audio>');
        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans7").eq(2).addClass("correct")
            $(".ans7").eq(index).addClass("wrong")
            $("#next7").show()
            $("#audio2").html('<audio src="audio/wrong-47985.mp3" autoplay></audio>');
        }

        $(".ans7").prop("disabled", true);
        checkAmount()
    });

    $("#go").click(function () {
        $(".show").show();
        $("#start").hide();
      
    });
    $("#start").click(function () {
        $("#audio").html('<audio src="audio/Alan_Walker_The_Walkers_-_Unity.mp3" autoplay loop></audio>');
        $(".audio").show();
      
    });

    $(".show").click(function () {
        $(".content-cont").show();
        $(".show").hide();
        $("#audio").html('<audio src="audio/Alan_Walker_The_Walkers_-_Unity.mp3"></audio>');
        startTimer();
    });

   

    $(".butt").click(function () {
        let butNum = $(this).val()
        $(".butt").hide();


        if ( butNum === "1") {
            $("#quest-div2").show();
            $("#quest-div1").hide();
        

        }
        else if ( butNum === "2") {
            $("#quest-div3").show();
            $("#quest-div2").hide();
            

        }
        else if ( butNum === "3") {
            $("#quest-div4").show();
            $("#quest-div3").hide();
            

        }
        else if ( butNum === "4") {
            $("#quest-div5").show();
            $("#quest-div4").hide();
            

        }
        else if ( butNum === "5") {
            $("#quest-div6").show();
            $("#quest-div5").hide();
            

        }
        else if ( butNum === "6") {
            $("#quest-div7").show();
            $("#quest-div6").hide();
            

        }

        else if ( butNum === "7") {
           value();

        }

    });









});