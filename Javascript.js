$(function(){
    $(".button-container-1").on("click",function(){
        $('body').toggleClass("body-color");
        $(".button-container-1").toggleClass("button-container");
        $("h1").toggleClass("text");
        $("h2").toggleClass("text");
        $("p").toggleClass("text");

        $(".button-1").toggleClass("button");
    })
}); 