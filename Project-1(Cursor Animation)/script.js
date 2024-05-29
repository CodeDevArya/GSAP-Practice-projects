let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image = document.querySelector("#image");

main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
        ease: "back.out",
    })
})
image.addEventListener("mouseenter", (dets) => {
    cursor.innerHTML = "view more";
    gsap.to(cursor, {
        x: dets.x,
        backgroundColor:"#ffffff7c",
        scale: 2,
        y: dets.y,
        duration: 0.5,
        ease: "back.out",
    })
})
image.addEventListener("mouseleave", (dets) => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor:"#fff",
        duration: 0.5,
        ease: "back.out",
    })
})