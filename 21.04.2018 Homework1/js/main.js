var circle = document.querySelector('#circle');
var bg = document.querySelector('#bg');

var circleColor = document.querySelector('#ballcolor');
var bgColor = document.querySelector('#bgcolor');
var circlePhoto = document.querySelector('#circlePhoto');
var bgPhoto = document.querySelector('#bgPhoto');
var radious = document.querySelector('#radious');
var speed = document.querySelector('#myRange');


circleColor.addEventListener("change", function(){
   var circleColorValue = circleColor.value;
   circle.style.background=circleColorValue;
})

bgColor.addEventListener("change", function(){
    var bgColorValue = bgColor.value;
    bg.style.background=bgColorValue;
 })

circlePhoto.addEventListener("keyup", function (e) {
    if (e.which == 13) {
        var circlePhotoValue = circlePhoto.value;
        console.log(circlePhotoValue);
        circle.style.background="url('"+circlePhotoValue+"')";
        circle.style.backgroundRepeat= "none";
        circle.style.backgroundSize = "cover";
        circlePhoto.value="";
    }
})

bgPhoto.addEventListener("keyup", function (e) {
    if (e.which == 13) {
        var bgPhotoValue = bgPhoto.value;
        console.log(bgPhotoValue);
        bg.style.background="url('"+bgPhotoValue+"')";
        bg.style.backgroundRepeat= "none";
        bg.style.backgroundSize = "cover";
        bgPhoto.value="";
    }
})

radious.addEventListener("keyup", function (e) {
    if (e.which == 13) {
        var radiousValue=radious.value;
        var diameter=radiousValue/2;
        circle.style.width=diameter+"px";
        circle.style.height=diameter+"px";
        radious.value="";
    }
})

speed.addEventListener("change", function(){
    var speedValue = speed.value;
    console.log(speedValue);
    circle.style.animationDuration=speedValue+"s";
 })

