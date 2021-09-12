/*alert("hey!!!") Tested to see if js was linked*/
var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)"; /*rotate counter-clockwise */
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)"; /*rotate clockwise */
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}