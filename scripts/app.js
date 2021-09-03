/*alert("hey!!!") Tested to see if js was linked*/
var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

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
