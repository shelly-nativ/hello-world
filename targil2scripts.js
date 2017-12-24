function hidep(){ 
    $(document).ready(function(){
    $("button").click(function(){
    $("p").hide();
    });
    });
    }
function buttontext(){
    $(document).ready(function(){
    $("button").click(function(){
    if(this.text=='Thank you'){
    $(this).text("Click here");}
    else{
    $(this).text("Thank you");}
    });
    });
    }
function colorchange(){
    $(document).ready(function(){
    $("div").click(function(){
    var bgColor= $(this).css("background-color");
    if(bgColor== 'rgb(255, 0, 0)'){
    $(this).css("background-color", "green");}
    else{$(this).css("background-color", "red");}
    });
    });
    }   