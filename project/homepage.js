var bike=document.querySelector("#bikeAni")
var text=document.querySelector("#heading2")

function bikeMove()
{
    bike.style.transform="translateX(220px)"
    bike.style.transform="transform 3s"
    text.style.transform="translateY(0px)"
    text.style.filter="opacity(1)"
    text.style.transition="transform 3s,filter 5s"
}