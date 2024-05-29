let initial = `M 10 100 Q 600 100 1190 100`
let final = `M 10 100 Q 600 100 1190 100`
let string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
    initial = `M 10 100 Q ${dets.x} ${dets.y} 1190 100`
    gsap.to("svg path", {
        attr: { d: initial },
        duration: 0.3,
        ease: "power3.out",
    })
})
string.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: { d: final },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
    })
})