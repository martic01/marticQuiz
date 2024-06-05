

function currentValue() {
    let new1 = $("#cash-count").val()
    let Value = parseInt(new1)
    return Value
}


function currentValue2() {
    let new1 = $("#cash-count2").val()
    let Value = parseInt(new1)
    return Value
}



function addCash() {
    return currentValue() + 50
}
function removeCash() {
    return currentValue() - 100
}




$(document).ready(function () {

    
   
    $(".ans").click(function () {
        let answer = $(this).val()
        let index = $(".ans").index(this);

        if (answer === "1") {
            $(".ans").eq(index).addClass("correct")
            $("#cash-count").val(addCash())
            $("#next1").show()
        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans").eq(0).addClass("correct")
            $(".ans").eq(index).addClass("wrong")
            $("#next1").show()
        }

        $(".ans").prop("disabled", true);
    });

    $(".ans2").click(function () {
        let answer = $(this).val()
        let index = $(".ans2").index(this);

        if (answer === "3") {
            $(".ans2").eq(index).addClass("correct")
            $("#cash-count").val(addCash())
            $("#next2").show()
        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans2").eq(2).addClass("correct")
            $(".ans2").eq(index).addClass("wrong")
            $("#next2").show()
        }

        $(".ans2").prop("disabled", true);
    });

    $(".ans3").click(function () {
        let answer = $(this).val()
        let index = $(".ans3").index(this);

        if (answer === "2") {
            $(".ans3").eq(index).addClass("correct")
            $("#cash-count").val(addCash())
            $("#next3").show()
        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans3").eq(1).addClass("correct")
            $(".ans3").eq(index).addClass("wrong")
            $("#next3").show()
        }

        $(".ans3").prop("disabled", true);
    });

    $(".ans4").click(function () {
        let answer = $(this).val()
        let index = $(".ans4").index(this);

        if (answer === "1") {
            $(".ans4").eq(index).addClass("correct")
            $("#cash-count").val(addCash())
            $("#next4").show()
        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans4").eq(0).addClass("correct")
            $(".ans4").eq(index).addClass("wrong")
            $("#next4").show()
        }

        $(".ans4").prop("disabled", true);
    });

    $(".ans5").click(function () {
        let answer = $(this).val()
        let index = $(".ans5").index(this);

        if (answer === "4") {
            $(".ans5").eq(index).addClass("correct")
            $("#cash-count").val(addCash())
            $("#next5").show()
        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans5").eq(3).addClass("correct")
            $(".ans5").eq(index).addClass("wrong")
            $("#next5").show()
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
        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans6").eq(1).addClass("correct")
            $(".ans6").eq(index).addClass("wrong")
            $("#next6").show()
        }

        $(".ans6").prop("disabled", true);
    });

    $(".ans7").click(function () {
        let answer = $(this).val()
        let index = $(".ans7").index(this);

        if (answer === "3") {
            $(".ans7").eq(index).addClass("correct")
            $("#cash-count").val(addCash())
            $("#next7").show()
        }
        else{
            $("#cash-count").val(removeCash())
            $(".ans7").eq(2).addClass("correct")
            $(".ans7").eq(index).addClass("wrong")
            $("#next7").show()
        }

        $(".ans7").prop("disabled", true);
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

    });









});