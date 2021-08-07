var a = document.getElementById("myCanvas");
var b = a.getContext("2d");
var c = "red";

b.beginPath();
function circle(p,o){
    b.beginPath();
    b.strokeStyle = c;
    b.lineWidth = 2;
    b.arc(p,o,40,0,2*Math.PI);
    b.stroke();
   }

b.strokeStyle = c;
b.lineWidth = 2;
b.arc(400,200,40,0,2*Math.PI);
b.stroke();
a.addEventListener("mousedown", click);
function click(e) {
c = document.getElementById("color").value;
x = e.clientX - a.offsetLeft;
y = e.clientY - a.offsetTop;
circle(x,y);
}
function clearArea() {
b.clearRect(0,0,a.width,a.height)



}

function calculation() {
x=document.
y=
z= x*y

}