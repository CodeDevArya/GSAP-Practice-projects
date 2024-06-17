Draggable.create("#dragMe", {
    type: "x",
    bounds: ".container"
});
function checkOverlap() {
    let div1 = document.querySelector(".circle");
    let div2 = document.querySelector("#dragMe")
    let rect1 = div1.getBoundingClientRect();
    let rect2 = div2.getBoundingClientRect();
    if (rect1.left < rect2.right) {
        document.querySelector("#video2").style.opacity = 1;
    }else{
        document.querySelector("#video2").style.opacity = 0;
    }
}
window.addEventListener("mousemove",()=>{
    checkOverlap()
})